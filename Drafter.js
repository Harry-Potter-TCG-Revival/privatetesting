import { cards } from './cards.js';

const cardList = [
{ name: 'Bagmans Deception', rarity: 'U', isHorizontal: true, imageFile: 'BagmansDeception.png', cost: 0, type: 'Adventure', draftValue: 5, setName: 'The World Cup' },
{ name: 'Dreams of Flying', rarity: 'U', isHorizontal: true, imageFile: 'DreamsOfFlying.png', cost: 0, type: 'Adventure', draftValue: 5, setName: 'The World Cup' },
{ name: 'Fleeing the Grounds', rarity: 'R', isHorizontal: true, imageFile: 'FleeingTheGrounds.png', cost: 0, type: 'Adventure', draftValue: 5, setName: 'The World Cup' },
{ name: 'Flying Carpet Embargo', rarity: 'C', isHorizontal: true, imageFile: 'FlyingCarpetEmbargo.png', cost: 0, type: 'Adventure', draftValue: 5, setName: 'The World Cup' },
{ name: 'Barty Crouch', rarity: 'R', isHorizontal: true, imageFile: 'BartyCrouch.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Death Eater', rarity: 'R', isHorizontal: true, imageFile: 'DeathEater.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Winky', rarity: 'R', isHorizontal: true, imageFile: 'Winky.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Zograf, Bulgarian Keeper', rarity: 'R', isHorizontal: true, imageFile: 'ZografBulgarianKeeper.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Billywig', rarity: 'C', isHorizontal: true, imageFile: 'Billywig.png', cost: 4, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Biting Gnome', rarity: 'C', isHorizontal: true, imageFile: 'BitingGnome.png', cost: 4, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Bundimun', rarity: 'U', isHorizontal: true, imageFile: 'Bundimun.png', cost: 6, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Erumpent', rarity: 'U', isHorizontal: true, imageFile: 'Erumpent.png', cost: 8, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Firefly', rarity: 'C', isHorizontal: true, imageFile: 'Firefly.png', cost: 3, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Fwooper', rarity: 'C', isHorizontal: true, imageFile: 'Fwooper.png', cost: 5, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Green Comet Leprechauns', rarity: 'R', isHorizontal: true, imageFile: 'GreenCometLeprechauns.png', cost: 11, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Leprechaun', rarity: 'U', isHorizontal: true, imageFile: 'Leprechaun.png', cost: 4, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Mascot Introductions', rarity: 'C', isHorizontal: false, imageFile: 'MascotIntroductions.png', cost: 5, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Melee of the Mascots', rarity: 'R', isHorizontal: true, imageFile: 'MeleeOfTheMascots.png', cost: 8, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Swelling Slug', rarity: 'U', isHorizontal: true, imageFile: 'SwellingSlug.png', cost: 5, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Veela', rarity: 'C', isHorizontal: true, imageFile: 'Veela.png', cost: 7, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Veela Dance', rarity: 'C', isHorizontal: false, imageFile: 'VeelaDance.png', cost: 5, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Weasley Ghoul', rarity: 'U', isHorizontal: true, imageFile: 'WeasleyGhoul.png', cost: 6, type: 'F', draftValue: 5, setName: 'The World Cup' },
{ name: 'Anti Muggle Security Clean-up ', rarity: 'C', isHorizontal: false, imageFile: 'AntiMuggleSecurityCleanUp.png', cost: 6, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Bagmans Gamble', rarity: 'C', isHorizontal: false, imageFile: 'BagmansGamble.png', cost: 9, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Deletrius', rarity: 'C', isHorizontal: false, imageFile: 'Deletrius.png', cost: 4, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Gifts of Gold', rarity: 'C', isHorizontal: false, imageFile: 'GiftsOfGold.png', cost: 4, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Lantern Lit Trail', rarity: 'R', isHorizontal: true, imageFile: 'LanternLitTrail.png', cost: 5, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Leprechaun Gold', rarity: 'U', isHorizontal: true, imageFile: 'LeprechaunGold.png', cost: 2, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Meeting of the Ministers', rarity: 'C', isHorizontal: false, imageFile: 'MeetingOfTheMinisters.png', cost: 4, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Prior Incantato', rarity: 'C', isHorizontal: false, imageFile: 'PriorIncantato.png', cost: 6, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Quick Camp Kit', rarity: 'U', isHorizontal: true, imageFile: 'QuickCampKit.png', cost: 5, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'The Ministry Appears', rarity: 'U', isHorizontal: true, imageFile: 'TheMinistryAppears.png', cost: 8, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Veela Fireballs', rarity: 'C', isHorizontal: false, imageFile: 'VeelaFireballs.png', cost: 4, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Winners Celebration', rarity: 'R', isHorizontal: true, imageFile: 'WinnersCelebration.png', cost: 6, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Wizard Robes', rarity: 'C', isHorizontal: true, imageFile: 'WizardRobes.png', cost: 7, type: 'C', draftValue: 5, setName: 'The World Cup' },
{ name: 'Aurors Arrive', rarity: 'C', isHorizontal: false, imageFile: 'AurorsArrive.png', cost: 6, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Death Eater Mask', rarity: 'C', isHorizontal: true, imageFile: 'DeathEaterMask.png', cost: 3, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Ennervate', rarity: 'C', isHorizontal: false, imageFile: 'Ennervate.png', cost: 6, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Firewhisky', rarity: 'C', isHorizontal: true, imageFile: 'Firewhisky.png', cost: 5, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Interrogation', rarity: 'C', isHorizontal: false, imageFile: 'Interrogation.png', cost: 3, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Morsmordre', rarity: 'C', isHorizontal: false, imageFile: 'Morsmordre.png', cost: 9, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Silhouettes in the Smoke', rarity: 'U', isHorizontal: true, imageFile: 'SilhouettesInTheSmoke.png', cost: 5, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Tents Ablaze', rarity: 'U', isHorizontal: true, imageFile: 'TentsAblaze.png', cost: 5, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'The Dark Mark', rarity: 'R', isHorizontal: true, imageFile: 'TheDarkMark.png', cost: 5, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'The Delight of the Death Eaters', rarity: 'C', isHorizontal: false, imageFile: 'TheDelightOfTheDeathEaters.png', cost: 5, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Bludger to the Face', rarity: 'C', isHorizontal: false, imageFile: 'BludgerToTheFace.png', cost: 4, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Bulgaria Scores', rarity: 'R', isHorizontal: false, imageFile: 'BulgariaScores.png', cost: 12, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Childs Broom', rarity: 'C', isHorizontal: true, imageFile: 'ChildsBroom.png', cost: 1, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Deliberate Collision!', rarity: 'C', isHorizontal: false, imageFile: 'DeliberateCollision.png', cost: 4, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Distracted Referee', rarity: 'C', isHorizontal: false, imageFile: 'DistractedReferee.png', cost: 6, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Diversion!', rarity: 'C', isHorizontal: false, imageFile: 'Diversion.png', cost: 6, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Final Score', rarity: 'C', isHorizontal: false, imageFile: 'FinalScore.png', cost: 9, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Flying with the Cannons', rarity: 'C', isHorizontal: true, imageFile: 'FlyingWithTheCannons.png', cost: 2, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Ireland Scores!', rarity: 'C', isHorizontal: false, imageFile: 'IrelandScores.png', cost: 8, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Krum Catches the Snitch', rarity: 'U', isHorizontal: true, imageFile: 'KrumCatchesTheSnitch.png', cost: 3, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Krums Firebolt', rarity: 'R', isHorizontal: true, imageFile: 'KrumsFirebolt.png', cost: 9, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Mascots Fight!', rarity: 'C', isHorizontal: true, imageFile: 'MascotsFight.png', cost: 6, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Porskoff Ploy', rarity: 'U', isHorizontal: false, imageFile: 'PorskoffPloy.png', cost: 12, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Quidditch Stretcher', rarity: 'U', isHorizontal: true, imageFile: 'QuidditchStretcher.png', cost: 4, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Rain of Bludgers', rarity: 'R', isHorizontal: false, imageFile: 'RainOfBludgers.png', cost: 10, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Sharp Eyed Seekers', rarity: 'C', isHorizontal: false, imageFile: 'SharpEyedSeekers.png', cost: 8, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Slow Motion Viewing', rarity: 'C', isHorizontal: false, imageFile: 'SlowMotionViewing.png', cost: 6, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Synchronized Chasers', rarity: 'C', isHorizontal: false, imageFile: 'SynchronizedChasers.png', cost: 5, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Tough Beaters', rarity: 'U', isHorizontal: false, imageFile: 'ToughBeaters.png', cost: 10, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'World Cup Match', rarity: 'R', isHorizontal: true, imageFile: 'WorldCupMatch.png', cost: 1, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'World Cup Program', rarity: 'C', isHorizontal: true, imageFile: 'WorldCupProgram.png', cost: 2, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'World Cup Stadium', rarity: 'U', isHorizontal: true, imageFile: 'WorldCupStadium.png', cost: 4, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Wronski Feint', rarity: 'U', isHorizontal: false, imageFile: 'WronskiFeint.png', cost: 6, type: 'Q', draftValue: 5, setName: 'The World Cup' },
{ name: 'Blackboard Advertisements', rarity: 'C', isHorizontal: true, imageFile: 'BlackboardAdvertisements.png', cost: 8, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Borrowed Tent', rarity: 'C', isHorizontal: true, imageFile: 'BorrowedTent.png', cost: 2, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Merchandise Cart', rarity: 'U', isHorizontal: true, imageFile: 'MerchandiseCart.png', cost: 8, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Muggle Artifact', rarity: 'C', isHorizontal: true, imageFile: 'MuggleArtifact.png', cost: 7, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Omnioculars', rarity: 'R', isHorizontal: true, imageFile: 'Omnioculars.png', cost: 4, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Portkey', rarity: 'U', isHorizontal: false, imageFile: 'Portkey.png', cost: 8, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Touring the Tents', rarity: 'C', isHorizontal: true, imageFile: 'TouringTheTents.png', cost: 3, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Connolly and Quigley, Irish Beaters', rarity: 'R', isHorizontal: true, imageFile: 'ConnollyAndQuigleyIrishBeaters.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Moran, Irish Seeker', rarity: 'R', isHorizontal: true, imageFile: 'MoranIrishSeeker.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Ginny, Youngest Weasley', rarity: 'R', isHorizontal: true, imageFile: 'GinnyYoungestWeasley.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Krum, Bulgarian Seeker', rarity: 'R', isHorizontal: true, imageFile: 'KrumBulgarianSeeker.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Ludo Bagman', rarity: 'R', isHorizontal: true, imageFile: 'LudoBagman.png', cost: 0, type: 'Character', draftValue: 5, setName: 'The World Cup' },
{ name: 'Wide Awake with Worry', rarity: 'U', isHorizontal: true, imageFile: 'WideAwakeWithWorry.png', cost: 4, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Muggle Marionettes', rarity: 'U', isHorizontal: true, imageFile: 'MuggleMarionettes.png', cost: 3, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Malfoys Sinister Warning', rarity: 'C', isHorizontal: false, imageFile: 'MalfoysSinisterWarning.png', cost: 4, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Winkys Thievery', rarity: 'R', isHorizontal: false, imageFile: 'WinkysThievery.png', cost: 6, type: 'P', draftValue: 5, setName: 'The World Cup' },
{ name: 'Box of Portkeys', rarity: 'R', isHorizontal: false, imageFile: 'BoxOfPortkeys.png', cost: 6, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Hanging Shamrocks', rarity: 'C', isHorizontal: true, imageFile: 'HangingShamrocks.png', cost: 2, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Bagmans Announcing', rarity: 'C', isHorizontal: false, imageFile: 'BagmansAnnouncing.png', cost: 3, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Trick Wand', rarity: 'C', isHorizontal: true, imageFile: 'TrickWand.png', cost: 5, type: 'T', draftValue: 5, setName: 'The World Cup' },
{ name: 'Model Firebolt', rarity: 'C', isHorizontal: true, imageFile: 'ModelFirebolt.png', cost: 1, type: 'T', draftValue: 5, setName: 'The World Cup' }
];

// *********************************************************************************************************************************************************************************************************************/
// ***********************************************************************************************Global Declarations***************************************************************************************************/
// *********************************************************************************************************************************************************************************************************************/

// *********************************************** Main Menu ************************************************************//
const hostButton = document.getElementById('Host_Button');
const joinButton = document.getElementById('Join_Button');
const soloButton = document.getElementById('Solo_Button');
const backToMenuButton = document.getElementById('Back_To_Menu_Button');
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
const packCardsDiv = document.getElementById('Solo_Pack_Cards');
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
const SERVER_BASE_URL = "https://draft-backend-mdmt.onrender.com";
const startGameButton = document.getElementById('Start_Game_Button');
const backButton = document.getElementById('Back_Button');
const confirmPickButton = document.getElementById("Confirm_Pick_Button");
let playerListContainer;
let seats;


// *********************************************** Client Variables ****************************************************//

const joinBackButton = document.getElementById('Join_Back_Button');
const clientBackButton = document.getElementById('Client_Back_Button');
const setHostKey = document.getElementById('Set_Host_Key');
const downloadButton = document.getElementById("Download_Card_Pool_Button");
const currentPackContainer = document.getElementById("Current_Pack_Container");
let clientLobbyBody;
let joinGameMenu;

// *********************************************** Solo Player Variables ***********************************************//
const soloDrafterBody = document.getElementById('Solo_Drafter_Body');
soloDrafterBody.style.display = 'none'; // Initially hide the solo drafter body
let soloRoundNumber = 1; // Global variable to track the round number
const soloPlayers = {}; // Stores players and their lists

// *********************************************************************************************************************/
// ***********************************************DOMCONTENTLOADED******************************************************/
// *********************************************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {  

    // ***********************************************Global Variables******************************************************/
    const hostButton = document.getElementById('Host_Button');
    const gameModeMenu = document.getElementById('Game_Mode_Menu');
    const hostLobbyBody = document.getElementById('Host_Lobby_Body');
    const soloDraftBody = document.getElementById('Solo_Drafter_Body');
    const soloButton = document.getElementById('Solo_Button');
    const startLobbyButton = document.getElementById('Start_Lobby_Button');
    const lobbyNameInput = document.getElementById('Lobby_Name_Input');
    const hostNameInput = document.getElementById('Host_Name_Input');
    const passwordCheckbox = document.getElementById('Include_Password_Checkbox');
    const passwordInput = document.getElementById('Lobby_Password_Input');
    const togglePasswordButton = document.getElementById('Toggle_Password_Visibility');
    const hostCreateLobbyDiv = document.getElementById('Host_Create_Lobby');
    const hostLobbyContent = document.getElementById('Host_Lobby_Content');
    const hostCreateLobbyBackButton = document.getElementById('Host_Create_Lobby_Back_Button');
    const hostLobbyBackButton = document.getElementById('Host_Lobby_Back_Button');
    const closeLobbyButton = document.getElementById("Host_Lobby_Close_Lobby_Button");
    const rejoinLobbyButton = document.getElementById("Host_Rejoin_Lobby_Button");
    


// ***********************************************Menu Event Listeners******************************************************/

soloButton.addEventListener('click',()=>{

    gameModeMenu.style.display = 'none';  
    soloDraftBody.style.display = 'block';  
})

// ***********************************************Host Event Listeners******************************************************/
    // Hosting Button Click
    hostButton.addEventListener('click', () => {
        gameModeMenu.style.display = 'none';  
        hostCreateLobbyDiv.display = 'block';
        hostLobbyBody.style.display = 'block';  
    });
    // Hosting Create Lobby Back Button Click
    hostCreateLobbyBackButton.addEventListener('click', () => {
        hostLobbyBody.style.display = 'none'; 
        gameModeMenu.style.display = 'block';  
         
    });
    // Hosting Lobby Back Button Click
    hostLobbyBackButton.addEventListener('click', () => {
        hostLobbyContent.style.display = 'none';        // Hide lobby screen
        hostCreateLobbyDiv.style.display = 'block';     // Show create lobby screen
    });

    // Close a lobby down
    closeLobbyButton.addEventListener("click", async () => {
    const stored = localStorage.getItem('hostSessions');
    const hostSessions = stored ? JSON.parse(stored) : [];

    if (hostSessions.length === 0) {
        alert("❌ No stored host sessions to close.");
        return;
    }

    // 🧠 You can later let the host pick, but for now we’ll use the most recent one:
    const latestLobby = hostSessions[hostSessions.length - 1];

    if (!latestLobby.lobby_id || !latestLobby.host_key || !latestLobby.lobby_key) {
        alert("❌ Incomplete lobby information.");
        return;
    }

    const confirmed = confirm("Are you sure you want to close this lobby?");
    if (!confirmed) return;

    try {
        const response = await fetch(`${SERVER_BASE_URL}/close-lobby`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lobby_id: latestLobby.lobby_id,
                lobby_key: latestLobby.lobby_key,
                host_key: latestLobby.host_key
            })
        });

        const result = await response.json();
        if (result.success) {
            alert("✅ Lobby successfully closed.");
            hostLobbyContent.style.display = 'none';
            hostCreateLobbyDiv.style.display = 'block';

            // ✅ Remove closed lobby from localStorage
            const updatedSessions = hostSessions.filter(
                s => s.lobby_id !== latestLobby.lobby_id
            );
            localStorage.setItem('hostSessions', JSON.stringify(updatedSessions));
        } else {
            alert("❌ Failed to close lobby: " + result.error);
        }
    } catch (error) {
        console.error("❌ Network error:", error);
        alert("Network error while closing lobby.");
    }
    });

    // rejoin a lobby
    rejoinLobbyButton.addEventListener('click', async () => {
        const stored = localStorage.getItem('hostSessions');
        const hostSessions = stored ? JSON.parse(stored) : [];

        console.log("📦 Locally saved host sessions:", hostSessions); // ✅ Log local sessions
    
        // Create pop-up container
        const popup = document.createElement('div');
        popup.id = "Rejoin_Popup";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "#fff";
        popup.style.padding = "20px";
        popup.style.borderRadius = "10px";
        popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        popup.style.zIndex = 9999;
        popup.innerHTML = `<h3>Rejoin a Lobby</h3><div id="Rejoin_Lobby_List">Loading...</div><br><button id="Close_Rejoin_Popup">Close</button>`;
        document.body.appendChild(popup);
    
        const listDiv = popup.querySelector('#Rejoin_Lobby_List');
        listDiv.innerHTML = 'Loading...';
    
        try {
            const res = await fetch(`${SERVER_BASE_URL}/get-lobbies`);
            const data = await res.json();
    
            if (!data.success || !data.lobbies) throw new Error('Bad server response');
    
            const availableLobbies = hostSessions.filter(local =>
                data.lobbies.some(remote => remote.lobby_id === local.lobby_id) // ✅ correct
            );            
    
            if (availableLobbies.length === 0) {
                listDiv.innerHTML = '<p>No lobbies available.</p>';
                console.log("ℹ️ Rejoin attempted. No active lobbies found in saved sessions.");
            } else {
                listDiv.innerHTML = '';
                availableLobbies.forEach(lobby => {
                    const entry = document.createElement('div');
                    entry.innerHTML = `
                        <p><strong>${lobby.name}</strong></p>
                        <button class="Try_Rejoin_Button" data-host-key="${lobby.host_key}" data-lobby-id="${lobby.lobby_id}">Rejoin</button>
                    `;
                    listDiv.appendChild(entry);
                });
                
    
                console.log("✅ Rejoin options loaded:", availableLobbies);
            }
    
            // Add listener to close popup
            document.getElementById("Close_Rejoin_Popup").addEventListener('click', () => {
                popup.remove();
            });
    
            // Listener for rejoin attempts
            popup.querySelectorAll('.Try_Rejoin_Button').forEach(button => {
                button.addEventListener('click', async () => {
                    const host_key = button.dataset.hostKey;
                    const lobby_id = button.dataset.lobbyId;
    
                    try {
                        const res = await fetch(`${SERVER_BASE_URL}/rejoin-host`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ host_key, lobby_id })
                        });
    
                        const result = await res.json();
                        if (result.success) {
                            console.log("✅ Successfully rejoined lobby:", result.lobby);
    
                            // You could now update the UI or store the session again
                            popup.remove();
                            hostCreateLobbyDiv.style.display = 'none';
                            hostLobbyContent.style.display = 'block';
                        } else {
                            alert("❌ Failed to rejoin: " + result.error);
                        }
                    } catch (err) {
                        console.error("❌ Rejoin request failed:", err);
                        alert("Network error during rejoin.");
                    }
                });
            });
    
        } catch (err) {
            listDiv.innerHTML = '<p>Failed to load lobbies.</p>';
            console.error("❌ Error during rejoin:", err);
        }
    });
    
    
    // Enable/Disable Password Input Based on Checkbox
    passwordCheckbox.addEventListener('change', () => {
        if (passwordCheckbox.checked) {
            passwordInput.removeAttribute('disabled');
            togglePasswordButton.removeAttribute('disabled');
        } else {
            passwordInput.setAttribute('disabled', true);
            passwordInput.value = ''; // Clear password
            togglePasswordButton.setAttribute('disabled', true);
        }
    });

    // Toggle Password Visibility
    togglePasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = '🙈'; 
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = '👁';
        }
    });

    // Start Lobby Button Click Event
    startLobbyButton.addEventListener('click', async () => {
        // Fetch values at button click (not at page load)
        const lobbyName = lobbyNameInput.value.trim();
        const hostName = hostNameInput.value.trim();
        const isPasswordEnabled = passwordCheckbox.checked;
        const password = isPasswordEnabled ? passwordInput.value.trim() : null;
    
        // 1. Ensure the lobby has a name
        if (!lobbyName) {
            alert('❌ Please enter a lobby name.');
            return;
        }
    
        // 2. Ensure the host has entered a name
        if (!hostName) {
            alert('❌ Please enter your name as the host.');
            return;
        }
    
        // 3. If password checkbox is checked, ensure password is entered
        if (isPasswordEnabled && !password) {
            alert('❌ Please enter a password if you have enabled it.');
            return;
        }
    
        try {
            // 4. Call the function to create the lobby
            const response = await createLobby(lobbyName, hostName, password);
    
            if (response.success) {
                const newLobby = {
                    name: response.lobby.name,
                    host_name: response.lobby.host_name,
                    host_key: response.lobby.host_key,
                    lobby_id: response.lobby.lobby_id,    // Public-facing ID
                    lobby_key: response.lobby.lobby_key   // Private host-only key
                };
                
            
                // ⬇️ Get existing sessions or create a new array
                const stored = localStorage.getItem('hostSessions');
                const hostSessions = stored ? JSON.parse(stored) : [];
            
                // ✅ Check if this lobby_key already exists
                const existingIndex = hostSessions.findIndex(s => s.lobby_key === newLobby.lobby_key);

                if (existingIndex !== -1) {
                    hostSessions[existingIndex] = newLobby; // Replace the existing entry
                } else {
                    hostSessions.push(newLobby); // Add new entry
                }

                localStorage.setItem('hostSessions', JSON.stringify(hostSessions));
                console.log("📦 Host lobby saved or updated:", newLobby);

                console.log('✅ Lobby Created:', response.lobby);
    
                // 5. Hide the host create lobby div
                hostCreateLobbyDiv.style.display = 'none';
    
                // 6. Show the Host Lobby Content div
                hostLobbyContent.style.display = 'block';
            } else {
                console.error('❌ Failed to create lobby:', response.error);
                alert(`Failed to create lobby: ${response.error}`);
            }
        } catch (error) {
            console.error('❌ Network error:', error);
            alert('Network error. Please try again.');
        }
    });
    
    // ****************************************************************************Client Event Listeners********************************************************************************************/
    // **********************************************************************************************************************************************************************************************/
    joinButton.addEventListener('click', async () => {
        gameModeMenu.style.display = 'none';  // Hide Main Menu
        joinGameMenu.style.display = 'block';  // Show Join Lobby Screen
    
        await fetchAndLogLobbies(); // Fetch and log lobby names
    });

    joinBackButton.addEventListener('click', async () => {
        gameModeMenu.style.display = 'block';  // Hide Main Menu
        joinGameMenu.style.display = 'none';  // Show Join Lobby Screen
    });    
});

document.addEventListener('DOMContentLoaded', function() {
    playerListContainer = document.getElementById('Player_List');
    seats = document.querySelectorAll('.seat');
    clientLobbyBody = document.getElementById("Client_Lobby_Body");
    joinGameMenu = document.getElementById('Join_Game_Menu');


    seats.forEach(seat => {
        const seatIndex = seat.dataset.index;
        const seatLabel = seat.querySelector('.seat-label');
        const unlockBtn = seat.querySelector('.unlock-btn');
        const joinBtn = seat.querySelector('.join-btn');
        const kickBtn = seat.querySelector('.kick-btn');
        const aiToggleBtn = seat.querySelector('.ai-btn');

        unlockBtn.addEventListener('click', function() {
            //Function for loking/unlocking a seat
        });

        // Function for a player to sit in a seat
        joinBtn.addEventListener('click', function() {
            if (seatLabel.innerText === "Empty") {
                const playerName = prompt("Enter your name:");
                if (playerName) {
                    seatLabel.innerText = playerName;
                    kickBtn.disabled = false; // Enable kick button

                    // Add player to the list
                    const playerItem = document.createElement('div');
                    playerItem.innerText = playerName;
                    playerItem.classList.add('player-item');
                    playerItem.dataset.seat = seatIndex;
                    playerListContainer.appendChild(playerItem);
                }
            }
        });

        kickBtn.addEventListener('click', function() {
            const playerName = seatLabel.innerText;

            if (playerName !== "Empty") {
                seatLabel.innerText = "Empty";
                kickBtn.disabled = true;

                // Remove player from the list
                const playerItems = document.querySelectorAll('.player-item');
                playerItems.forEach(player => {
                    if (player.dataset.seat === seatIndex) {
                        player.remove();
                    }
                });
            }
        });

        aiToggleBtn.addEventListener('click', function() {
            aiToggleBtn.innerText = aiToggleBtn.innerText === "AI: Off" ? "AI: On" : "AI: Off";
        });
    });
});


// *******************************************************************************************************************************************************************************************//
// ********************************************************************************Multiplayer Functions**************************************************************************************//
// *******************************************************************************************************************************************************************************************//

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Host Lobby Stuff******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

async function createLobby(lobbyName, hostName, password) {
    const requestBody = { 
        name: lobbyName, 
        host: hostName, 
        password: password || null 
    };

    console.log("📡 Sending request:", requestBody);  // ✅ Debugging log

    try {
        const response = await fetch('https://draft-backend-mdmt.onrender.com/create-lobby', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        console.log("✅ Server Response:", data);  // ✅ Debugging log

        return data; // ✅ Return the API response to the calling function
    } catch (error) {
        console.error('❌ Network error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Client Lobby Stuff****************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

async function fetchAndLogLobbies() {
    const lobbyListContainer = document.getElementById("Lobby_List");
    const loadingIndicator = document.getElementById("Loading_Lobbies");

    // Show loading text
    lobbyListContainer.innerHTML = ""; // Clear previous lobbies
    loadingIndicator.style.display = "block";

    try {
        console.log("📡 Fetching lobbies...");
        const response = await fetch(`${SERVER_BASE_URL}/get-lobbies`);
        const data = await response.json();

        console.log("✅ Lobbies received:", data.lobbies);

        if (data.success && data.lobbies.length > 0) {
            loadingIndicator.style.display = "none";

            data.lobbies.forEach(lobby => {
                const lobbyDiv = document.createElement("div");
                lobbyDiv.classList.add("lobby-item");

                // Create UI
                lobbyDiv.innerHTML = `
                    <span class="lobby-info">${lobby.name}</span>
                    ${lobby.requires_password ? '<input type="password" class="lobby-password" placeholder="Enter Password">' : ''}
                    <button class="Join_Lobby_Button" data-lobby-id="${lobby.lobby_id}">Join</button>
                `;

                // Attach JOIN logic
                const joinBtn = lobbyDiv.querySelector(".Join_Lobby_Button");

             // *********************************************************Join Lobby Button******************************************************************************//
   
                joinBtn.addEventListener("click", async () => {
                    const lobby_id = joinBtn.dataset.lobbyId;
                    const passwordInput = lobbyDiv.querySelector(".lobby-password");
                    const password = passwordInput ? passwordInput.value.trim() : null;

                    const playerName = prompt("Enter your name:");
                    if (!playerName) {
                        alert("You must enter a name to join.");
                        return;
                    }

                    try {
                        const res = await fetch(`${SERVER_BASE_URL}/join-lobby`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: playerName,
                                lobby_id: lobby_id, 
                                password
                            })
                        });

                        const result = await res.json();

                        if (result.success) {
                            console.log("✅ Joined Lobby:", result.player);
                            joinGameMenu.style.display = 'none';
                            clientLobbyBody.style.display = 'block';

                            // Optional future: update seat info, save player locally, etc.
                        } else {
                            alert("❌ Failed to join: " + result.error);
                        }
                    } catch (err) {
                        console.error("❌ Join error:", err);
                        alert("Network error while trying to join.");
                    }
                });

                lobbyListContainer.appendChild(lobbyDiv);
            });
        } else {
            loadingIndicator.textContent = "No lobbies available.";
        }
    } catch (error) {
        console.error("❌ Error fetching lobbies:", error);
        loadingIndicator.textContent = "Failed to load lobbies.";
    }
}


// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Multiplayer Draft Game************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//


// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Solo Draft***********************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

//**********************************************Set Structure Details *************************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Select the Set_Selection dropdown
    const setSelectionDropdown = document.getElementById('Set_Selection');
    const soloBackToMenuButton = document.getElementById('Solo_Back_To_Menu_Button');


    // Create a Set to hold unique set names
    const uniqueSets = new Set();

    // Iterate over the cards array and collect unique set names
    cards.forEach(card => {
        if (card.setName) {
            uniqueSets.add(card.setName);
        }
    });

    // Add "The World Cup" to the set list
    uniqueSets.add("The World Cup");

    // Convert the Set to an Array and sort alphabetically
    const sortedSets = Array.from(uniqueSets).sort();

    soloBackToMenuButton.addEventListener('click', () => {
        soloDrafterBody.style.display = 'none';      // Hide solo mode
        gameModeMenu.style.display = 'block';        // Show main menu
    });

    
    // Optional: Toggle hover window on click
    document.querySelector('.hover-icon').addEventListener('click', (e) => {
        const window = document.querySelector('.information_window');
        if (window.style.visibility === 'visible') {
            window.style.visibility = 'hidden';
            window.style.opacity = '0';
        } else {
            window.style.visibility = 'visible';
            window.style.opacity = '1';
        }
    });
    
    const columnsData = [
        {
            title: "COMC",
            starter: "Hannah Abbott",
            jumpstart: [
                "Padfoot's Refuge",
                "Blast-Ended Skrewts",
                "Eagle Owl",
                "Barn Owl",
                "Scabbers' Disappearance",
                "Crookshanks"
            ]
        },
        {
            title: "Charms",
            starter: "Justin Finch-Fletchley",
            jumpstart: [
                "Great Hall",
                "Blue Wig",
                "Start-of-Term Feast",
                "Howler",
                "Enchanted Tables",
                "Crystal Ball"
            ]
        },
        {
            title: "Potions",
            starter: "Igor Karkaroff",
            jumpstart: [
                "Potions Dungeon",
                "Knight Bus Ride",
                "Ferula",
                "Malevolent Mixture",
                "Holidays with Hags",
                "Immaculate Concoction"
            ]
        },
        {
            title: "Quidditch",
            starter: "Lee Jordan",
            jumpstart: [
                "Quidditch Pitch",
                "Flying Laps",
                "Mid-air Collision",
                "Spiral Dive",
                "Quidditch Teams of Britain and Ireland",
                "Hufflepuff Match"
            ]
        },
        {
            title: "Transfiguration",
            starter: "Draco Malfoy, Slytherin",
            jumpstart: [
                "Dumbledore's Office",
                "Winged Keys",
                "Switching Spell",
                "Moody Borrows the Map",
                "A Guide to Advanced Transfiguration",
                "Inheriting the Map"
            ]
        }
    ];

   // Ensure this is defined before using it
    const cardsByName = {};

    // Populate cardsByName from the imported cards array
    cards.forEach(card => {
        cardsByName[card.name] = card;
    });

    // Now populate the hover containers
    columnsData.forEach((data, index) => {
        const container = document.getElementById(`hover-container-${index + 1}`); // Updated IDs

        if (!container) {
            console.warn(`Container not found: hover-container-${index + 1}`);
            return;
        }

        // Set container title
        const containerTitle = container.querySelector("h3");
        if (containerTitle) {
            containerTitle.textContent = data.title;
        }

        // Starter card
        const starterDiv = container.querySelector(".Starter");
        const starterCard = cardsByName[data.starter];
        if (starterCard) {
            const starterImg = document.createElement("img");
            starterImg.src = `cardimages/${starterCard.imgSrc}`; // Path for images
            starterImg.alt = starterCard.name;
            starterImg.title = starterCard.name;
            
            // Apply rotation if horizontal
            if (starterCard.horizontal) {
                starterImg.classList.add("horizontal-card");
                starterImg.setAttribute("data-orientation", "horizontal");
            }

            starterImg.classList.add("Solo_Starter_Pack_Card");
            starterDiv.appendChild(starterImg);

        }

        // Jumpstart cards
        const jumpstartDiv = container.querySelector(".Jumpstart_Pack");
        data.jumpstart.forEach(cardName => {
            const jumpstartCard = cardsByName[cardName];
            if (jumpstartCard) {
                const jumpstartImg = document.createElement("img");
                jumpstartImg.src = `cardimages/${jumpstartCard.imgSrc}`; // Path for images
                jumpstartImg.alt = jumpstartCard.name;
                jumpstartImg.title = jumpstartCard.name;

                // Apply rotation if horizontal
                if (jumpstartCard.horizontal) {
                    jumpstartImg.classList.add("horizontal-card");
                    jumpstartImg.setAttribute("data-orientation", "horizontal");
                }

                jumpstartImg.classList.add("Solo_Jumpstart_Pack_Card");
                jumpstartDiv.appendChild(jumpstartImg);

            }
        });
    });

    document.querySelectorAll(".solo-card-pool-column").forEach(column => {
        if (!column.hasAttribute("drop-listener")) {
            column.setAttribute("drop-listener", "true");
    
            column.addEventListener("dragover", (event) => {
                event.preventDefault(); // Allow dropping
                column.classList.add("drag-over");
            });
    
            column.addEventListener("dragleave", () => {
                column.classList.remove("drag-over");
            });
    
            column.addEventListener("drop", (event) => {
                event.preventDefault();
                column.classList.remove("drag-over");
    
                const cardId = event.dataTransfer.getData("text/plain");
                const draggedCard = document.getElementById(cardId);
    
                if (draggedCard) {
                    column.appendChild(draggedCard);
                } else {
                }
            });
        }
    });
});

//*****************************************************Start of Draft Functions *********************************************/
// Set the click event listener for the solo mode start draft button
document.getElementById("Start_Solo_Draft_Button").addEventListener("click", () => {
    // Step 1: Create Solo Seats
    createSoloSeats();

    // Step 2: Create Card Packs
    createCardPacks();

    // Step 3: Load the pack for the current round into each player's "solo current pack"
    loadRoundPack(soloRoundNumber);

    //Step 6: Hide the Start Solo Draft Button
    document.getElementById("Start_Solo_Draft_Button").style.display = "none";

    // Step 7: Display each card in the human player's "solo current pack"
    displaySoloPack();
});

function createSoloSeats() {
    soloRoundNumber = 1; // Set the solo round number

    // Create 8 players (player 1 is the human player)
    for (let i = 1; i <= 8; i++) {
        const playerKey = `player-${i}`;
        soloPlayers[playerKey] = {
            soloPack1: [],
            soloPack2: [],
            soloPack3: [],
            soloCurrentPack: [],
            soloCurrentPool: []
        };
    }
}

/// Function to generate the card packs
function createCardPacks() {
    Object.keys(soloPlayers).forEach(playerKey => {
        for (let packNumber = 1; packNumber <= 3; packNumber++) {
            // Refresh the card pools for each pack
            const rareCards = [...cardList.filter(card => card.rarity === "R")];
            const uncommonCards = [...cardList.filter(card => card.rarity === "U")];
            const commonCards = [...cardList.filter(card => card.rarity === "C")];

            const pack = [];

            // Add 1 rare card
            const rareCard = soloGetRandomCard(rareCards);
            if (rareCard) {
                pack.push(rareCard.name);
                rareCards.splice(rareCards.indexOf(rareCard), 1); // Remove the card from the pool
            }

            // Add 3 unique uncommon cards
            for (let i = 0; i < 3; i++) {
                const uncommonCard = soloGetRandomCard(uncommonCards);
                if (uncommonCard) {
                    pack.push(uncommonCard.name);
                    uncommonCards.splice(uncommonCards.indexOf(uncommonCard), 1); // Remove the card from the pool
                }
            }

            // Add 7 unique common cards
            for (let i = 0; i < 7; i++) {
                const commonCard = soloGetRandomCard(commonCards);
                if (commonCard) {
                    pack.push(commonCard.name);
                    commonCards.splice(commonCards.indexOf(commonCard), 1); // Remove the card from the pool
                }
            }

            // Assign the pack to the corresponding player's list
            soloPlayers[playerKey][`soloPack${packNumber}`] = pack;
        }
    });

    console.log("Card packs created:", soloPlayers);
}

// Helper function to get a random card from a list
function soloGetRandomCard(cardArray) {
    if (cardArray.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
}

//Load the the rounds pack into each seats current pack list
function loadRoundPack(roundNumber) {
    Object.keys(soloPlayers).forEach(playerKey => {
        soloPlayers[playerKey].soloCurrentPack = [...soloPlayers[playerKey][`soloPack${roundNumber}`]];
    });

}

function displaySoloPack() {
    const packCardsDiv = document.getElementById("Solo_Pack_Cards");
    packCardsDiv.innerHTML = ""; // Clear existing cards

    const humanPlayerPack = soloPlayers["player-1"].soloCurrentPack;

    humanPlayerPack.forEach(cardName => {
        const card = cardList.find(c => c.name === cardName);
        if (!card) {
            console.warn(`Card "${cardName}" not found in cardList.`);
            return;
        }

        const cardElement = soloCreateCardElement(card);
        packCardsDiv.appendChild(cardElement);
    });
}

//*****************************************In Round Functions ******************************************/
function soloCreateCardElement(card) {
    
    // Create the card container
    const cardElement = document.createElement("div");
    cardElement.className = "Solo_Draft_Pack_Card";
    cardElement.dataset.name = card.name;
    const imagePath = card.setName === "The World Cup" 
    ? `Quidditch World Cup/${card.imageFile}` 
    : `Images/Cards/${card.imgSrc}`;

    // Add orientation attribute
    if (card.isHorizontal) {
        cardElement.setAttribute("data-orientation", "horizontal");
    }

    cardElement.style.backgroundImage = `url('${imagePath}')`; // Use the correct path

    cardElement.style.backgroundSize = "cover";

    // Add a click event to handle selection via soloChooseCard
    cardElement.addEventListener("click", () => {
        soloChooseCard(card); // Call soloChooseCard with the card and its element
    });

    return cardElement;
}

//**********************************************Pick a card functions*************************************************/
function soloChooseCard(card) {
    // Get references to the player's solo current pack and pool
    const player = soloPlayers["player-1"];
    const currentPack = player.soloCurrentPack;
    const currentPool = player.soloCurrentPool;

    // Find the card index in the current pack
    const cardIndex = currentPack.findIndex(c => c === card.name);

    // Move the card if it exists
    if (cardIndex !== -1) {
        const [selectedCard] = currentPack.splice(cardIndex, 1);

        // Add the card to the player's card pool
        currentPool.push(selectedCard);

         // Add the card to the appropriate pool in the DOM
         addCardToPool(card);

    } else {
        console.warn("Card not found in the pack:", card.name);
    }

    // Call the next steps
    soloCompPicks(); // AI players make their picks
    soloRotatePacks(); // Rotate packs for the next pick
}

function addCardToPool(card) {
    const cost = card.cost || 0;
    const poolIndex = cost >= 8 ? 8 : cost;
    const poolDiv = document.getElementById(`Solo_Card_Pool_${poolIndex}`);

    if (!poolDiv) {
        console.error(`Pool div for cost ${poolIndex} not found.`);
        return;
    }

    // Create the card element
    const cardElement = document.createElement("div");
    cardElement.classList.add("Solo_Draft_Pool_Card");
    cardElement.style.backgroundImage = `url('Quidditch World Cup/${card.imageFile}')`;
    cardElement.setAttribute("data-name", card.name);
    cardElement.setAttribute("data-cost", cost);
    cardElement.style.backgroundSize = "cover";

    if (card.isHorizontal) {
        cardElement.setAttribute("data-orientation", "horizontal");
    }

    // Ensure the card has a unique ID
    if (!cardElement.id) {
        cardElement.id = `card-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    // Make the card draggable
    cardElement.setAttribute("draggable", "true");
    cardElement.addEventListener("dragstart", (event) => {
        console.log(`Dragging card: ${cardElement.id}`);
        event.dataTransfer.setData("text/plain", cardElement.id);
        cardElement.classList.add("dragging");
    });

    cardElement.addEventListener("dragend", () => {
        console.log(`Drag ended: ${cardElement.id}`);
        cardElement.classList.remove("dragging");
    });

    poolDiv.appendChild(cardElement);
}

//**********************************Each computer makes a pick ****************************************************/
function soloCompPicks() {
    Object.keys(soloPlayers).forEach(playerKey => {
        if (playerKey === "player-1") return; // Skip the human player
        
        const player = soloPlayers[playerKey];
        const currentPack = player.soloCurrentPack;

        if (!currentPack || currentPack.length === 0) {
            console.warn(`${playerKey} has no cards in their current pack.`);
            return;
        }

        // Evaluate cards in the current pack
        const cardValues = currentPack.map(cardName => {
            const cardObject = cardList.find(c => c.name === cardName); // Find card object by name
            if (!cardObject) {
                console.warn(`Card not found in cardList: ${cardName}`);
                return { name: cardName, value: -1 }; // Return -1 for missing cards
            }
            const value = evaluateCard(cardObject, player.soloCurrentPool);
            return { name: cardObject.name, value };
        });

        // Select the best card
        const bestPick = cardValues.reduce((best, current) => {
            if (current.value > best.value) return current;
            return best;
        }, { name: null, value: -Infinity });


        // Move the best card to the player's pool
        const cardIndex = currentPack.findIndex(c => c === bestPick.name);
        if (cardIndex !== -1) {
            // Add the card to the player's pool
            player.soloCurrentPool.push(currentPack[cardIndex]);

            // Remove the card from the current pack
            currentPack.splice(cardIndex, 1);

        } else {
            console.warn(`${bestPick.name} not found in ${playerKey}'s current pack.`);
        }
    });
}

//// ************************************************** Evaluate the card*************************************************/ 
function evaluateCard(card, playerNumber) {

    if (!card) {
        console.error(`No card passed for evaluation for Player ${playerNumber}`);
        return 0; // Default value if card is undefined
    }

    // Retrieve the player's pool from the global soloPlayers object
    const playerPool = soloPlayers[`Player${playerNumber}`]?.soloCurrentPool || [];

    // Base draft value of the card
    const baseValue = card.draftValue || 5;

    // Calculate synergy value using soloDraftTypeSynergy
    const synergyValue = soloDraftTypeSynergy(card, playerPool);

    // Calculate curve adjustment
    const curveAdjustment = evaluateCurve(card, playerPool);

    // Add a random boost between 0 and 1
    const randomBoost = Math.random();

    // Total value combines base value, synergy, curve adjustment, and random boost
    const totalValue = baseValue + synergyValue + curveAdjustment + randomBoost;

    return totalValue;
}

// ***************************************** Evaluate cards curve point***************************************/
function soloDraftTypeSynergy(card, playerPool) {
    // If the player's pool is empty, no synergy can be calculated
    if (playerPool.length === 0) {
        return 0;
    }

    // Total cards in the pool
    const totalCards = playerPool.length;

    // Weigh the value based on the number of picks already made
    const weightFactor = Math.min(totalCards / 15, 1); // Scale from 0 (low picks) to 1 (15+ picks)

    // Special handling for "Character" and "Adventure" types
    const cardType = card.type || "Unknown"; // Handle missing types
    if (cardType === "Character" || cardType === "Adventure") {
        return 0.5 * weightFactor * 10; // Fixed value for these types
    }

    // Tally the types in the player's pool
    const typeCounts = {};
    playerPool.forEach(poolCard => {
        const poolCardType = poolCard.type || "Unknown"; // Handle missing types
        typeCounts[poolCardType] = (typeCounts[poolCardType] || 0) + 1;
    });

    // Calculate the percentage of the current card's type in the pool
    const cardTypeCount = typeCounts[cardType] || 0;
    const typePercentage = cardTypeCount / totalCards;

    // Final synergy value
    const synergyValue = typePercentage * weightFactor * 10; // Scale synergy contribution

    return synergyValue;
}

// ***************************************** Evaluate cards curve point***************************************/
function evaluateCurve(card, playerPool) {
    const baseline = 5.5;

    // If the player's pool is empty, no curve adjustment is applied
    if (playerPool.length === 0) {
        return 0;
    }

    // Calculate the average cost of cards in the player's pool
    const averageCost = playerPool.reduce((sum, poolCard) => sum + (poolCard.cost || 0), 0) / playerPool.length;

    // Calculate the curve adjustment based on the card's cost and the pool's average cost
    const cardCost = card.cost || 0;
    const costDifference = cardCost - baseline;

    // Weigh the value based on the number of picks already made, reaching full weight at 20 cards
    const weightFactor = Math.min(playerPool.length / 20, 1); // Scale from 0 to 1, maxing at 20 cards
    const weight = 5; // Overall weight of this contribution

    // Determine adjustment factor based on how the pool's average compares to the baseline
    const adjustment = (averageCost < baseline && cardCost > baseline) || 
                       (averageCost > baseline && cardCost < baseline)
        ? Math.abs(costDifference) * weightFactor * weight // Apply adjustment based on scaling factor
        : 0;

        return adjustment;
}

// ***************************************** Rotate Pack in Solo Player***************************************/
function soloRotatePacks() {
    // Check if the round is odd or even
    const isOddRound = soloRoundNumber % 2 !== 0;

    // Check if all current packs are empty
    const allPacksEmpty = Object.values(soloPlayers).every(player => player.soloCurrentPack.length === 0);

    if (allPacksEmpty) {
        soloEndOfRound();
        return; // Stop further processing since the round has ended
    }

    // Temporary storage for rotation
    const tempPack = isOddRound
        ? soloPlayers[`player-8`].soloCurrentPack // Last seat for odd rounds
        : soloPlayers[`player-1`].soloCurrentPack; // First seat for even rounds

    if (isOddRound) {
        // Rotate packs upwards
        for (let i = 8; i > 1; i--) {
            soloPlayers[`player-${i}`].soloCurrentPack = soloPlayers[`player-${i - 1}`].soloCurrentPack;
        }
        soloPlayers[`player-1`].soloCurrentPack = tempPack;
    } else {
        // Rotate packs downwards
        for (let i = 1; i < 8; i++) {
            soloPlayers[`player-${i}`].soloCurrentPack = soloPlayers[`player-${i + 1}`].soloCurrentPack;
        }
        soloPlayers[`player-8`].soloCurrentPack = tempPack;
    }

    displaySoloPack();
}

// ***************************************** Go through steps to end a round***************************************/
function soloEndOfRound() {
    
    // Check if the solo round is 3 or higher
    if (soloRoundNumber >= 3) {


        // Call the function to end the draft
        soloEndDraft();
    } else {
        // Increment the round number
        soloRoundNumber++;

        // Call loadRoundPack with the updated round number
        loadRoundPack(soloRoundNumber);

        // Then display the pack
        displaySoloPack();
    }
}

function soloEndDraft() {
    // Print all players' packs and pools to a text file
    printSoloDraftResults();

    // Remove all card elements from the "Solo_Pack_Cards" div
    const soloPackCardsDiv = document.getElementById("Solo_Pack_Cards");
    if (soloPackCardsDiv) {
        while (soloPackCardsDiv.firstChild) {
            soloPackCardsDiv.removeChild(soloPackCardsDiv.firstChild);
        }
    }

    // Hide the "Solo_Your_Pack" div
    const soloYourPackDiv = document.getElementById("Solo_Your_Pack");
    if (soloYourPackDiv) {
        soloYourPackDiv.style.display = "none";
    }

    console.log("Solo draft ended: Current pack cleared and 'Solo Your Pack' hidden.");
}

// ***************************************** Go through steps to end a round***************************************/
function printSoloDraftResults() {
    let draftResults = "";

    // Define type mappings
    const typeMappings = {
        "C": "Charms",
        "F": "COMC",
        "P": "Potions",
        "Q": "Quidditch",
        "T": "Transfiguration",
        "Character": "Character",
        "Adventure": "Adventures"
    };

    // Define the required order for printing
    const printOrder = ["Character", "COMC", "Charms", "Quidditch", "Potions", "Transfiguration", "Adventures"];

    // Iterate through each player in soloPlayers
    Object.keys(soloPlayers).forEach((playerKey, index) => {
        const player = soloPlayers[playerKey];
        draftResults += `Player ${index + 1} Results:\n\n`;

        const pool = player.soloCurrentPool;

        if (!pool || pool.length === 0) {
            draftResults += "  (No cards in the pool)\n\n";
            return;
        }

        // Group and count cards by type
        const typeGroups = {};

        pool.forEach(cardName => {
            const card = cardList.find(c => c.name === cardName);

            if (!card) {
                console.warn(`Card "${cardName}" not found in cardList.`);
                return;
            }

            // Map card type to its proper category
            let cardType = typeMappings[card.type] || card.type || "Unknown";

            if (!typeGroups[cardType]) {
                typeGroups[cardType] = {};
            }

            // Count occurrences of each card
            if (!typeGroups[cardType][cardName]) {
                typeGroups[cardType][cardName] = 0;
            }
            typeGroups[cardType][cardName]++;
        });

        // Print grouped cards in the required order
        printOrder.forEach(type => {
            if (typeGroups[type]) {
                const totalCards = Object.values(typeGroups[type]).reduce((sum, count) => sum + count, 0);
                draftResults += `${type} (${totalCards}):\n`;
                Object.entries(typeGroups[type]).forEach(([cardName, count]) => {
                    draftResults += `  - ${count}x ${cardName}\n`;
                });
                draftResults += "\n";
            }
        });

        draftResults += "\n"; // Add space between players
    });

    // Create a Blob and download it as a text file
    const blob = new Blob([draftResults], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "SoloDraftResults.txt";
    link.click();

    console.log("Solo draft results downloaded.");
}
