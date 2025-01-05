import { cards } from './cards.js';

const cardList = [
    { name: "Bagman's Deception", rarity: "U" },
    { name: "Dreams of Flying", rarity: "U" },
    { name: "Fleeing the Grounds", rarity: "R" },
    { name: "Flying Carpet Embargo", rarity: "C" },
    { name: "Connolly and Quigley, Irish Beaters", rarity: "R" },
    { name: "Death Eater", rarity: "R" },
    { name: "Ludo Bagman", rarity: "R" },
    { name: "Krum, Bulgarian Seeker", rarity: "R" },
    { name: "Moran, Irish Seeker", rarity: "R" },
    { name: "Ryan, Irish Keeper", rarity: "R" },
    { name: "Winky", rarity: "R" },
    { name: "Zograf, Bulgarian Keeper", rarity: "R" },
    { name: "Billywig", rarity: "C" },
    { name: "Biting Gnome", rarity: "C" },
    { name: "Bundimun", rarity: "C" },
    { name: "Erumpent", rarity: "U" },
    { name: "Firefly", rarity: "C" },
    { name: "Fwooper", rarity: "C" },
    { name: "Green Comet Leprechauns", rarity: "R" },
    { name: "Leprechaun", rarity: "U" },
    { name: "Mascot Introductions", rarity: "C" },
    { name: "Melee of the Mascots", rarity: "R" },
    { name: "Swelling Slug", rarity: "U" },
    { name: "Veela", rarity: "C" },
    { name: "Veela Dance", rarity: "C" },
    { name: "Weasley Ghoul", rarity: "U" },
    { name: "Anti Muggle Security Clean-up", rarity: "C" },
    { name: "Bagman's Gamble", rarity: "C" },
    { name: "Box of Portkeys", rarity: "U" },
    { name: "Gifts of Gold", rarity: "C" },
    { name: "Lantern Lit Trail", rarity: "R" },
    { name: "Meeting of the Ministers", rarity: "C" },
    { name: "Prior Incantato", rarity: "C" },
    { name: "Splinched", rarity: "U" },
    { name: "The Ministry Appears", rarity: "U" },
    { name: "Veela Fireballs", rarity: "C" },
    { name: "Winners' Celebration", rarity: "R" },
    { name: "Wizard Robes", rarity: "C" },
    { name: "Aurors Arrive", rarity: "C" },
    { name: "Death Eater Mask", rarity: "C" },
    { name: "Ennervate", rarity: "C" },
    { name: "Finding the Stolen Wand", rarity: "R" },
    { name: "Firewhisky", rarity: "C" },
    { name: "Interrogation", rarity: "C" },
    { name: "Morsmordre", rarity: "C" },
    { name: "Muggle Marionettes", rarity: "U" },
    { name: "NAME?", rarity: "C" },
    { name: "Silhouettes in the Smoke", rarity: "U" },
    { name: "Tents Ablaze", rarity: "U" },
    { name: "The Dark Mark", rarity: "R" },
    { name: "The Delight of the Death Eaters", rarity: "C" },
    { name: "Wide Awake with Worry", rarity: "U" },
    { name: "Bludger to the Face", rarity: "C" },
    { name: "Bulgaria Scores", rarity: "R" },
    { name: "Child's Broom", rarity: "C" },
    { name: "Deliberate Collision!", rarity: "C" },
    { name: "Distracted Referee", rarity: "C" },
    { name: "Diversion!", rarity: "C" },
    { name: "Final Score", rarity: "C" },
    { name: "Flying with the Cannons", rarity: "C" },
    { name: "Ireland Scores!", rarity: "C" },
    { name: "Krum Catches the Snitch", rarity: "U" },
    { name: "Krum's Firebolt", rarity: "R" },
    { name: "Mascots Fight!", rarity: "C" },
    { name: "Porskoff Ploy", rarity: "U" },
    { name: "Quidditch Scoreboard", rarity: "C" },
    { name: "Quidditch Stretcher", rarity: "U" },
    { name: "Sharp Eyed Seekers", rarity: "C" },
    { name: "Slow Motion Viewing", rarity: "C" },
    { name: "Synchronized Chasers", rarity: "C" },
    { name: "Tough Beaters", rarity: "U" },
    { name: "World Cup Match", rarity: "R" },
    { name: "World Cup Program", rarity: "C" },
    { name: "World Cup Stadium", rarity: "U" },
    { name: "Wronski Feint", rarity: "U" },
    { name: "Blackboard Advertisements", rarity: "U" },
    { name: "Breezey Nethers", rarity: "U" },
    { name: "Borrowed Tent", rarity: "C" },
    { name: "Merchandise Cart", rarity: "U" },
    { name: "Muggle Artifact", rarity: "C" },
    { name: "Omnioculars", rarity: "R" },
    { name: "Portkey", rarity: "U" },
    { name: "Quietus", rarity: "C" },
    { name: "Sonorus", rarity: "C" },
    { name: "Top Box", rarity: "R" },
    { name: "Touring the Tents", rarity: "C" },
    { name: "Trick Wand", rarity: "C" },
    { name: "Barty Crouch", rarity: "R" },
    { name: "Deletrius", rarity: "C" },
    { name: "Leprechaun Gold", rarity: "Ui" },
];


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

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Host Lobby Stuff******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

async function setupSeats() {
    const seatsContainer = document.getElementById('Seats');
    seatsContainer.innerHTML = ''; // Clear any existing seats

    for (let i = 0; i < 8; i++) {
        const seatId = `seat-${i + 1}`;
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('Seat');
        seatDiv.setAttribute('data-seat-id', seatId);

        seatDiv.innerHTML = `
            <div id="${seatId}-emptyState" class="empty-state">
                <h2>${seatId} - Empty Chair</h2>
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
                
            </div>
            <div id="${seatId}-connectedState" class="connected-state" style="display: none;">
                <h2>${seatId} - Occupied</h2>
                <p>Player Name: <span id="${seatId}-playerName"></span></p>
                <button id="${seatId}-kickButton">Kick Player</button>
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
        document.getElementById(`${seatId}-setClientResponseKeyButton`).addEventListener('click', async () => {
            const clientResponseKeyTextarea = document.getElementById(`${seatId}-clientResponseKey`);
            try {
                const clientResponseKey = JSON.parse(clientResponseKeyTextarea.value);

                // Validate seat ID and player name
                if (clientResponseKey.seatId !== seatId) {
                    alert('Seat ID mismatch. Please verify the client response key.');
                    return;
                }
                if (!clientResponseKey.playerName || clientResponseKey.playerName.trim() === '') {
                    alert('Player name is missing in the client response key.');
                    return;
                }

                await setRemoteDescriptionAndICE(seatId, clientResponseKey);

                // Switch to connected state
                document.getElementById(`${seatId}-emptyState`).style.display = 'none';
                const connectedStateDiv = document.getElementById(`${seatId}-connectedState`);
                connectedStateDiv.style.display = 'block';

                // Update player name in the connected state
                const playerNameElement = document.getElementById(`${seatId}-playerName`);
                playerNameElement.textContent = clientResponseKey.playerName || "Unnamed Player";

                // Wait for data channel to open
                const dataChannel = peerConnections[seatId].dataChannel;
                try {
                    await waitForDataChannelOpen(dataChannel);

                    // Send message to client to take their seat
                    const message = JSON.stringify({
                        type: "seatNumber",
                        seatId: seatId,
                    });
                    dataChannel.send(message);
                    console.log(`Sent seat number message to client: ${seatId}`);
                } catch (error) {
                    console.error(`Failed to wait for data channel to open for ${seatId}:`, error);
                    alert('Data channel failed to open. Please check the connection.');
                }
            } catch (error) {
                console.error('Invalid Client Response Key:', error);
                alert('Invalid Client Response Key format. Please check and try again.');
            }
        });

       
        // Handle Kick Player Button
        document.getElementById(`${seatId}-kickButton`).addEventListener('click', async() => {
            // Confirm kick action
            const confirmKick = confirm(`Are you sure you want to kick the player from ${seatId}?`);
            if (!confirmKick) return;

            // Send message to client to return to join screen
            const dataChannel = peerConnections[seatId]?.dataChannel;
            if (dataChannel && dataChannel.readyState === "open") {
                try {
                    const message = JSON.stringify({
                        type: "kick",
                        message: "You have been removed from the game. Returning to the join screen.",
                    });
                    dataChannel.send(message);
                    console.log(`Sent kick message to client at ${seatId}`);
                } catch (error) {
                    console.error(`Failed to send kick message to client at ${seatId}:`, error);
                }
            } else {
                console.warn(`Data channel for ${seatId} is not open or unavailable.`);
            }

            // Reset UI to empty state
            document.getElementById(`${seatId}-connectedState`).style.display = 'none';
            document.getElementById(`${seatId}-emptyState`).style.display = 'block';

            // Clear player name
            const playerNameElement = document.getElementById(`${seatId}-playerName`);
            playerNameElement.textContent = '';

            // Clear Host "Receive Key" textarea
            const clientResponseKeyTextarea = document.getElementById(`${seatId}-clientResponseKey`);
            if (clientResponseKeyTextarea) clientResponseKeyTextarea.value = '';

            // Close the peer connection
            if (peerConnections[seatId]) {
                peerConnections[seatId].pc.close();
                delete peerConnections[seatId];
            }

            // Regenerate SDP and ICE candidates for the seat
            await createPeerConnection(seatId);
            console.log(`New SDP and ICE candidates generated for ${seatId}`);

            console.log(`Player kicked from ${seatId}`);
            alert(`Player has been kicked from ${seatId}`);
        });
    }
}

async function createPeerConnection(id) {
    const pc = new RTCPeerConnection();
    const dataChannel = pc.createDataChannel("chat");

    peerConnections[id] = { pc, dataChannel };

    // Handle data channel events
    dataChannel.onopen = () => console.log(`Data channel open for ${id}`);
    dataChannel.onmessage = (event) => handleHostMessage(event, id);


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

// Add an event listener for the Back button
backButton.addEventListener('click', () => {
    // Stop hosting (cleanup)
    if (rtcPeerConnection) {
        rtcPeerConnection.close(); // Close the WebRTC connection
        rtcPeerConnection = null; // Clear the reference
        console.log('Hosting stopped and connection closed.');
    }

    // Hide the Host Lobby and show the Game Mode Menu
    hostLobbyBody.style.display = 'none'; // Hide the host lobby
    gameModeMenu.style.display = 'block'; // Show the main menu
});

function handleHostMessage(event, id) {
    console.log(`Message from ${id}: ${event.data}`);
    try {
        const message = JSON.parse(event.data);

        switch (message.type) {
            case "Game Action":
                console.log(`Game Action received from ${id}:`, message.action);
                // Handle the game action for the host
                break;

            case "playerDisconnected":
                console.log(`Player disconnected from ${id}. Reason: ${message.reason}`);
                resetSeat(id);
                break;

            default:
                console.warn(`Unknown message type from ${id}:`, message.type);
        }
    } catch (error) {
        console.error(`Error processing message from ${id}:`, error);
    }
}

document.getElementById('Back_Button').addEventListener('click', async () => {
    // Collect all active peer connections
    const occupiedSeats = Object.keys(peerConnections).filter((seatId) => {
        const connection = peerConnections[seatId]?.pc;
        return connection && (connection.connectionState === "connected" || connection.connectionState === "connecting");
    });

    if (occupiedSeats.length > 0) {
        // Show confirmation warning to the host
        const confirmDisconnect = confirm(
            `There are ${occupiedSeats.length} connected players. Disconnecting will remove all players. Are you sure you want to proceed?`
        );

        if (!confirmDisconnect) return;

        // Disconnect all players
        for (const seatId of occupiedSeats) {
            try {
                const dataChannel = peerConnections[seatId]?.dataChannel;
                if (dataChannel && dataChannel.readyState === "open") {
                    const message = JSON.stringify({
                        type: "kick",
                        message: "The host has ended the session."
                    });
                    dataChannel.send(message);
                    console.log(`Sent kick message to client in seat: ${seatId}`);
                }

                // Close and remove the peer connection
                if (peerConnections[seatId]) {
                    peerConnections[seatId].pc.close();
                    delete peerConnections[seatId];
                }

                // Reset the seat UI
                document.getElementById(`${seatId}-connectedState`).style.display = 'none';
                document.getElementById(`${seatId}-emptyState`).style.display = 'block';

                // Clear player name
                const playerNameElement = document.getElementById(`${seatId}-playerName`);
                playerNameElement.textContent = '';
            } catch (error) {
                console.error(`Error disconnecting client in seat ${seatId}:`, error);
            }
        }
        console.log('All players disconnected.');
    } else {
        console.log('No active connections to disconnect.');
    }

    // Navigate back to the main menu
    document.getElementById('Host_Lobby_Body').style.display = 'none';
    document.getElementById('Game_Mode_Menu').style.display = 'block';
});

function resetSeat(seatId) {
    // Reset the seat UI to empty state
    document.getElementById(`${seatId}-connectedState`).style.display = 'none';
    document.getElementById(`${seatId}-emptyState`).style.display = 'block';

    // Clear player name
    const playerNameElement = document.getElementById(`${seatId}-playerName`);
    playerNameElement.textContent = '';

    // Close the peer connection
    if (peerConnections[seatId]) {
        peerConnections[seatId].pc.close();
        delete peerConnections[seatId];
    }

    // Clear the Receive Key textarea
    const clientResponseKeyTextarea = document.getElementById(`${seatId}-clientResponseKey`);
    clientResponseKeyTextarea.value = '';

    console.log(`Seat ${seatId} has been reset.`);
}


// ****************************************** Start Game Button***************************************************/
document.getElementById('Start_Game_Button').addEventListener('click', () => {
    const gameScreen = document.getElementById('Game_Screen');
    const gameSeats = document.getElementById('Game_Seats');

    // Clear previous content in Game Seats
    gameSeats.innerHTML = '';

    // Filter for occupied seats
    const occupiedSeats = Object.keys(peerConnections).filter((seatId) => {
        const connection = peerConnections[seatId]?.pc;
        return connection && (connection.connectionState === "connected" || connection.connectionState === "connecting");
    });

    if (occupiedSeats.length === 0) {
        alert("No players are connected. Cannot start the game.");
        return;
    }

    // Iterate through occupied seats
    occupiedSeats.forEach((seatId, index) => {
        const peerConnection = peerConnections[seatId];
        const dataChannel = peerConnection?.dataChannel;

        if (dataChannel && dataChannel.readyState === "open") {
            // Send "Game Start" message
            const message = JSON.stringify({
                type: "Game Start",
                message: "Host has started the game."
            });
            dataChannel.send(message);
            console.log(`Sent "Game Start" message to player at ${seatId}`);

            // Create seats in the game screen
            const playerSeatId = `player-${index + 1}`;
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('Game_Seat');
            seatDiv.id = playerSeatId;

            // Add seat content
            seatDiv.innerHTML = `
                <h3>Seat ${index + 1}</h3>
                <div>
                    <button id="${playerSeatId}-pack1Button">Pack 1</button>
                    <button id="${playerSeatId}-pack2Button">Pack 2</button>
                    <button id="${playerSeatId}-pack3Button">Pack 3</button>
                    <button id="${playerSeatId}-draftingPackButton">Drafting Pack</button>
                    <button id="${playerSeatId}-cardPoolButton">Card Pool</button>
                </div>
                <ul id="${playerSeatId}-activeList" class="Pack_List"></ul>
            `;

            gameSeats.appendChild(seatDiv);

            // Add event listeners for list buttons
            addListToggleEvents(playerSeatId);
        } else {
            console.warn(`Data channel for seat ${seatId} is not open or unavailable. Skipping seat creation.`);
        }
    });

    // Hide the lobby and show the game screen
    document.getElementById('Host_Lobby_Body').style.display = 'none';
    gameScreen.style.display = 'block';
});

// Add list toggle functionality
function addListToggleEvents(playerSeatId) {
    const pack1Button = document.getElementById(`${playerSeatId}-pack1Button`);
    const pack2Button = document.getElementById(`${playerSeatId}-pack2Button`);
    const pack3Button = document.getElementById(`${playerSeatId}-pack3Button`);
    const draftingPackButton = document.getElementById(`${playerSeatId}-draftingPackButton`);
    const cardPoolButton = document.getElementById(`${playerSeatId}-cardPoolButton`);
    const activeList = document.getElementById(`${playerSeatId}-activeList`);

    const lists = {
        pack1: [],
        pack2: [],
        pack3: [],
        draftingPack: [],
        cardPool: []
    };

    function updateList(listName) {
        activeList.innerHTML = '';
        lists[listName].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            activeList.appendChild(listItem);
        });
    }

    pack1Button.addEventListener('click', () => updateList('pack1'));
    pack2Button.addEventListener('click', () => updateList('pack2'));
    pack3Button.addEventListener('click', () => updateList('pack3'));
    draftingPackButton.addEventListener('click', () => updateList('draftingPack'));
    cardPoolButton.addEventListener('click', () => updateList('cardPool'));
}

// Back to Lobby Button
document.getElementById('Back_To_Lobby_Button').addEventListener('click', () => {
    document.getElementById('Game_Screen').style.display = 'none';
    document.getElementById('Host_Lobby_Body').style.display = 'block';
});



// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Join Lobby Stuff******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

// Back to Main Menu
joinBackButton.addEventListener('click', () => {
    joinGameMenu.style.display = 'none';
    gameModeMenu.style.display = 'block';
});

clientBackButton.addEventListener('click', async () => {
    // Confirm action from the client
    const confirmLeave = confirm("Are you sure you want to leave the game?");
    if (!confirmLeave) return;

    // Get the client's seatId
    const seatId = Object.keys(peerConnections).find((key) => peerConnections[key]?.pc);

    if (!seatId) {
        console.error("No active seat found for the client.");
        return;
    }

    // Notify the host that the player is disconnecting
    const peerConnection = peerConnections[seatId];
    const dataChannel = peerConnection?.dataChannel;

    if (dataChannel) {
        if (dataChannel.readyState === "open") {
            try {
                const message = JSON.stringify({
                    type: "playerDisconnected",
                    seatId: seatId,
                    message: "The player has voluntarily left the game."
                });
                dataChannel.send(message);
                console.log(`Sent player disconnected message for seat: ${seatId}`);
            } catch (error) {
                console.error("Error sending disconnect message to host:", error);
            }
        } else {
            console.debug(`Data channel for seat ${seatId} is not open.`);
        }
    } else {
        console.error(`No data channel found for seat ${seatId}.`);
    }

    // Close the connection
    if (peerConnection) {
        peerConnection.pc.close();
        delete peerConnections[seatId];
    }

    // Reset the client's UI
    document.getElementById("Client_Lobby_Body").style.display = "none";
    document.getElementById("Join_Game_Menu").style.display = "block";

    console.log("Client has left the game and returned to the join screen.");
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
            peerConnections[seatId] = { pc, dataChannel };
            dataChannel.onmessage = handleClientMessage;
        
            dataChannel.onopen = () => {
                console.log("Data channel open on client:", seatId);
            };
            dataChannel.onclose = () => {
                console.log("Data channel closed on client:", seatId);
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

function handleClientMessage(event) {
    try {
        const message = JSON.parse(event.data);
        console.log('Client received message:', message);

        switch (message.type) {
            case "Game Action":
                readGameAction(message);
                break;

            case "seatNumber":
                const seatId = message.seatId;
                console.log(`Assigned seat number: ${seatId}`);

                // Update UI to show the client lobby
                document.getElementById("Join_Game_Menu").style.display = "none";
                document.getElementById("Client_Lobby_Body").style.display = "block";
                break;

            case "kick":
                console.warn(message.message);

                // Reset UI to join screen
                document.getElementById("Client_Lobby_Body").style.display = "none";
                document.getElementById("Join_Game_Menu").style.display = "block";

                // Clear Client "Response Key" and "Host Key" textareas
                const responseKeyTextarea = document.getElementById('Response_Key'); 
                if (responseKeyTextarea) responseKeyTextarea.value = '';

                const hostKeyTextarea = document.getElementById('Host_Key'); 
                if (hostKeyTextarea) hostKeyTextarea.value = '';

                // Disconnect from the host
                if (peerConnection) {
                    peerConnection.close();
                }
                break;

            case "Game Start":
                console.log(message.message);

                // Switch to the Game Screen
                document.getElementById("Client_Lobby_Body").style.display = "none";
                document.getElementById("Client_Game_Screen").style.display = "block";
                break;

            default:
                console.warn("Unknown message type:", message.type);
        }
    } catch (error) {
        console.error("Error processing message from host:", error);
    }
}


async function waitForDataChannelOpen(dataChannel) {
    if (dataChannel.readyState === "open") {
        return;
    }

    return new Promise((resolve, reject) => {
        const onOpen = () => {
            dataChannel.removeEventListener("open", onOpen);
            resolve();
        };
        const onError = (error) => {
            dataChannel.removeEventListener("error", onError);
            reject(new Error("Data channel failed to open."));
        };

        dataChannel.addEventListener("open", onOpen);
        dataChannel.addEventListener("error", onError);
    });
}
