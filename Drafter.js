import { cards } from './cards.js';

// ***********************************************Global Declarations******************************************************/
/****Main Menu*****/
const hostButton = document.getElementById('Host_Button');
const joinButton = document.getElementById('Join_Button');
const soloButton = document.getElementById('Solo_Button');

const peerConnections = {}; // Store peer connections by client ID
const dataChannels = {};    // Store data channels by client ID
let clientIDCounter = 0; // Initialize a counter for generating unique IDs

const setDropdown = document.getElementById('Set_Selection');
const setSelectorDiv = document.getElementById('Set_Selector');
const startDraftButton = document.getElementById('Start_Draft_Button');
const packCardsDiv = document.getElementById('Pack_Cards');
const poolCardsDiv = document.getElementById('Pool_Cards');

const playerPacks = []; // Holds all generated packs for each player
const currentPackIndex = Array.from({ length: 8 }, () => 0); // Tracks which pack each player is on

const activePacks = []; // Current pack for each player
const playerPools = Array.from({ length: 8 }, () => []); // Pools for each player (Player 1 to Player 8)

let currentPack = [];
let draftEnded = false; // Tracks if the draft has ended
let selectedSet = null;
let filteredCards = [];
let selectedCardIndex = null;

/****Host  Declarations *****/
let rtcPeerConnection = null; 
const hostLobbyBody = document.getElementById('Host_Lobby_Body');
const gameModeMenu = document.getElementById('Game_Mode_Menu');
const generateLinkButton = document.getElementById('Generate_Link_Button');
const copyLinkButton = document.getElementById('Copy_Link_Button');
const joinLinkDisplay = document.getElementById('Join_Link_Display');
const waitingPoolContainer = document.getElementById('Waiting_Pool');
const startGameButton = document.getElementById('Start_Game_Button');
const backButton = document.getElementById('Back_Button');
hostLobbyBody.style.display = 'none';
let peerConnection;


const clientSDPText = document.getElementById('Client_SDP_Text');
const submitClientSDPButton = document.getElementById('Submit_Client_SDP');
const clientConnectionStatus = document.getElementById('Client_Connection_Status');

/****Client Declarations *****/
let dataChannel;
const joinGameMenu = document.getElementById('Join_Game_Menu');
const clientBody = document.getElementById('Client_Body');
const joinGameSubmitButton = document.getElementById('Join_Game_Submit');
const joinBackButton = document.getElementById('Join_Back_Button');
const clientBackButton = document.getElementById('Client_Back_Button');
const sdpResponseOverlay = document.getElementById('SDP_Response_Overlay');
const sdpResponseText = document.getElementById('SDP_Response_Text');
const copyResponseButton = document.getElementById('Copy_Response_Button');
const closeResponseButton = document.getElementById('Close_Response_Button');

/****Solo Player Declarations *****/
const soloDrafterBody = document.getElementById('Solo_Drafter_Body');
soloDrafterBody.style.display = 'none';

// *********************************************************************************************************************/
// ***********************************************DOMCONTENTLOADED******************************************************/
// *********************************************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {  
    // Show Host Lobby when Host button is clicked
    hostButton.addEventListener('click', () => {
        gameModeMenu.style.display = 'none'; // Hide the main menu
        hostLobbyBody.style.display = 'block'; // Show the host lobby
        setupSeats(); // Generate the seats
    });

    joinButton.addEventListener('click', () => {
        gameModeMenu.style.display = 'none'; // Hide the menu
        joinGameMenu.style.display = 'block'; // Show the Join Game menu
    });
    
    soloButton.addEventListener('click', () => {
        gameModeMenu.style.display = 'none'; // Hide the menu
        soloDrafterBody.style.display = 'block'; // Start solo draft
    });
    
});

// *******************************************************************************************************************************************************************************************//
// ********************************************************************************Multiplayer Functions**************************************************************************************//
// *******************************************************************************************************************************************************************************************//

// ***************************************Host Lobby Stuff*********************************************//

async function setupSeats() {
    const seatsContainer = document.getElementById('Seats');
    seatsContainer.innerHTML = ''; // Clear any existing seats

    for (let i = 0; i < 8; i++) {
        const seatId = `seat-${i + 1}`;
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('Seat');
        seatDiv.setAttribute('data-seat-id', seatId);

        seatDiv.innerHTML = `
            <h2>${seatId}</h2>
            <div>
                <h5>Send Key</h5>
                <textarea class="seat-textarea" id="${seatId}-hostKey" readonly rows="5" cols="50"></textarea>
                <button id="${seatId}-copyHostKeyButton">Copy to Clipboard</button>
            </div>
            <div>
                <h5>Receive Key</h5>
                <textarea class="seat-textarea" id="${seatId}-clientResponseKey" rows="5" cols="50"></textarea>
                <button id="${seatId}-setClientResponseKeyButton">Set Client Response Key</button>
            </div>
            <div>
                <h5>Game Action</h5>
                <span id="${seatId}-actionCount">0</span>
                <button id="${seatId}-actionButton">Perform Action</button>
            </div>
        `;

        seatsContainer.appendChild(seatDiv);

        // Create the peer connection and generate SDP and ICE candidates
        await createPeerConnection(seatId);

        // Copy Host Key to Clipboard
        document.getElementById(`${seatId}-copyHostKeyButton`).addEventListener('click', () => {
            const hostKeyTextarea = document.getElementById(`${seatId}-hostKey`);
            navigator.clipboard.writeText(hostKeyTextarea.value)
                .then(() => alert('Send Key copied to clipboard!'))
                .catch((err) => console.error('Failed to copy Send Key:', err));
        });

        // Handle Client Response Key
        document.getElementById(`${seatId}-setClientResponseKeyButton`).addEventListener('click', () => {
            const clientResponseKeyTextarea = document.getElementById(`${seatId}-clientResponseKey`);
            const clientResponseKey = JSON.parse(clientResponseKeyTextarea.value);
            setRemoteDescriptionAndICE(seatId, clientResponseKey);
        });

        document.getElementById(`${seatId}-actionButton`).addEventListener('click', () => {
            performGameAction(seatId);
        });
    }
}

async function createPeerConnection(id) {
    const pc = new RTCPeerConnection();
    const dataChannel = pc.createDataChannel("chat");

    peerConnections[id] = { pc, dataChannel };

    // Handle data channel events
    dataChannel.onopen = () => console.log(`Data channel open for ${id}`);
    dataChannel.onmessage = (event) => {
        console.log(`Message from ${id}: ${event.data}`);
    };

    // Handle ICE candidate generation
    const iceCandidates = [];
    pc.onicecandidate = (event) => {
        if (event.candidate) {
            iceCandidates.push(event.candidate.toJSON());
            updateHostKey(id, pc.localDescription, iceCandidates);
        }
    };

    // Handle incoming data channels
    pc.ondatachannel = (event) => {
        const remoteDataChannel = event.channel;
        peerConnections[id].dataChannel = remoteDataChannel;

        remoteDataChannel.onopen = () => console.log(`Remote data channel open for ${id}`);
        remoteDataChannel.onmessage = (event) => {
            console.log(`Remote message from ${id}: ${event.data}`);
        };
    };

    // Generate an SDP offer
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    updateHostKey(id, pc.localDescription, iceCandidates);
}

function updateHostKey(id, sdp, iceCandidates) {
    const hostKeyTextarea = document.getElementById(`${id}-hostKey`);
    const hostKey = {
        seatId: id, // Include the seat ID
        sdp,
        iceCandidates
    };
    hostKeyTextarea.value = JSON.stringify(hostKey, null, 2);
}

// Start the game
startGameButton.addEventListener('click', () => {
    if (rtcPeerConnection) {
        alert('Starting the game...');
        // Game logic goes here
    } else {
        alert('No active connection found!');
    }
});

// Add an event listener for the Back button
backButton.addEventListener('click', () => {
    // Stop hosting (cleanup)
    if (rtcPeerConnection) {
        rtcPeerConnection.close(); // Close the WebRTC connection
        rtcPeerConnection = null; // Clear the reference
        console.log('Hosting stopped and connection closed.');
    }

    // Clear the SDP link display text
    joinLinkDisplay.value = '';

    // Hide the Host Lobby and show the Game Mode Menu
    hostLobbyBody.style.display = 'none'; // Hide the host lobby
    gameModeMenu.style.display = 'block'; // Show the main menu
});

function performGameAction(seatId) {
    const actionCountSpan = document.getElementById(`${seatId}-actionCount`);
    let actionCount = parseInt(actionCountSpan.textContent, 10);
    actionCount += 1;
    actionCountSpan.textContent = actionCount;

    // Send the action count via the data channel
    const connection = peerConnections[seatId];
    if (connection && connection.dataChannel && connection.dataChannel.readyState === "open") {
        const message = {
            type: "Game Action",
            actionCount: actionCount
        };
        connection.dataChannel.send(JSON.stringify(message));
        console.log(`Game Action sent for ${seatId}:`, message);
    } else {
        console.warn(`No active data channel for ${seatId}.`);
    }
}

// ***************************************Join Lobby Stuff*********************************************//


// Back to Main Menu
joinBackButton.addEventListener('click', () => {
    joinGameMenu.style.display = 'none';
    gameModeMenu.style.display = 'block';
});

// Back to Join Game Menu
clientBackButton.addEventListener('click', () => {
    clientBody.style.display = 'none';
    joinGameMenu.style.display = 'block';
});


// Copy SDP Response to Clipboard
copyResponseButton.addEventListener('click', () => {
    navigator.clipboard.writeText(sdpResponseText.value)
        .then(() => alert('SDP response copied to clipboard!'))
        .catch((err) => console.error('Failed to copy SDP response:', err));
});

// Close the Overlay
closeResponseButton.addEventListener('click', () => {
    sdpResponseOverlay.style.display = 'none';
});

async function setRemoteDescriptionAndICE(id, clientResponseKey) {
    const pc = peerConnections[id].pc;

    try {
        console.log(`Processing response for seat: ${clientResponseKey.seatId}`);
        await pc.setRemoteDescription(new RTCSessionDescription(clientResponseKey.sdp));
        for (const candidate of clientResponseKey.iceCandidates) {
            await pc.addIceCandidate(new RTCIceCandidate(candidate));
        }

        // Send seat number to the client
        const dataChannel = peerConnections[id].dataChannel;
        if (dataChannel && dataChannel.readyState === "open") {
            const message = JSON.stringify({ type: "seatNumber", seatId: id });
            dataChannel.send(message);
            console.log(`Sent seat number to client: ${id}`);
        }

        console.log(`Client response for ${clientResponseKey.seatId} processed successfully.`);
    } catch (error) {
        console.error(`Error processing client response for ${clientResponseKey.seatId}:`, error);
    }
}

document.getElementById('Set_Host_Key').addEventListener('click', async () => {
    const playerName = document.getElementById('Player_Name').value.trim();
    const hostKey = document.getElementById('Host_Key').value.trim();

    if (!playerName) {
        alert('Please enter your name.');
        return;
    }

    if (!hostKey) {
        alert('Please paste the Host Key.');
        return;
    }

    try {
        // Parse the Host Key
        const hostData = JSON.parse(hostKey);
        const { seatId, sdp, iceCandidates } = hostData;

        // Create a new PeerConnection
        const pc = new RTCPeerConnection();
        peerConnections[seatId] = { pc };

        // Set up the data channel handler
        pc.ondatachannel = (event) => {
            const dataChannel = event.channel;
        
            dataChannel.onmessage = (event) => {
                try {
                    const message = JSON.parse(event.data);
                    console.log('Client received message:', message);
        
                    if (message.type === "Game Action") {
                        readGameAction(message);
                    } else if (message.type === "seatNumber") {
                        const seatId = message.seatId;
                        console.log(`Assigned seat number: ${seatId}`);
        
                        // Update UI to show the client lobby
                        document.getElementById("Join_Game_Menu").style.display = "none";
                        document.getElementById("Client_Lobby_Body").style.display = "block";
                    }
                } catch (error) {
                    console.error("Error processing message from host:", error);
                }
            };
        };
        

        // Set Remote Description from Host SDP
        await pc.setRemoteDescription(new RTCSessionDescription(sdp));

        // Add Host ICE Candidates
        for (const candidate of iceCandidates) {
            await pc.addIceCandidate(new RTCIceCandidate(candidate));
        }

        // Generate SDP Answer
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        // Collect Local ICE Candidates
        const localCandidates = [];
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                localCandidates.push(event.candidate);
            } else {
                // ICE Gathering Complete
                generateResponseKey(playerName, seatId, pc.localDescription, localCandidates);
            }
        };
    } catch (error) {
        console.error('Error processing Host Key:', error);
        alert('Invalid Host Key. Please check and try again.');
    }
});


function generateResponseKey(playerName, seatId, sdp, iceCandidates) {
    const responseKeyTextarea = document.getElementById('Response_Key');
    const responseKey = {
        playerName,
        seatId,
        sdp,
        iceCandidates
    };
    responseKeyTextarea.value = JSON.stringify(responseKey, null, 2);
}

document.getElementById('Copy_Response_Key').addEventListener('click', () => {
    const responseKey = document.getElementById('Response_Key');
    responseKey.select();
    document.execCommand('copy');
    alert('Response Key copied to clipboard!');
});

function readGameAction(message) {
    if (!message.actionCount) {
        console.warn("Invalid 'Game Action' message received:", message);
        return;
    }

    // Update UI to show the client lobby
    document.getElementById("Join_Game_Menu").style.display = "none";
    document.getElementById("Client_Lobby_Body").style.display = "block";

    const actionCount = message.actionCount;

    console.log(`Game Action received: Action Count = ${actionCount}`);

    // Update the UI or perform other actions based on the action count
    const actionDisplay = document.getElementById("Game_Action_Display");
    if (actionDisplay) {
        actionDisplay.textContent = `Latest Game Action Count: ${actionCount}`;
    } else {
        console.warn("Game Action display element not found.");
    }
}



