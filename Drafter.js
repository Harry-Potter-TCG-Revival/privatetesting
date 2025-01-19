import { cards } from './cards.js';

const cardList = [
    { name: "Bagman's Deception", rarity: "U", isHorizontal: true, imageFile: "BagmansDeception.png", cost: 0, type: "Adventure" },
    { name: "Dreams of Flying", rarity: "U", isHorizontal: true, imageFile: "DreamsOfFlying.png", cost: 0, type: "Adventure" },
    { name: "Fleeing the Grounds", rarity: "R", isHorizontal: true, imageFile: "FleeingTheGrounds.png", cost: 0, type: "Adventure" },
    { name: "Flying Carpet Embargo", rarity: "C", isHorizontal: true, imageFile: "FlyingCarpetEmbargo.png", cost: 0, type: "Adventure" },
    { name: "Connolly and Quigley, Irish Beaters", rarity: "R", isHorizontal: true, imageFile: "ConnollyAndQuigleyIrishBeaters.png", cost: 0, type: "Character" },
    { name: "Death Eater", rarity: "R", isHorizontal: true, imageFile: "DeathEater.png", cost: 0, type: "Character" },
    { name: "Ludo Bagman", rarity: "R", isHorizontal: true, imageFile: "LudoBagman.png", cost: 0, type: "Character" },
    { name: "Krum, Bulgarian Seeker", rarity: "R", isHorizontal: true, imageFile: "KrumBulgarianSeeker.png", cost: 0, type: "Character" },
    { name: "Moran, Irish Seeker", rarity: "R", isHorizontal: true, imageFile: "MoranIrishSeeker.png", cost: 0, type: "Character" },
    { name: "Ryan, Irish Keeper", rarity: "R", isHorizontal: true, imageFile: "RyanIrishKeeper.png", cost: 0, type: "Character" },
    { name: "Winky", rarity: "R", isHorizontal: true, imageFile: "Winky.png", cost: 0, type: "Character" },
    { name: "Zograf, Bulgarian Keeper", rarity: "R", isHorizontal: true, imageFile: "ZografBulgarianKeeper.png", cost: 0, type: "Character" },
    { name: "Billywig", rarity: "C", isHorizontal: true, imageFile: "Billywig.png", cost: 4, type: "F" },
    { name: "Biting Gnome", rarity: "C", isHorizontal: true, imageFile: "BitingGnome.png", cost: 4, type: "F" },
    { name: "Bundimun", rarity: "C", isHorizontal: true, imageFile: "Bundimun.png", cost: 6, type: "F" },
    { name: "Erumpent", rarity: "U", isHorizontal: true, imageFile: "Erumpent.png", cost: 8, type: "F" },
    { name: "Firefly", rarity: "C", isHorizontal: true, imageFile: "Firefly.png", cost: 3, type: "F" },
    { name: "Fwooper", rarity: "C", isHorizontal: true, imageFile: "Fwooper.png", cost: 5, type: "F" },
    { name: "Green Comet Leprechauns", rarity: "R", isHorizontal: true, imageFile: "GreenCometLeprechauns.png", cost: 11, type: "F" },
    { name: "Leprechaun", rarity: "U", isHorizontal: true, imageFile: "Leprechaun.png", cost: 4, type: "F" },
    { name: "Mascot Introductions", rarity: "C", isHorizontal: false, imageFile: "MascotIntroductions.png", cost: 5, type: "F" },
    { name: "Melee of the Mascots", rarity: "R", isHorizontal: true, imageFile: "MeleeOfTheMascots.png", cost: 8, type: "F" },
    { name: "Swelling Slug", rarity: "U", isHorizontal: true, imageFile: "SwellingSlug.png", cost: 5, type: "F" },
    { name: "Veela", rarity: "C", isHorizontal: true, imageFile: "Veela.png", cost: 7, type: "F" },
    { name: "Veela Dance", rarity: "C", isHorizontal: false, imageFile: "VeelaDance.png", cost: 5, type: "F" },
    { name: "Weasley Ghoul", rarity: "U", isHorizontal: true, imageFile: "WeasleyGhoul.png", cost: 6, type: "F" },
    { name: "Anti Muggle Security Clean-up", rarity: "C", isHorizontal: false, imageFile: "AntiMuggleSecurityCleanup.png", cost: 6, type: "C" },
    { name: "Bagman's Gamble", rarity: "C", isHorizontal: false, imageFile: "BagmansGamble.png", cost: 9, type: "C" },
    { name: "Box of Portkeys", rarity: "U", isHorizontal: true, imageFile: "BoxOfPortkeys.png", cost: 5, type: "C" },
    { name: "Gifts of Gold", rarity: "C", isHorizontal: false, imageFile: "GiftsOfGold.png", cost: 4, type: "C" },
    { name: "Lantern Lit Trail", rarity: "R", isHorizontal: true, imageFile: "LanternLitTrail.png", cost: 5, type: "C" },
    { name: "Meeting of the Ministers", rarity: "C", isHorizontal: true, imageFile: "MeetingOfTheMinisters.png", cost: 6, type: "C" },
    { name: "Prior Incantato", rarity: "C", isHorizontal: false, imageFile: "PriorIncantato.png", cost: 5, type: "C" },
    { name: "Splinched", rarity: "U", isHorizontal: true, imageFile: "Splinched.png", cost: 5, type: "C" },
    { name: "The Ministry Appears", rarity: "U", isHorizontal: true, imageFile: "TheMinistryAppears.png", cost: 8, type: "C" },
    { name: "Veela Fireballs", rarity: "C", isHorizontal: false, imageFile: "VeelaFireballs.png", cost: 4, type: "C" },
    { name: "Winners' Celebration", rarity: "R", isHorizontal: true, imageFile: "WinnersCelebration.png", cost: 6, type: "C" },
    { name: "Wizard Robes", rarity: "C", isHorizontal: true, imageFile: "WizardRobes.png", cost: 7, type: "C" },
    { name: "Aurors Arrive", rarity: "C", isHorizontal: false, imageFile: "AurorsArrive.png", cost: 6, type: "P" },
    { name: "Death Eater Mask", rarity: "C", isHorizontal: true, imageFile: "DeathEaterMask.png", cost: 3, type: "P" },
    { name: "Ennervate", rarity: "C", isHorizontal: false, imageFile: "Ennervate.png", cost: 6, type: "P" },
    { name: "Finding the Stolen Wand", rarity: "R", isHorizontal: false, imageFile: "FindingTheStolenWand.png", cost: 5, type: "P" },
    { name: "Firewhisky", rarity: "C", isHorizontal: true, imageFile: "Firewhisky.png", cost: 5, type: "P" },
    { name: "Interrogation", rarity: "C", isHorizontal: false, imageFile: "Interrogation.png", cost: 3, type: "P" },
    { name: "Morsmordre", rarity: "C", isHorizontal: false, imageFile: "Morsmordre.png", cost: 9, type: "P" },
    { name: "Muggle Marionettes", rarity: "U", isHorizontal: true, imageFile: "MuggleMarionettes.png", cost: 8, type: "P" },
    { name: "NAME?", rarity: "C", isHorizontal: false, imageFile: "Name.png", cost: 4, type: "P" },
    { name: "Silhouettes in the Smoke", rarity: "U", isHorizontal: true, imageFile: "SilhouettesInTheSmoke.png", cost: 5, type: "P" },
    { name: "Tents Ablaze", rarity: "U", isHorizontal: true, imageFile: "TentsAblaze.png", cost: 5, type: "P" },
    { name: "The Dark Mark", rarity: "R", isHorizontal: true, imageFile: "TheDarkMark.png", cost: 5, type: "P" },
    { name: "The Delight of the Death Eaters", rarity: "C", isHorizontal: false, imageFile: "TheDelightOfTheDeathEaters.png", cost: 5, type: "P" },
    { name: "Wide Awake with Worry", rarity: "U", isHorizontal: true, imageFile: "WideAwakeWithWorry.png", cost: 3, type: "P" },
    { name: "Bludger to the Face", rarity: "C", isHorizontal: false, imageFile: "BludgerToTheFace.png", cost: 4, type: "Q" },
    { name: "Bulgaria Scores", rarity: "R", isHorizontal: false, imageFile: "BulgariaScores.png", cost: 12, type: "Q" },
    { name: "Child's Broom", rarity: "C", isHorizontal: true, imageFile: "ChildsBroom.png", cost: 1, type: "Q" },
    { name: "Deliberate Collision!", rarity: "C", isHorizontal: false, imageFile: "DeliberateCollision.png", cost: 4, type: "Q" },
    { name: "Distracted Referee", rarity: "C", isHorizontal: false, imageFile: "DistractedReferee.png", cost: 6, type: "Q" },
    { name: "Diversion!", rarity: "C", isHorizontal: false, imageFile: "Diversion.png", cost: 6, type: "Q" },
    { name: "Final Score", rarity: "C", isHorizontal: false, imageFile: "FinalScore.png", cost: 9, type: "Q" },
    { name: "Flying with the Cannons", rarity: "C", isHorizontal: true, imageFile: "FlyingWithTheCannons.png", cost: 2, type: "Q" },
    { name: "Ireland Scores!", rarity: "C", isHorizontal: false, imageFile: "IrelandScores.png", cost: 8, type: "Q" },
    { name: "Krum Catches the Snitch", rarity: "U", isHorizontal: true, imageFile: "KrumCatchesTheSnitch.png", cost: 3, type: "Q" },
    { name: "Krum's Firebolt", rarity: "R", isHorizontal: true, imageFile: "KrumsFirebolt.png", cost: 9, type: "Q" },
    { name: "Mascots Fight!", rarity: "C", isHorizontal: true, imageFile: "MascotsFight.png", cost: 6, type: "Q" },
    { name: "Porskoff Ploy", rarity: "U", isHorizontal: false, imageFile: "PorskoffPloy.png", cost: 12, type: "Q" },
    { name: "Quidditch Scoreboard", rarity: "C", isHorizontal: true, imageFile: "QuidditchScoreboard.png", cost: 2, type: "Q" },
    { name: "Quidditch Stretcher", rarity: "U", isHorizontal: true, imageFile: "QuidditchStretcher.png", cost: 4, type: "Q" },
    { name: "Sharp Eyed Seekers", rarity: "C", isHorizontal: false, imageFile: "SharpEyedSeekers.png", cost: 8, type: "Q" },
    { name: "Slow Motion Viewing", rarity: "C", isHorizontal: false, imageFile: "SlowMotionViewing.png", cost: 6, type: "Q" },
    { name: "Synchronized Chasers", rarity: "C", isHorizontal: false, imageFile: "SynchronizedChasers.png", cost: 5, type: "Q" },
    { name: "Tough Beaters", rarity: "U", isHorizontal: false, imageFile: "ToughBeaters.png", cost: 10, type: "Q" },
    { name: "World Cup Match", rarity: "R", isHorizontal: true, imageFile: "WorldCupMatch.png", cost: 1, type: "Q" },
    { name: "World Cup Program", rarity: "C", isHorizontal: true, imageFile: "WorldCupProgram.png", cost: 2, type: "Q" },
    { name: "World Cup Stadium", rarity: "U", isHorizontal: true, imageFile: "WorldCupStadium.png", cost: 4, type: "Q" },
    { name: "Wronski Feint", rarity: "U", isHorizontal: false, imageFile: "WronskiFeint.png", cost: 6, type: "Q" },
    { name: "Blackboard Advertisements", rarity: "U", isHorizontal: true, imageFile: "BlackboardAdvertisements.png", cost: 8, type: "T" },
    { name: "Breezey Nethers", rarity: "U", isHorizontal: true, imageFile: "BreezeyNethers.png", cost: 8, type: "T" },
    { name: "Borrowed Tent", rarity: "C", isHorizontal: true, imageFile: "BorrowedTent.png", cost: 2, type: "T" },
    { name: "Merchandise Cart", rarity: "U", isHorizontal: true, imageFile: "MerchandiseCart.png", cost: 8, type: "T" },
    { name: "Muggle Artifact", rarity: "C", isHorizontal: true, imageFile: "MuggleArtifact.png", cost: 7, type: "T" },
    { name: "Omnioculars", rarity: "R", isHorizontal: true, imageFile: "Omnioculars.png", cost: 4, type: "T" },
    { name: "Portkey", rarity: "U", isHorizontal: false, imageFile: "Portkey.png", cost: 8, type: "T" },
    { name: "Quietus", rarity: "C", isHorizontal: true, imageFile: "Quietus.png", cost: 3, type: "T" },
    { name: "Sonorus", rarity: "C", isHorizontal: true, imageFile: "Sonorus.png", cost: 3, type: "T" },
    { name: "Top Box", rarity: "R", isHorizontal: true, imageFile: "TopBox.png", cost: 6, type: "T" },
    { name: "Touring the Tents", rarity: "C", isHorizontal: true, imageFile: "TouringTheTents.png", cost: 3, type: "T" },
    { name: "Trick Wand", rarity: "C", isHorizontal: true, imageFile: "TrickWand.png", cost: 13, type: "T" },
    { name: "Barty Crouch", rarity: "R", isHorizontal: true, imageFile: "BartyCrouch.png", cost: 0, type: "Character" },
    { name: "Deletrius", rarity: "C", isHorizontal: false, imageFile: "Deletrius.png", cost: 4, type: "C" },
    { name: "Leprechaun Gold", rarity: "U", isHorizontal: true, imageFile: "LeprechaunGold.png", cost: 2, type: "C" }
];

// ***********************************************Global Declarations******************************************************/
// *********************************************** Main Menu ************************************************************//
const hostButton = document.getElementById('Host_Button');
const joinButton = document.getElementById('Join_Button');
const soloButton = document.getElementById('Solo_Button');

const gameModeMenu = document.getElementById('Game_Mode_Menu');

// *********************************************** Drafting Variables **************************************************//
let roundNumber = 0; // Tracks the current round number
let Current_Selected_Card = null; // Tracks the currently selected card
let draftEnded = false; // Tracks if the draft has ended
let allPicksMade = null; // Tracks if all players have made their picks
let selectedSet = null; // Tracks the selected set

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// *********************************************** Drafting DOM Elements ***********************************************//
const setDropdown = document.getElementById('Set_Selection');
const setSelectorDiv = document.getElementById('Set_Selector');
const startDraftButton = document.getElementById('Start_Draft_Button');
const packCardsDiv = document.getElementById('Pack_Cards');
const poolCardsDiv = document.getElementById('Pool_Cards');
const currentPackDiv = document.getElementById('Current_Pack');

// *********************************************** Multiplayer Variables ***********************************************//
const peerConnections = {}; // Stores peer connections by client ID
const picksMade = {}; // Tracks which players have made their picks
const playerLists = {}; // Holds player-related lists (packs, pools)
const currentPackIndex = Array.from({ length: 8 }, () => 0); // Tracks the current pack index for each player

// *********************************************** Host Variables ******************************************************//
const hostLobbyBody = document.getElementById('Host_Lobby_Body');
hostLobbyBody.style.display = 'none'; // Initially hide the host lobby

const startGameButton = document.getElementById('Start_Game_Button');
const backButton = document.getElementById('Back_Button');
const confirmPickButton = document.getElementById("Confirm_Pick_Button");


// *********************************************** Client Variables ****************************************************//
const joinGameMenu = document.getElementById('Join_Game_Menu');
const joinBackButton = document.getElementById('Join_Back_Button');
const clientBackButton = document.getElementById('Client_Back_Button');
const setHostKey = document.getElementById('Set_Host_Key');
const downloadButton = document.getElementById("Download_Card_Pool_Button");
const currentPackContainer = document.getElementById("Current_Pack_Container");

// *********************************************** Solo Player Variables ***********************************************//
const soloDrafterBody = document.getElementById('Solo_Drafter_Body');
soloDrafterBody.style.display = 'none'; // Initially hide the solo drafter body

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
                    alert(`Seat ID mismatch. The expected seat ID is "${seatId}", but the seat in this key is "${clientResponseKey.seatId}". Please verify the client response key.`);
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

                    // Step 1: Send a message to the player to take their seat
                    const seatMessage = JSON.stringify({
                        type: "seatNumber",
                        seatId: seatId,
                    });
                    dataChannel.send(seatMessage);
                    console.log(`Sent seatNumber message to player at seat: ${seatId}`);

                    // Step 2: Prepare the "Update Lobby Seating" message
                    const connectedPlayers = Object.keys(peerConnections).map((seatId) => {
                        const peerConnection = peerConnections[seatId]?.pc;
                        const playerName = document.getElementById(`${seatId}-playerName`)?.textContent || "Empty Seat";
                        return {
                            seatId: seatId,
                            playerName: playerName,
                        };
                    });

                    const updateSeatingMessage = JSON.stringify({
                        type: "Update Lobby Seating",
                        seating: connectedPlayers, // List of seats and players
                    });

                    // Send the "Update Lobby Seating" message to all players
                    for (const connectedSeatId of Object.keys(peerConnections)) {
                        const connectedDataChannel = peerConnections[connectedSeatId]?.dataChannel;
                        if (connectedDataChannel && connectedDataChannel.readyState === "open") {
                            connectedDataChannel.send(updateSeatingMessage);
                            console.log(`Sent "Update Lobby Seating" message to ${connectedSeatId}`);
                        }
                    }
                } catch (error) {
                    console.error(`Error handling data channel for seat ${seatId}:`, error);
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
    const iceServers = [
        // STUN Server
        { urls: "stun:stun.l.google.com:19302" },
        // TURN Server (Free TURN server from OpenRelay)
        {
            urls: "turn:openrelay.metered.ca:80",
            username: "openrelayproject",
            credential: "openrelayproject",
        },
        {
            urls: "turn:openrelay.metered.ca:443",
            username: "openrelayproject",
            credential: "openrelayproject",
        },
        {
            urls: "turn:openrelay.metered.ca:443?transport=tcp",
            username: "openrelayproject",
            credential: "openrelayproject",
        },
    ];

    // Pass ICE servers to RTCPeerConnection
    const pc = new RTCPeerConnection({ iceServers });

    const dataChannel = pc.createDataChannel("chat");

    peerConnections[id] = { pc, dataChannel };

    // Handle data channel events
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
            const message = JSON.parse(event.data);
            handleHostMessage(message, id);
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

                case "cardPick":
                    console.log(`Card picked by ${message.seat}: ${message.card}`);
                    handleCardPick(message.seat, message.card);
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

// ****************************************************************************************** Start Game Button ****************************************************************************************************************/
document.getElementById('Start_Game_Button').addEventListener('click', async () => {
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

    // Generate packs for all players and set the round number
    generatePacks(occupiedSeats.length);

    // Set round number to 1
    roundNumber = 1;
    
    // Iterate through occupied seats
    for (const seatId of occupiedSeats) {
        const peerConnection = peerConnections[seatId];
        const dataChannel = peerConnection?.dataChannel;
    

        if (!dataChannel) {
            console.error(`No data channel found for seat: ${seatId}`);
            continue;
        }
        
        if (dataChannel.readyState !== "open") {
            console.warn(`Data channel for seat ${seatId} is not ready. Skipping.`);
            continue;
        }
    
        // Send "Game Start" message
        try {
            const message = JSON.stringify({
                type: "Game Start",
                message: "Host has started the game."
            });
            dataChannel.send(message);
            console.log(`Sent "Game Start" message to player at ${seatId}`);
        } catch (error) {
            console.error(`Failed to send "Game Start" message to seat ${seatId}:`, error);
            continue;
        }
    
        // Create seats in the game screen
        const playerSeatId = `player-${occupiedSeats.indexOf(seatId) + 1}`;
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('Game_Seat');
        seatDiv.id = playerSeatId;
    
        seatDiv.innerHTML = `
            <h3>Seat ${occupiedSeats.indexOf(seatId) + 1}</h3>
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
    
        // Open the current pack for this player
        try {
            await openPack(roundNumber, seatId);
        } catch (error) {
            console.error(`Error opening pack for seat ${seatId}:`, error);
        }
    
        console.log(`Third Delay`);
        // Introduce a small delay before proceeding to the next player
        await delay(2000); // 5000ms delay
    }
                                            

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

    // Initialize lists for the player if not already present
    if (!playerLists[playerSeatId]) {
        playerLists[playerSeatId] = {
            pack1: [],
            pack2: [],
            pack3: [],
            draftingPack: [],
            cardPool: []
        };
    }

    // Function to update the displayed list
    function updateList(listName) {
        activeList.innerHTML = '';
        playerLists[playerSeatId][listName].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            activeList.appendChild(listItem);
        });
    }

    // Attach event listeners to buttons
    pack1Button.addEventListener('click', () => updateList('pack1'));
    pack2Button.addEventListener('click', () => updateList('pack2'));
    pack3Button.addEventListener('click', () => updateList('pack3'));
    draftingPackButton.addEventListener('click', () => updateList('draftingPack'));
    cardPoolButton.addEventListener('click', () => updateList('cardPool'));
}

function generatePacks(playerCount) {
    // Separate cards by rarity
    const rareCards = cardList.filter(card => card.rarity === "R");
    const uncommonCards = cardList.filter(card => card.rarity === "U");
    const commonCards = cardList.filter(card => card.rarity === "C");

    // Generate packs and populate playerLists
    for (let player = 1; player <= playerCount; player++) {
        const playerSeatId = `player-${player}`;

        // Ensure playerLists is initialized for this player
        if (!playerLists[playerSeatId]) {
            playerLists[playerSeatId] = {
                pack1: [],
                pack2: [],
                pack3: [],
                draftingPack: [],
                cardPool: []
            };
        }

        // Generate packs for the player
        for (let packNumber = 1; packNumber <= 3; packNumber++) {
            const pack = [];

            // Add 1 random rare card (name only)
            pack.push(getRandomCard(rareCards).name);

            // Add 3 random uncommon cards (name only)
            for (let i = 0; i < 3; i++) {
                pack.push(getRandomCard(uncommonCards).name);
            }

            // Add 7 random common cards (name only)
            for (let i = 0; i < 7; i++) {
                pack.push(getRandomCard(commonCards).name);
            }

            // Assign pack to the respective list in playerLists
            playerLists[playerSeatId][`pack${packNumber}`] = pack;
        }
            // Copy pack1 to draftingPack
            playerLists[playerSeatId].draftingPack = [...playerLists[playerSeatId].pack1];
        }
}

// Helper function to get a random card from a list
function getRandomCard(cardArray) {
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
}

// Back to Lobby Button
document.getElementById('Back_To_Lobby_Button').addEventListener('click', () => {
    document.getElementById('Game_Screen').style.display = 'none';
    document.getElementById('Host_Lobby_Body').style.display = 'block';
});

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Join Lobby Stuff******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//


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

// Back to Main Menu
joinBackButton.addEventListener('click', () => {
    joinGameMenu.style.display = 'none';
    gameModeMenu.style.display = 'block';
});


async function setRemoteDescriptionAndICE(id, clientResponseKey) {
    const pc = peerConnections[id].pc;
    

    try {
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
    } catch (error) {
        console.error(`Error processing client response for ${clientResponseKey.seatId}:`, error);
    }
}

setHostKey.addEventListener('click', async () => {
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

function generateResponseKey(playerName, seatId, sdp, iceCandidates) 
{
    const responseKeyTextarea = document.getElementById('Response_Key');
    const responseKey = 
    {
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


function handleClientMessage(event) {
    try {
        const message = JSON.parse(event.data);
        console.log('Client received message:', message);

        switch (message.type) {
            
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

            case "openPack":
                console.log(`Opening pack for round ${message.round}`);
                console.log(`Opening pack for round ${message}`);

                const handedClientPack = message.pack;
            
                // Debug: Log the handedClientPack
                console.log("Received pack:", handedClientPack);
            
                
                if (!currentPackDiv) {
                    console.error("Current_Pack div not found.");
                    break;
                }
                currentPackDiv.innerHTML = "";
            
                handedClientPack.forEach((cardName, index) => {
                    if (!cardName) {
                        console.error(`Invalid card name at index ${index} in handedClientPack:`, cardName);
                        return;
                    }
            
                    const card = cardList.find((c) => c.name === cardName);
                    if (!card) {
                        console.error(`Card "${cardName}" not found in cardList. Ensure names match exactly.`);
                        return;
                    }
            
                    // Use the createCardElement function
                    const cardElement = createCardElement(card);
                    currentPackDiv.appendChild(cardElement);
                    console.debug(`Card element added for "${card.name}".`);
                });
                break;

                case "enableConfirmPick":
                console.log("Enabling Confirm Pick button...");
                if (confirmPickButton) {
                    confirmPickButton.disabled = false; // Enable the button
                    console.log("Confirm Pick button enabled.");
                } else {
                    console.error("Confirm Pick button not found.");
                }
                break;

                // Host has allowed you to pick the card
                case "pickAcknowledged":
                    console.log(`Pick acknowledged: ${message.card}`);

                    // Look up the card in the cardList to find its cost
                    const card = cardList.find(c => c.name === message.card);
                    if (!card) {
                        console.error(`Card "${message.card}" not found in cardList.`);
                        break;
                    }

                    // Determine the correct Card_Pool_# div based on the card's cost
                    const cost = card.cost || 0; // Default to 0 if the card has no cost
                    const poolIndex = cost >= 8 ? 8 : cost; // If cost is 8 or higher, use pool 8
                    const cardPoolDiv = document.getElementById(`Card_Pool_${poolIndex}`);

                    if (!cardPoolDiv) {
                        console.error(`Card_Pool_${poolIndex} not found.`);
                        break;
                    }

                    // Create the card element
                    const cardElement = createCardPoolElement({
                        name: message.card,
                        imageFile: `Quidditch World Cup/${message.card}.png`, // Adjust based on your file structure
                        isHorizontal: false // Update if you have a specific orientation to consider
                    });

                    // Add the card to the correct Card_Pool_# div
                    cardPoolDiv.appendChild(cardElement);

                    // Reset the current selected card
                    Current_Selected_Card = "";

                    // Remove the card from the displayed pack
                    const cardToRemove = currentPackDiv.querySelector(`[data-name="${message.card}"]`);
                    if (cardToRemove) {
                        currentPackDiv.removeChild(cardToRemove);
                    } else {
                        console.warn(`Card "${message.card}" not found in current pack display.`);
                    }
                    break;


                case "pickRejected":

                // reenable the  button after rejection
                confirmPickButton.disabled = false;
                
                break;

                case "getRotatedPack":
                console.log(`Received rotated pack:`, message.pack);

                // Clear the "Current Pack" div
                if (!currentPackDiv) {
                    console.error("Current_Pack div not found.");
                    break;
                }
                currentPackDiv.innerHTML = "";

                // Update the current pack with the new cards
                message.pack.forEach((cardName) => {
                    const card = cardList.find((c) => c.name === cardName);
                    if (!card) {
                        console.error(`Card "${cardName}" not found in cardList.`);
                        return;
                    }

                    const cardElement = createCardElement(card);
                    currentPackDiv.appendChild(cardElement);
                });
                console.log("Updated the current pack for the client.");

                // reenable the  button after rejection
                confirmPickButton.disabled = false;
                break;

                case "draft complete":
                console.log(message.message);

                // Hide the current pack container
                if (currentPackContainer) {
                    currentPackContainer.style.display = "none";
                } else {
                    console.error("Current_Pack_Container not found.");
                }

                // Show the "Download Card Pool File" button
                if (downloadButton) {
                    downloadButton.style.display = "block";
                } else {
                    console.error("Download_Card_Pool_Button not found.");
                }

                // Set up the download button functionality
                downloadButton.addEventListener("click", () => {
                    const seatId = Object.keys(peerConnections).find((key) => peerConnections[key]?.pc);
                    if (!seatId) {
                        console.error("Client seat ID not found.");
                        return;
                    }

                    const playerKey = seatId.replace('seat-', 'player-');
                    const cardPool = playerLists[playerKey]?.cardPool;

                    if (!cardPool || cardPool.length === 0) {
                        alert("Your card pool is empty or unavailable.");
                        return;
                    }

                    // Generate the text file content
                    let fileContent = "Your Card Pool:\n\n";
                    const cardCounts = cardPool.reduce((counts, card) => {
                        counts[card] = (counts[card] || 0) + 1;
                        return counts;
                    }, {});

                    Object.entries(cardCounts).forEach(([cardName, count]) => {
                        fileContent += `${count}x ${cardName}\n`;
                    });

                    // Create and download the text file
                    const blob = new Blob([fileContent], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "YourCardPool.txt";
                    link.click();
                    URL.revokeObjectURL(url);

                    console.log("Card pool file downloaded.");
                });
                break;

                case "Update Lobby Seating":
                    console.log("Updating lobby seating:", message);
                    updateLobbySeating(message);
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

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Multiplayer Draft Game******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

async function openPack(roundNumber, seatId) {

    const peerConnection = peerConnections[seatId];
    if (!peerConnection) {
        console.warn(`No peer connection found for seat: ${seatId}`);
        return null; // Return null if the peer connection doesn't exist
    }

    const dataChannel = peerConnection.dataChannel;
    if (!dataChannel) {
        console.warn(`No data channel available for seat: ${seatId}`);
        return null; // Return null if the data channel doesn't exist
    }
    
    // Get the player's drafting pack for the given roundNumber
    const playerKey = seatId.replace('seat', 'player'); // Convert seat-1 to player-1
    const playerListsForSeat = playerLists[playerKey];

    if (!playerListsForSeat) {
        console.error(`No player lists found for seat: ${seatId}`);
        return; // Exit if no player lists
    }

    let currentPack;
    if (roundNumber === 1) {
        currentPack = [...playerListsForSeat.pack1];
    } else if (roundNumber === 2) {
        currentPack = [...playerListsForSeat.pack2];
    } else if (roundNumber === 3) {
        currentPack = [...playerListsForSeat.pack3];
    } else {
        console.warn(`Invalid round number: ${roundNumber}`);
        return; // Exit if round number is invalid
    }

    // Send the drafting pack to the client
    const message = JSON.stringify({
        type: "openPack",
        pack: currentPack, // Directly use the list of card names
        round: roundNumber,
        seat: seatId
    });

    try {
        dataChannel.send(message);

    } catch (error) {
        console.error(`Failed to send pack to seat: ${seatId}:`, error);
    }
}

// **************************************************************************************************Generate Card Elements******************************************************************************************************************//
function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("Card");
    cardElement.style.backgroundImage = card.imageFile
        ? `url('Quidditch World Cup/${card.imageFile}')`
        : "url('default-card-back.png')";
    cardElement.setAttribute("data-orientation", card.isHorizontal ? "horizontal" : "vertical");
    cardElement.setAttribute("data-name", card.name);

    // Add event listener for selection
    cardElement.addEventListener("click", () => {
        // Clear previous selection
        const previouslySelectedCard = document.querySelector(".Card.selected");
        if (previouslySelectedCard) {
            previouslySelectedCard.classList.remove("selected");
        }

        // Highlight the clicked card and update the global variable
        cardElement.classList.add("selected");
        Current_Selected_Card = card.name; // Update the global variable

        console.log(`Selected Card: ${Current_Selected_Card}`);
    });

    return cardElement;
}

function createCardPoolElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("Card");

    // Look up the card details from cardList
    const cardDetails = cardList.find(c => c.name === card.name);

    if (!cardDetails) {
        console.error(`Card "${card.name}" not found in cardList.`);
        cardElement.style.backgroundImage = "url('default-card-back.png')";
    } else {
        cardElement.style.backgroundImage = `url('Quidditch World Cup/${cardDetails.imageFile}')`;
    }

    cardElement.setAttribute("data-orientation", cardDetails?.isHorizontal ? "horizontal" : "vertical");
    cardElement.setAttribute("data-name", card.name);

    // Make the card draggable
    cardElement.draggable = true;

    // Add drag-and-drop functionality
    // Dragstart: Save the card's details and its parent container
    cardElement.addEventListener("dragstart", (event) => {
        const sourceDivId = cardElement.parentElement.id;
        event.dataTransfer.setData("text/plain", card.name); // Save the card's name
        event.dataTransfer.setData("sourceDivId", sourceDivId); // Save the source div's ID
        console.log(`Dragging card "${card.name}" from source div "${sourceDivId}"`);
        event.target.style.opacity = "0.5"; // Make the dragged card semi-transparent
    });

    // Dragend: Reset the opacity
    cardElement.addEventListener("dragend", (event) => {
        event.target.style.opacity = "1"; // Reset the opacity after dragging
    });

    // Allow dropping only on valid numbered Card_Pool_# divs
    document.querySelectorAll('[id^="Card_Pool_"]').forEach((poolDiv) => {
        // Check if the ID matches the exact pattern `Card_Pool_#` where # is a number
        if (/^Card_Pool_\d+$/.test(poolDiv.id)) {
            poolDiv.addEventListener("dragover", (event) => {
                event.preventDefault(); // Allow dropping
            });

            poolDiv.addEventListener("drop", (event) => {
                event.preventDefault(); // Prevent default behavior
                const cardName = event.dataTransfer.getData("text/plain");
                const sourceDivId = event.dataTransfer.getData("sourceDivId");
                const sourceDiv = document.getElementById(sourceDivId);

                // Ensure the card was dragged from a valid div and dropped on a valid Card_Pool_#
                if (sourceDiv && /^Card_Pool_\d+$/.test(sourceDivId)) {
                    const cardElement = Array.from(sourceDiv.children).find(
                        (child) => child.getAttribute("data-name") === cardName
                    );

                    if (cardElement) {
                        poolDiv.appendChild(cardElement); // Move the card to the target div
                    }
                }
            });
        }
    });

    // If dropped anywhere else, the card snaps back to its original position
    document.getElementById("Card_Pool").addEventListener("drop", (event) => {
        event.preventDefault(); // Prevent default behavior
        const cardName = event.dataTransfer.getData("text/plain");
        const sourceDivId = event.dataTransfer.getData("sourceDivId");
        const sourceDiv = document.getElementById(sourceDivId);

        if (sourceDiv && /Card_Pool_\d+$/.test(sourceDivId)) {
            const cardElement = Array.from(sourceDiv.children).find(
                (child) => child.getAttribute("data-name") === cardName
            );

            if (cardElement) {
                console.log(`Invalid drop. Returning card "${cardName}" back to "${sourceDivId}"`);
                sourceDiv.appendChild(cardElement); // Return the card to its original div
            }
        }
    });

    return cardElement;
}



// **************************************************************************************************Client Send Pick******************************************************************************************************************//
confirmPickButton.addEventListener("click", () => {
    if (!Current_Selected_Card) {
        alert("You must select a card before confirming your pick!");
        return;
    }

    // Disable the button after picking
    confirmPickButton.disabled = true;

    // Ensure the client's seat ID is known
    const seatId = Object.keys(peerConnections).find(seat => peerConnections[seat]?.pc);
    if (!seatId) {
        console.error("Client seat ID not found.");
        return;
    }

    // Construct the message
    const message = JSON.stringify({
        type: "cardPick",
        seat: seatId,
        card: Current_Selected_Card
    });

    // Send the message to the host
    const peerConnection = peerConnections[seatId];
    const dataChannel = peerConnection?.dataChannel;

    if (dataChannel && dataChannel.readyState === "open") {
        dataChannel.send(message);
        console.log(`Card pick sent to host: Seat: ${seatId}, Card: ${Current_Selected_Card}`);
    } else {
        console.error(`Data channel for seat ${seatId} is not open or unavailable.`);
    }

    // Optionally, update the UI to reflect the card has been picked
    const selectedCardElement = document.querySelector(".Card.Selected");
    if (selectedCardElement) {
        selectedCardElement.classList.remove("Selected");
    }
});

function handleCardPick(seatId, cardName) {
    
    const playerKey = seatId.replace('seat', 'player');
    const playerList = playerLists[playerKey];

    if (!playerLists) {
        console.warn(`No player list found for ${seatId}. Unable to process card pick.`);
        return;
    }

    // Validate the card is in the drafting pack
    const draftingPack = playerList.draftingPack;
    const cardIndex = draftingPack.findIndex(card => card === cardName);

    if (cardIndex === -1) {
        console.warn(`Card "${cardName}" not found in drafting pack for ${seatId}.`);
    
        // Notify the client that their card pick was rejected
        const peerConnection = peerConnections[seatId];
        const dataChannel = peerConnection?.dataChannel;
    
        if (dataChannel && dataChannel.readyState === "open") {
            const rejectionMessage = JSON.stringify({
                type: "pickRejected",
                message: `The card "${cardName}" is not available in your drafting pack.`,
            });
            dataChannel.send(rejectionMessage);
            console.log(`Pick rejected message sent to ${seatId}:`, rejectionMessage);
        } else {
            console.error(`Data channel for seat ${seatId} is not open. Cannot send rejection message.`);
        }
    
        return;
    }
    
    // Add the card to the player's card pool
    playerList.cardPool.push(cardName);
    console.log(`Added "${cardName}" to ${seatId}'s card pool.`, playerList.cardPool);

    // Remove the card from the drafting pack
    draftingPack.splice(cardIndex, 1);

    // Track that this player has made their pick
    picksMade[seatId] = true;

    // Notify the player to disable controls
    const peerConnection = peerConnections[seatId];
    const dataChannel = peerConnection?.dataChannel;

    if (dataChannel && dataChannel.readyState === "open") {
        const message = JSON.stringify({
            type: "pickAcknowledged",
            message: `You have picked "${cardName}". Waiting for the next round.`,
            card: cardName,
        });
        dataChannel.send(message);
        console.log(`Acknowledgment sent to ${seatId}:`, message);
    }

        // Filter for active seats (connected players)
        const activeSeats = Object.keys(peerConnections).filter(seatId => {
            const connection = peerConnections[seatId]?.pc;
            return connection && (connection.connectionState === "connected" || connection.connectionState === "connecting");
        });

        console.log("Active Seats:", activeSeats);

        // Check if all active players have made their picks
        allPicksMade = activeSeats.every(seat => {
            const hasPicked = picksMade[seat];
            console.log(`Seat: ${seat}, Has Picked: ${hasPicked}`);
            return hasPicked;
        });

        console.log("All Picks Made:", allPicksMade);

    if (allPicksMade) {
        console.log("All players have made their picks. Rotating packs...");
        rotatePacks();
    }
}

async function rotatePacks() {
    console.log("Rotating packs...");

    // Get all active seats (players with a connection)
    const activeSeats = Object.keys(peerConnections).filter((seatId) => {
        const peerConnection = peerConnections[seatId]?.pc;
        return peerConnection && (peerConnection.connectionState === "connected" || peerConnection.connectionState === "connecting");
    });

    // If the round number exceeds 3, end the draft
    if (roundNumber > 3) {
        console.log("All rounds are completed. Ending the draft.");
        draftEnded = true;
        await endDraft(activeSeats); // Call the new endDraft function
        return;
    }

    // Check if all drafting packs are empty (end of current round)
    const allDraftingPacksEmpty = activeSeats.every((seatId) => {
        const playerKey = seatId.replace('seat-', 'player-');
        const draftingPack = playerLists[playerKey]?.draftingPack;
        return !draftingPack || draftingPack.length === 0;
    });

    if (allDraftingPacksEmpty) {
        console.log("All drafting packs are empty. Moving to the next round.");

        // Increment the round number
        roundNumber++;
        console.log(`Round number increased to ${roundNumber}`);

        // If the round number exceeds 3, end the draft
        if (roundNumber > 3) {
            console.log("All rounds are completed. Ending the draft.");
            draftEnded = true;
            await endDraft(activeSeats); // Call the new endDraft function
            return;
        }

        // Load the next pack into each player's drafting pack
        for (const seatId of activeSeats) {
            const playerKey = seatId.replace('seat-', 'player-');
            const playerList = playerLists[playerKey];

            if (!playerList) {
                console.error(`Player list missing for ${playerKey}. Skipping.`);
                continue;
            }

            // Determine which pack to load based on the round number
            const nextPack = playerList[`pack${roundNumber}`];
            if (!nextPack) {
                console.error(`Pack for round ${roundNumber} missing for ${playerKey}. Skipping.`);
                continue;
            }

            // Load the pack into the drafting pack
            playerList.draftingPack = [...nextPack];
            console.log(`Loaded round ${roundNumber} pack into ${playerKey}'s drafting pack.`);

            // Reset `picksMade` for this player
            picksMade[seatId] = false;

            // Use the existing `openPack` function to send the pack to the player
            try {
                await openPack(roundNumber, seatId);

                // Send a message to the client to enable the "Confirm Pick" button
                const peerConnection = peerConnections[seatId];
                const dataChannel = peerConnection?.dataChannel;

                if (dataChannel && dataChannel.readyState === "open") {
                    const message = JSON.stringify({
                        type: "enableConfirmPick",
                        message: "New pack loaded. You can now make your pick."
                    });
                    dataChannel.send(message);
                    console.log(`Sent enableConfirmPick message to ${seatId}.`);
                } else {
                    console.warn(`Data channel for ${seatId} is not open. Cannot send enableConfirmPick message.`);
                }
            } catch (error) {
                console.error(`Failed to open pack for ${seatId}:`, error);
            }
        }

        // Ensure allPicksMade is reset for the new round
        allPicksMade = false;

        return; // Exit the function since we loaded new packs for the next round
    }

    // Rotate drafting packs for all players
    const lastSeat = parseInt(activeSeats[activeSeats.length - 1].replace('seat-', ''), 10);
    const lastSeatKey = `player-${lastSeat}`;

    if (!playerLists[lastSeatKey] || !playerLists[lastSeatKey].draftingPack) {
        console.error(`Drafting pack for last seat (${lastSeatKey}) is missing.`);
        return;
    }

    const tempPack = [...playerLists[lastSeatKey].draftingPack];

    for (let i = activeSeats.length - 1; i > 0; i--) {
        const currentSeatNumber = parseInt(activeSeats[i].replace('seat-', ''), 10);
        const previousSeatNumber = parseInt(activeSeats[i - 1].replace('seat-', ''), 10);

        const currentSeatKey = `player-${currentSeatNumber}`;
        const previousSeatKey = `player-${previousSeatNumber}`;

        if (!playerLists[currentSeatKey] || !playerLists[previousSeatKey]) {
            console.error(`Missing player list for ${currentSeatKey} or ${previousSeatKey}. Skipping rotation.`);
            continue;
        }

        playerLists[currentSeatKey].draftingPack = [...playerLists[previousSeatKey].draftingPack];
    }

    const firstSeatNumber = parseInt(activeSeats[0].replace('seat-', ''), 10);
    const firstSeatKey = `player-${firstSeatNumber}`;

    playerLists[firstSeatKey].draftingPack = [...tempPack];
    console.log("Packs successfully rotated.");

    // Reset picksMade and allPicksMade
    allPicksMade = false;
    activeSeats.forEach((seatId) => {
        picksMade[seatId] = false;
    });

    // Send the rotated packs to all players
    sendRotatedPacks(activeSeats);
}

function sendRotatedPacks(activeSeats) {
    activeSeats.forEach((seatId) => {
        const playerKey = seatId.replace('seat-', 'player-');
        const draftingPack = playerLists[playerKey]?.draftingPack;

        if (!draftingPack) {
            console.error(`No drafting pack found for ${playerKey}. Skipping pack send.`);
            return;
        }

        const peerConnection = peerConnections[seatId];
        const dataChannel = peerConnection?.dataChannel;

        if (!dataChannel || dataChannel.readyState !== "open") {
            console.warn(`Data channel for seat ${seatId} is not open or available. Skipping pack send.`);
            return;
        }

        const message = JSON.stringify({
            type: "getRotatedPack",
            pack: draftingPack,
        });

        try {
            dataChannel.send(message);
            console.log(`Rotated pack sent to ${seatId}:`, draftingPack);
        } catch (error) {
            console.error(`Failed to send rotated pack to ${seatId}:`, error);
        }
    });
}

async function endDraft(activeSeats) {
    console.log("Ending the draft...");

    // Step 1: Gather all players' card pools and prepare the text file content
    let fileContent = "Draft Results:\n\n";

    activeSeats.forEach((seatId) => {
        const playerKey = seatId.replace('seat-', 'player-');
        const playerList = playerLists[playerKey];
        if (!playerList || !playerList.cardPool) {
            console.warn(`No card pool found for ${playerKey}.`);
            return;
        }

        // Retrieve player name if available, otherwise use seatId
        const playerName = document.getElementById(`${seatId}-playerName`)?.textContent || seatId;

        // Append player data to the file content
        fileContent += `${playerName}:\n`;
        const cardCounts = playerList.cardPool.reduce((counts, card) => {
            counts[card] = (counts[card] || 0) + 1;
            return counts;
        }, {});

        Object.entries(cardCounts).forEach(([cardName, count]) => {
            fileContent += `${count}x ${cardName}\n`;
        });

        fileContent += "\n"; // Add a blank line between players
    });

    // Step 2: Generate the text file and prompt download
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "DraftResults.txt";
    downloadLink.click();
    URL.revokeObjectURL(url);

    console.log("Draft results file created and downloaded.");

    // Step 3: Send a "draft complete" message to all players
    activeSeats.forEach((seatId) => {
        const peerConnection = peerConnections[seatId];
        const dataChannel = peerConnection?.dataChannel;

        if (!dataChannel || dataChannel.readyState !== "open") {
            console.warn(`Data channel for seat ${seatId} is not open or available. Skipping message.`);
            return;
        }

        const message = JSON.stringify({
            type: "draft complete",
            message: "The draft is completed",
        });

        try {
            dataChannel.send(message);
            console.log(`Draft complete message sent to ${seatId}.`);
        } catch (error) {
            console.error(`Failed to send draft complete message to ${seatId}:`, error);
        }
    });

    console.log("Draft complete messages sent to all players.");
}

function updateLobbySeating(message) {
    const clientSeatsContainer = document.getElementById("Client_Seats");

    if (!clientSeatsContainer) {
        console.error("Client_Seats element not found.");
        return;
    }

    // Clear the container of all existing seats
    clientSeatsContainer.innerHTML = "";

    // Extract the seating array from the message
    const seatingInfo = message.seating; // seating is an array of objects [{ seatId: 'seat-1', playerName: 'Player 1' }, ...]

    if (!seatingInfo || seatingInfo.length === 0) {
        console.warn("No seating information provided in the message.");
        return;
    }

    // Create and append new seat divs
    seatingInfo.forEach((seat) => {
        const seatDiv = document.createElement("div");
        seatDiv.classList.add("Seat");

        // Display seat ID and player name
        seatDiv.innerHTML = `
            <h4>${seat.seatId}</h4>
            <p>${seat.playerName || "Empty Seat"}</p>
        `;

        clientSeatsContainer.appendChild(seatDiv);
    });

    console.log("Lobby seating updated.");
}


