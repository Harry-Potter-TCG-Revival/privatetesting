import { cards } from './cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const setDropdown = document.getElementById('Set_Selection');
    const setSelectorDiv = document.getElementById('Set_Selector');
    const startDraftButton = document.getElementById('Start_Draft_Button');
    const confirmPickButton = document.getElementById('Confirm_Pick_Button');
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

    // Populate the dropdown with unique set names
    const uniqueSets = [...new Set(cards.map(card => card.setName))];
    uniqueSets.forEach(setName => {
        const option = document.createElement('option');
        option.value = setName;
        option.textContent = setName;

        // Set "Goblet of Fire" as default
        if (setName === "Goblet of Fire") {
            option.selected = true;
        }

        setDropdown.appendChild(option);
    });

    const columnOrder = ["0", "1", "2", "3", "4", "5", "6", "7", "8+"];


    startDraftButton.addEventListener('click', startDraft);
    

    /*****************************************************************************************************************/
    /**************************************** Start Draft Set-up *****************************************************/
    /*****************************************************************************************************************/
    function startDraft() {
        selectedSet = setDropdown.value;
        if (!selectedSet) {
            alert('Please select a set before starting the draft.');
            return;
        }
    
        // Filter cards by the selected set
        filteredCards = cards.filter(card => card.setName === selectedSet);
    
        // Generate packs for all players
        generatePacks();
    
        // Log the generated packs to the console
        console.log("Generated Packs:");
        playerPacks.forEach((packs, playerIndex) => {
            console.log(`Player ${playerIndex + 1}:`);
            packs.forEach((pack, packIndex) => {
                console.log(`  Pack ${packIndex + 1}:`, pack.map(card => card.name));
            });
        });
    
        // Load Pack 1 for all players into their current packs
        activePacks.length = 0; // Clear any existing packs
        playerPacks.forEach((packs, playerIndex) => {
            activePacks.push(packs[0]); // Load Pack 1
            currentPackIndex[playerIndex] = 1; // Mark Pack 1 as opened
        });
    
        console.log("Draft begins with Pack 1 opened for all players.");
    
        // Set up the first pack for the main player
        currentPack = activePacks[0]; // Player 1's first pack
        displayPack();
    
        // Hide the set selector and disable the Start Draft button
        setSelectorDiv.style.display = 'none';
        startDraftButton.style.display = 'none';
        
    }
    
    /**************************************** Generate Packs *****************************************************/
    function generatePacks() {
        const commons = filteredCards.filter(card => card.rarity === "Common");
        const uncommons = filteredCards.filter(card => card.rarity === "Uncommon");
        const rares = filteredCards.filter(card =>
            ["Holo Portrait Premium", "Rare", "Foil Premium"].includes(card.rarity)
        );
    
        playerPacks.length = 0; // Clear any existing packs
    
        for (let i = 0; i < 8; i++) { // 8 players
            const player = [];
            for (let j = 0; j < 3; j++) { // 3 packs per player
                const pack = [];
                pack.push(pickCard(rares)); // 1 rare
                for (let k = 0; k < 3; k++) pack.push(pickCard(uncommons)); // 3 uncommons
                for (let k = 0; k < 7; k++) pack.push(pickCard(commons)); // 7 commons
                player.push(pack);
            }
            playerPacks.push(player);
        }
    }

    function pickCard(pool) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        return pool[randomIndex];
    }

    /*****************************************************************************************************************/
    /**************************************** Drafting Actions** *****************************************************/
    /*****************************************************************************************************************/
    
    /**************************************** Confirm Pick Button *****************************************************/
    function confirmPick() {
        if (selectedCardIndex === null) {
            alert("You must select a card.");
            return;
        }
    
        // Human player (Player 1) picks a card
        const selectedCard = currentPack.splice(selectedCardIndex, 1)[0];
        playerPools[0].push(selectedCard); // Add to Player 1's pool
        updatePool();
    
        // Simulate AI players picking cards
        for (let i = 1; i < 8; i++) { // Players 2 to 8
            const aiPickIndex = Math.floor(Math.random() * activePacks[i].length); // AI picks a random card
            const aiPickedCard = activePacks[i].splice(aiPickIndex, 1)[0];
            playerPools[i].push(aiPickedCard); // Add to respective AI player's pool
        }
    
        // Check if the current pack is finished
        if (currentPack.length === 0) { // No cards left in the pack
            finishPack();
        } else {
            // Pass packs to the next player and display the next pack
            passPacks();
            currentPack = activePacks[0];
            displayPack();
        }
    }
    
    /**************************************** Finish Pack *****************************************************/
    function finishPack() {
        const currentPackNum = currentPackIndex[0]; // All players are on the same pack number
    
        if (currentPackNum < 3) { // If not the last pack
            console.log(`Pack ${currentPackNum} finished. Loading Pack ${currentPackNum + 1}.`);
    
            // Load the next pack for all players
            activePacks.length = 0; // Clear current active packs
            playerPacks.forEach((packs, playerIndex) => {
                const nextPack = packs[currentPackNum]; // Load the next pack
                activePacks.push(nextPack);
                currentPackIndex[playerIndex]++; // Increment pack number
            });
    
            // Set up the next pack for the main player
            currentPack = activePacks[0]; // Player 1's next pack
            displayPack();
        } else {
            console.log("All packs drafted. Ending the draft.");
            endDraft();
        }
    }
    
    /**************************************** End Draft *****************************************************/
    function endDraft() {
        const packCardsDiv = document.getElementById('Your_Pack');
        const poolCardsDiv = document.getElementById('Your_Pool');
    
        // Hide the current pack display
        packCardsDiv.style.display = 'none';
    
        // Show only the card pool
        poolCardsDiv.style.display = 'block';
    
        draftEnded = true; // Mark the draft as ended
    
        console.log("Draft complete! Final player pools:");
        playerPools.forEach((pool, index) => {
            console.log(`Player ${index + 1} Pool:`, pool.map(card => card.name));
        });
    }
    
    /**************************************** Pass Pack *****************************************************/
    function passPacks() {
        const lastPack = activePacks.pop(); // Remove Player 8's pack
        activePacks.unshift(lastPack); // Pass it to Player 1
    }


    /**************************************** Display Pack Contents *****************************************************/
    function displayPack() {
        packCardsDiv.innerHTML = '';
        selectedCardIndex = null; // Reset selected card    
    
        currentPack.forEach((card, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
    
            const cardImage = document.createElement('img');
            cardImage.src = `cardimages/${card.imgSrc}`;
            cardImage.alt = card.name;
            
            // Add hover effect for bringing the card to the top and rotating if horizontal
            cardImage.addEventListener('mouseenter', () => {
                cardDiv.style.zIndex = 1000; // Bring card to the top
                if (card.horizontal) {
                    cardImage.style.transform = 'rotate(90deg)'; // Rotate the card
                }
                cardImage.style.transition = 'transform 0.2s'; // Smooth rotation
            });

            cardImage.addEventListener('mouseleave', () => {
                cardDiv.style.zIndex = index + 1; // Restore original stacking
                cardImage.style.transform = 'none'; // Reset rotation
            });

            cardImage.onerror = () => {
                cardImage.src = 'Images/default.png'; // Fallback image
            };
    
            // Handle card selection and activate confirmPick
            cardImage.addEventListener('click', () => {
                selectedCardIndex = index; // Set the selected card index
                confirmPick(); // Trigger the confirm pick action
            });
    
            cardDiv.appendChild(cardImage);
            packCardsDiv.appendChild(cardDiv);
        });
    }
    
    /**************************************** Update Card Pool *****************************************************/
    function updatePool() {
        poolCardsDiv.innerHTML = ''; // Clear the pool area
    
        // Organize cards into columns by cost
        const columns = {
            "No Cost": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8+": []
        };
    
        playerPools[0].forEach(card => {
            const cost = card.cost || 0; // Assume 0 if no cost is defined
            if (cost >= 8) {
                columns["8+"].push(card);
            } else if (cost === 0) {
                columns["No Cost"].push(card);
            } else {
                columns[cost].push(card);
            }
        });
    
        // Create columns in the desired order
        const columnOrder = ["No Cost", "1", "2", "3", "4", "5", "6", "7", "8+"];
        columnOrder.forEach(costGroup => {
            const cards = columns[costGroup];
            if (cards.length === 0) return; // Skip empty columns
    
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('card-column');
            columnDiv.setAttribute('data-cost', costGroup); // For debugging or styling purposes
    
            // Add a label for the column
            const columnLabel = document.createElement('div');
            columnLabel.textContent =
                costGroup === "noCost" ? "No Cost" : (costGroup === "6Plus" ? "6+" : costGroup);
            columnLabel.classList.add('column-label');
            columnDiv.appendChild(columnLabel);
    
            // Add cards to the column (reverse the order for proper stacking)
            cards.reverse().forEach((card, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card-stack');
                cardDiv.style.zIndex = index + 1; // Higher cards are on top
                cardDiv.style.position = 'absolute';
                cardDiv.style.top = `${index * 50}px`; // Base offset + stacking offset
    
                const cardImage = document.createElement('img');
                cardImage.src = `cardimages/${card.imgSrc}`;
                cardImage.alt = card.name;
                cardImage.onerror = () => {
                    cardImage.src = 'Images/default.png'; // Fallback image
                };
               
                // Add hover effect for bringing the card to the top and rotating if horizontal
                cardDiv.addEventListener('mouseenter', () => {
                    cardDiv.style.zIndex = 1000; // Bring card to the top
                    if (card.horizontal) {
                        cardImage.style.transform = 'rotate(90deg)'; // Rotate the card
                    }
                    cardImage.style.transition = 'transform 0.2s'; // Smooth rotation
                });
    
                cardDiv.addEventListener('mouseleave', () => {
                    cardDiv.style.zIndex = index + 1; // Restore original stacking
                    cardImage.style.transform = 'none'; // Reset rotation
                });
    
                cardDiv.appendChild(cardImage);
                columnDiv.appendChild(cardDiv);
            });
    
            // Ensure the parent column is positioned correctly and sized dynamically
            columnDiv.style.position = 'relative'; // Ensure the parent is positioned
            columnDiv.style.height = `${cards.length * 50 + 300}px`; // Calculate height based on card count
    
            poolCardsDiv.appendChild(columnDiv); // Add the column to the pool area
        });
    }
});
