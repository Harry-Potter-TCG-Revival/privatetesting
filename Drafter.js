import { cards } from './cards.js';

const cardList = [
    { name: "Bagman's Deception", rarity: "U", isHorizontal: true, imageFile: "BagmansDeception.png", cost: 0, type: "Adventure", draftValue: 5, setName: "The World Cup" },
    { name: "Dreams of Flying", rarity: "U", isHorizontal: true, imageFile: "DreamsOfFlying.png", cost: 0, type: "Adventure" , draftValue: 5, setName: "The World Cup"},
    { name: "Fleeing the Grounds", rarity: "R", isHorizontal: true, imageFile: "FleeingTheGrounds.png", cost: 0, type: "Adventure" , draftValue: 5, setName: "The World Cup"},
    { name: "Flying Carpet Embargo", rarity: "C", isHorizontal: true, imageFile: "FlyingCarpetEmbargo.png", cost: 0, type: "Adventure" , draftValue: 5, setName: "The World Cup"},
    { name: "Connolly and Quigley, Irish Beaters", rarity: "R", isHorizontal: true, imageFile: "ConnollyAndQuigleyIrishBeaters.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Death Eater", rarity: "R", isHorizontal: true, imageFile: "DeathEater.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Ludo Bagman", rarity: "R", isHorizontal: true, imageFile: "LudoBagman.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Krum, Bulgarian Seeker", rarity: "R", isHorizontal: true, imageFile: "KrumBulgarianSeeker.png", cost: 0, type: "Character", draftValue: 5 , setName: "The World Cup"},
    { name: "Moran, Irish Seeker", rarity: "R", isHorizontal: true, imageFile: "MoranIrishSeeker.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Ryan, Irish Keeper", rarity: "R", isHorizontal: true, imageFile: "RyanIrishKeeper.png", cost: 0, type: "Character", draftValue: 5 , setName: "The World Cup"},
    { name: "Winky", rarity: "R", isHorizontal: true, imageFile: "Winky.png", cost: 0, type: "Character", draftValue: 5 , setName: "The World Cup"},
    { name: "Zograf, Bulgarian Keeper", rarity: "R", isHorizontal: true, imageFile: "ZografBulgarianKeeper.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Billywig", rarity: "C", isHorizontal: true, imageFile: "Billywig.png", cost: 4, type: "F", draftValue: 5 , setName: "The World Cup"},
    { name: "Biting Gnome", rarity: "C", isHorizontal: true, imageFile: "BitingGnome.png", cost: 4, type: "F", draftValue: 5 , setName: "The World Cup"},
    { name: "Bundimun", rarity: "C", isHorizontal: true, imageFile: "Bundimun.png", cost: 6, type: "F", draftValue: 5, setName: "The World Cup" },
    { name: "Erumpent", rarity: "U", isHorizontal: true, imageFile: "Erumpent.png", cost: 8, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Firefly", rarity: "C", isHorizontal: true, imageFile: "Firefly.png", cost: 3, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Fwooper", rarity: "C", isHorizontal: true, imageFile: "Fwooper.png", cost: 5, type: "F", draftValue: 5, setName: "The World Cup" },
    { name: "Green Comet Leprechauns", rarity: "R", isHorizontal: true, imageFile: "GreenCometLeprechauns.png", cost: 11, type: "F", draftValue: 5, setName: "The World Cup" },
    { name: "Leprechaun", rarity: "U", isHorizontal: true, imageFile: "Leprechaun.png", cost: 4, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Mascot Introductions", rarity: "C", isHorizontal: false, imageFile: "MascotIntroductions.png", cost: 5, type: "F", draftValue: 5, setName: "The World Cup" },
    { name: "Melee of the Mascots", rarity: "R", isHorizontal: true, imageFile: "MeleeOfTheMascots.png", cost: 8, type: "F", draftValue: 5 , setName: "The World Cup"},
    { name: "Swelling Slug", rarity: "U", isHorizontal: true, imageFile: "SwellingSlug.png", cost: 5, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Veela", rarity: "C", isHorizontal: true, imageFile: "Veela.png", cost: 7, type: "F", draftValue: 5, setName: "The World Cup" },
    { name: "Veela Dance", rarity: "C", isHorizontal: false, imageFile: "VeelaDance.png", cost: 5, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Weasley Ghoul", rarity: "U", isHorizontal: true, imageFile: "WeasleyGhoul.png", cost: 6, type: "F" , draftValue: 5, setName: "The World Cup"},
    { name: "Anti Muggle Security Clean-up", rarity: "C", isHorizontal: false, imageFile: "AntiMuggleSecurityCleanup.png", cost: 6, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Bagman's Gamble", rarity: "C", isHorizontal: false, imageFile: "BagmansGamble.png", cost: 9, type: "C" , draftValue: 5, setName: "The World Cup"},
    { name: "Box of Portkeys", rarity: "U", isHorizontal: true, imageFile: "BoxOfPortkeys.png", cost: 5, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Gifts of Gold", rarity: "C", isHorizontal: false, imageFile: "GiftsOfGold.png", cost: 4, type: "C", draftValue: 5, setName: "The World Cup" },
    { name: "Lantern Lit Trail", rarity: "R", isHorizontal: true, imageFile: "LanternLitTrail.png", cost: 5, type: "C" , draftValue: 5, setName: "The World Cup"},
    { name: "Meeting of the Ministers", rarity: "C", isHorizontal: true, imageFile: "MeetingOfTheMinisters.png", cost: 6, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Prior Incantato", rarity: "C", isHorizontal: false, imageFile: "PriorIncantato.png", cost: 5, type: "C" , draftValue: 5, setName: "The World Cup"},
    { name: "Splinched", rarity: "U", isHorizontal: true, imageFile: "Splinched.png", cost: 5, type: "C", draftValue: 5, setName: "The World Cup" },
    { name: "The Ministry Appears", rarity: "U", isHorizontal: true, imageFile: "TheMinistryAppears.png", cost: 8, type: "C" , draftValue: 5, setName: "The World Cup"},
    { name: "Veela Fireballs", rarity: "C", isHorizontal: false, imageFile: "VeelaFireballs.png", cost: 4, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Winners' Celebration", rarity: "R", isHorizontal: true, imageFile: "WinnersCelebration.png", cost: 6, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Wizard Robes", rarity: "C", isHorizontal: true, imageFile: "WizardRobes.png", cost: 7, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Aurors Arrive", rarity: "C", isHorizontal: false, imageFile: "AurorsArrive.png", cost: 6, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Death Eater Mask", rarity: "C", isHorizontal: true, imageFile: "DeathEaterMask.png", cost: 3, type: "P", draftValue: 5, setName: "The World Cup" },
    { name: "Ennervate", rarity: "C", isHorizontal: false, imageFile: "Ennervate.png", cost: 6, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Finding the Stolen Wand", rarity: "R", isHorizontal: false, imageFile: "FindingTheStolenWand.png", cost: 5, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Firewhisky", rarity: "C", isHorizontal: true, imageFile: "Firewhisky.png", cost: 5, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Interrogation", rarity: "C", isHorizontal: false, imageFile: "Interrogation.png", cost: 3, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Morsmordre", rarity: "C", isHorizontal: false, imageFile: "Morsmordre.png", cost: 9, type: "P", draftValue: 5 , setName: "The World Cup"},
    { name: "Muggle Marionettes", rarity: "U", isHorizontal: true, imageFile: "MuggleMarionettes.png", cost: 8, type: "P", draftValue: 5 , setName: "The World Cup"},
    { name: "NAME?", rarity: "C", isHorizontal: false, imageFile: "Name.png", cost: 4, type: "P" , draftValue: 5, setName: "The World Cup"},
    { name: "Silhouettes in the Smoke", rarity: "U", isHorizontal: true, imageFile: "SilhouettesInTheSmoke.png", cost: 5, type: "P", draftValue: 5 , setName: "The World Cup"},
    { name: "Tents Ablaze", rarity: "U", isHorizontal: true, imageFile: "TentsAblaze.png", cost: 5, type: "P", draftValue: 5 , setName: "The World Cup"},
    { name: "The Dark Mark", rarity: "R", isHorizontal: true, imageFile: "TheDarkMark.png", cost: 5, type: "P", draftValue: 5 , setName: "The World Cup"},
    { name: "The Delight of the Death Eaters", rarity: "C", isHorizontal: false, imageFile: "TheDelightOfTheDeathEaters.png", cost: 5, type: "P", draftValue: 5, setName: "The World Cup" },
    { name: "Wide Awake with Worry", rarity: "U", isHorizontal: true, imageFile: "WideAwakeWithWorry.png", cost: 3, type: "P", draftValue: 5, setName: "The World Cup" },
    { name: "Bludger to the Face", rarity: "C", isHorizontal: false, imageFile: "BludgerToTheFace.png", cost: 4, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Bulgaria Scores", rarity: "R", isHorizontal: false, imageFile: "BulgariaScores.png", cost: 12, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Child's Broom", rarity: "C", isHorizontal: true, imageFile: "ChildsBroom.png", cost: 1, type: "Q", draftValue: 5 , setName: "The World Cup"},
    { name: "Deliberate Collision!", rarity: "C", isHorizontal: false, imageFile: "DeliberateCollision.png", cost: 4, type: "Q", draftValue: 5 , setName: "The World Cup"},
    { name: "Distracted Referee", rarity: "C", isHorizontal: false, imageFile: "DistractedReferee.png", cost: 6, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Diversion!", rarity: "C", isHorizontal: false, imageFile: "Diversion.png", cost: 6, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Final Score", rarity: "C", isHorizontal: false, imageFile: "FinalScore.png", cost: 9, type: "Q", draftValue: 5, setName: "The World Cup" },
    { name: "Flying with the Cannons", rarity: "C", isHorizontal: true, imageFile: "FlyingWithTheCannons.png", cost: 2, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Ireland Scores!", rarity: "C", isHorizontal: false, imageFile: "IrelandScores.png", cost: 8, type: "Q", draftValue: 5 , setName: "The World Cup"},
    { name: "Krum Catches the Snitch", rarity: "U", isHorizontal: true, imageFile: "KrumCatchesTheSnitch.png", cost: 3, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Krum's Firebolt", rarity: "R", isHorizontal: true, imageFile: "KrumsFirebolt.png", cost: 9, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Mascots Fight!", rarity: "C", isHorizontal: true, imageFile: "MascotsFight.png", cost: 6, type: "Q", draftValue: 5 , setName: "The World Cup"},
    { name: "Porskoff Ploy", rarity: "U", isHorizontal: false, imageFile: "PorskoffPloy.png", cost: 12, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Quidditch Scoreboard", rarity: "C", isHorizontal: true, imageFile: "QuidditchScoreboard.png", cost: 2, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Quidditch Stretcher", rarity: "U", isHorizontal: true, imageFile: "QuidditchStretcher.png", cost: 4, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Sharp Eyed Seekers", rarity: "C", isHorizontal: false, imageFile: "SharpEyedSeekers.png", cost: 8, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Slow Motion Viewing", rarity: "C", isHorizontal: false, imageFile: "SlowMotionViewing.png", cost: 6, type: "Q", draftValue: 5, setName: "The World Cup" },
    { name: "Synchronized Chasers", rarity: "C", isHorizontal: false, imageFile: "SynchronizedChasers.png", cost: 5, type: "Q", draftValue: 5, setName: "The World Cup" },
    { name: "Tough Beaters", rarity: "U", isHorizontal: false, imageFile: "ToughBeaters.png", cost: 10, type: "Q", draftValue: 5 , setName: "The World Cup"},
    { name: "World Cup Match", rarity: "R", isHorizontal: true, imageFile: "WorldCupMatch.png", cost: 1, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "World Cup Program", rarity: "C", isHorizontal: true, imageFile: "WorldCupProgram.png", cost: 2, type: "Q", draftValue: 5, setName: "The World Cup" },
    { name: "World Cup Stadium", rarity: "U", isHorizontal: true, imageFile: "WorldCupStadium.png", cost: 4, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Wronski Feint", rarity: "U", isHorizontal: false, imageFile: "WronskiFeint.png", cost: 6, type: "Q" , draftValue: 5, setName: "The World Cup"},
    { name: "Blackboard Advertisements", rarity: "U", isHorizontal: true, imageFile: "BlackboardAdvertisements.png", cost: 8, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Breezey Nethers", rarity: "U", isHorizontal: true, imageFile: "BreezeyNethers.png", cost: 8, type: "T" , draftValue: 5, setName: "The World Cup"},
    { name: "Borrowed Tent", rarity: "C", isHorizontal: true, imageFile: "BorrowedTent.png", cost: 2, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Merchandise Cart", rarity: "U", isHorizontal: true, imageFile: "MerchandiseCart.png", cost: 8, type: "T" , draftValue: 5, setName: "The World Cup"},
    { name: "Muggle Artifact", rarity: "C", isHorizontal: true, imageFile: "MuggleArtifact.png", cost: 7, type: "T" , draftValue: 5, setName: "The World Cup"},
    { name: "Omnioculars", rarity: "R", isHorizontal: true, imageFile: "Omnioculars.png", cost: 4, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Portkey", rarity: "U", isHorizontal: false, imageFile: "Portkey.png", cost: 8, type: "T", draftValue: 5, setName: "The World Cup" },
    { name: "Quietus", rarity: "C", isHorizontal: true, imageFile: "Quietus.png", cost: 3, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Sonorus", rarity: "C", isHorizontal: true, imageFile: "Sonorus.png", cost: 3, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Top Box", rarity: "R", isHorizontal: true, imageFile: "TopBox.png", cost: 6, type: "T" , draftValue: 5, setName: "The World Cup"},
    { name: "Touring the Tents", rarity: "C", isHorizontal: true, imageFile: "TouringTheTents.png", cost: 3, type: "T", draftValue: 5 , setName: "The World Cup"},
    { name: "Trick Wand", rarity: "C", isHorizontal: true, imageFile: "TrickWand.png", cost: 13, type: "T" , draftValue: 5, setName: "The World Cup"},
    { name: "Barty Crouch", rarity: "R", isHorizontal: true, imageFile: "BartyCrouch.png", cost: 0, type: "Character" , draftValue: 5, setName: "The World Cup"},
    { name: "Deletrius", rarity: "C", isHorizontal: false, imageFile: "Deletrius.png", cost: 4, type: "C", draftValue: 5 , setName: "The World Cup"},
    { name: "Leprechaun Gold", rarity: "U", isHorizontal: true, imageFile: "LeprechaunGold.png", cost: 2, type: "C", draftValue: 5 , setName: "The World Cup"}
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
let soloRoundNumber = 1; // Global variable to track the round number
const soloPlayers = {}; // Stores players and their lists

// *********************************************************************************************************************/
// ***********************************************DOMCONTENTLOADED******************************************************/
// *********************************************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {  
    // Show Host Lobby when Host button is clicked
    // hostButton.addEventListener('click', () => {
    //     gameModeMenu.style.display = 'none'; // Hide the main menu
    //     hostLobbyBody.style.display = 'block'; // Show the host lobby
    //     setupSeats(); // Generate the seats
    // });

    // joinButton.addEventListener('click', () => {
    //     gameModeMenu.style.display = 'none'; // Hide the menu
    //     joinGameMenu.style.display = 'block'; // Show the Join Game menu
    // });
    
    soloButton.addEventListener('click', () => {
        gameModeMenu.style.display = 'none'; // Hide the menu
        soloDrafterBody.style.display = 'block'; // Start solo draft
    });

    const backToMenuButton = document.getElementById('Back_To_Menu_Button');
    const soloDrafterBody = document.getElementById('Solo_Drafter_Body');
    const gameModeMenu = document.getElementById('Game_Mode_Menu');

    // Add event listener for Back Button
    backToMenuButton.addEventListener('click', () => {
        soloDrafterBody.style.display = 'none'; // Hide the solo drafter body
        gameModeMenu.style.display = 'block'; // Show the game mode menu
    });
    
});

// *******************************************************************************************************************************************************************************************//
// ********************************************************************************Multiplayer Functions**************************************************************************************//
// *******************************************************************************************************************************************************************************************//

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Host Lobby Stuff******************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Client Lobby Stuff****************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//


// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Multiplayer Draft Game************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//


// ************************************************************************************************************************************************************************************************************************************//
// **************************************************************************************************Solo Player***********************************************************************************************************************//
// ************************************************************************************************************************************************************************************************************************************//

//**********************************************Set Structure Details *************************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Select the Set_Selection dropdown
    const setSelectionDropdown = document.getElementById('Set_Selection');

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

    // Populate the dropdown with options
    sortedSets.forEach(setName => {
        const option = document.createElement('option');
        option.value = setName;
        option.textContent = setName;
        setSelectionDropdown.appendChild(option);
    });

    // Set "Quidditch World Cup" as the default selected option
    setSelectionDropdown.value = "The World Cup";

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

    // Step 4: Call a start round message
    // startRoundMessage();

    //Step 5: Hide the Set Selector
    document.getElementById("Set_Selector").style.display = "none";

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
    cardElement.className = "Card";
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
    const cost = card.cost || 0; // Default cost to 0 if undefined
    const poolIndex = cost >= 8 ? 8 : cost; // Pool 8 for cards with cost 8 or more
    const poolDiv = document.getElementById(`Solo_Card_Pool_${poolIndex}`);

    if (!poolDiv) {
        console.error(`Pool div for cost ${poolIndex} not found.`);
        return;
    }

    // Create the card element
    const cardElement = document.createElement("div");
    cardElement.classList.add("Card");
    cardElement.style.backgroundImage = card.imageFile
        ? `url('Quidditch World Cup/${card.imageFile}')`
        : "url('default-card-back.png')"; // Add a default image if missing
    cardElement.setAttribute("data-name", card.name);
    cardElement.setAttribute("data-cost", cost);
    cardElement.style.backgroundSize = "cover";
     // Add orientation attribute

     console.log(card.isHorizontal)
     if (card.isHorizontal) {
        cardElement.setAttribute("data-orientation", "horizontal");
    }

    // Append the card to the correct pool
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

    // Iterate through each player in soloPlayers
    Object.keys(soloPlayers).forEach((playerKey, index) => {
        const player = soloPlayers[playerKey];
        draftResults += `Player ${index + 1} Results:\n`;

        // // Add each pack
        // for (let j = 1; j <= 3; j++) {
        //     const packKey = `soloPack${j}`;
        //     draftResults += `Pack ${j}:\n`;

        //     const pack = player[packKey];
        //     if (pack && pack.length > 0) {
        //         pack.forEach(cardName => {
        //             draftResults += `  - ${cardName}\n`;
        //         });
        //     } else {
        //         draftResults += "  (No cards in this pack)\n";
        //     }
        // }

        // Add the card pool
        draftResults += `Card Pool:\n`;

        const pool = player.soloCurrentPool;
        if (pool && pool.length > 0) {
            pool.forEach(cardName => {
                draftResults += `  - ${cardName}\n`;
            });
        } else {
            draftResults += "  (No cards in the pool)\n";
        }

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

