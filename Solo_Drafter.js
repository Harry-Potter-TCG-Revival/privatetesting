import { cards } from './cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const setDropdown = document.getElementById('Set_Selection');
    const setSelectorDiv = document.getElementById('Set_Selector');
    const startDraftButton = document.getElementById('Start_Draft_Button');
    const packCardsDiv = document.getElementById('Pack_Cards');
    const poolCardsDiv = document.getElementById('Pool_Cards');

    const playerPacks = []; // Holds all generated packs for each player
    const currentPackIndex = Array.from({ length: 8 }, () => 0); // Tracks which pack each player is on

    const activePacks = []; // Current pack for each player
    const playerPools = Array.from({ length: 8 }, () => []); // Pools for each player (Player 1 to Player 😎

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

    // Check for saved draft state
    const savedDraft = localStorage.getItem('draftState');
    if (savedDraft) {
        const continueDraft = confirm("A draft is already in progress. Would you like to continue or start a new draft?");
        if (continueDraft) {
            loadDraftState();
            return;
        } else {
            clearDraftState();
        }
    }

    // Rest of the setup code...
    startDraftButton.addEventListener('click', startDraft);
    
    function saveDraftState() {
        const draftState = {
            playerPools: playerPools.map(pool => [...pool]), // Deep copy to avoid reference issues
            activePacks: [...activePacks], // Copy current active packs
            playerPacks: playerPacks.map(packs => packs.map(pack => [...pack])), // Deep copy nested arrays
            currentPackIndex: [...currentPackIndex],
            selectedSet,
            filteredCards: [...filteredCards],
            currentPack: [...currentPack], // Copy current pack
            draftEnded,
        };
        localStorage.setItem('draftState', JSON.stringify(draftState));
        console.log("Draft state saved.");
    }
    
    function loadDraftState() {
        const savedState = JSON.parse(localStorage.getItem('draftState'));
        if (!savedState) {
            alert("No saved draft found.");
            return;
        }
    
        try {
            // Restore draft state variables
            playerPools.length = 0;
            playerPools.push(...(savedState.playerPools || []).map(pool => Array.isArray(pool) ? [...pool] : []));
    
            activePacks.length = 0;
            activePacks.push(...savedState.activePacks); // Restore active packs
    
            playerPacks.length = 0;
            playerPacks.push(...savedState.playerPacks.map(packs => packs.map(pack => [...pack]))); // Deep copy restored packs
    
            currentPackIndex.length = 0;
            currentPackIndex.push(...savedState.currentPackIndex);
    
            selectedSet = savedState.selectedSet;
            filteredCards = [...savedState.filteredCards];
            currentPack = [...savedState.currentPack];
            draftEnded = savedState.draftEnded;
    
            // Restore UI elements
            if (draftEnded) {
                endDraft(); // Restore the end state of the draft
            } else {
                // Check if the current pack is finished and load the next pack if necessary
                if (currentPack.length === 0) {
                    finishPack(); // Load the next pack
                } else {
                    displayPack(); // Display the current pack
                }
    
                setSelectorDiv.style.display = 'none';
                startDraftButton.style.display = 'none';
            }
    
            // Refresh the player's card pool display
            updatePool();
    
            console.log("Draft state loaded successfully.");
        } catch (error) {
            console.error("Error loading draft state:", error);
            clearDraftState(); // Clear corrupted state
        }
    }
    
    function clearDraftState() {
        localStorage.removeItem('draftState');
        playerPools.length = 0;
        activePacks.length = 0;
        playerPacks.length = 0;
        currentPackIndex.length = 0;
        selectedSet = null;
        filteredCards = [];
        currentPack = [];
        draftEnded = false;
        console.log("Draft state cleared.");
    }
    

    // Hook saveDraftState into relevant events
    window.addEventListener('beforeunload', saveDraftState);


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
        
        // Load Pack 1 for all players into their current packs
        activePacks.length = 0; // Clear any existing packs
        playerPacks.forEach((packs, playerIndex) => {
            activePacks.push(packs[0]); // Load Pack 1
            currentPackIndex[playerIndex] = 1; // Mark Pack 1 as opened
        });
    
        // console.log("Draft begins with Pack 1 opened for all players.");
    
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
    
        // Ensure playerPools[0] exists
        if (!playerPools[0]) {
            console.warn("Player 1 pool not initialized. Initializing now.");
            playerPools[0] = [];
        }
    
        // Human player (Player 1) picks a card
        const selectedCard = currentPack.splice(selectedCardIndex, 1)[0];
        playerPools[0].push(selectedCard); // Add to Player 1's pool
        const humanScore = getCardScore(selectedCard, playerPools[0], playerPools[0].length, 3 * 15); // Pass required parameters
        updatePool();
    
        // Save state after the pick
        saveDraftState();
    
        // Simulate AI players picking cards
        for (let i = 1; i < 8; i++) { // Players 2 to 8
            if (!playerPools[i]) playerPools[i] = []; // Ensure each AI pool exists
            const aiPickIndex = getAIPickIndex(activePacks[i], playerPools[i]);
            const aiPickedCard = activePacks[i].splice(aiPickIndex, 1)[0];
            const aiCardScore = getCardScore(aiPickedCard, playerPools[i], playerPools[i].length, 3 * 15); // Pass required parameters
            playerPools[i].push(aiPickedCard); // Add to respective AI player's pool
        }
    
        // Save state after AI picks
        saveDraftState();
    
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
    
    
    // Function to determine the AI's pick index based on card scores
    function getAIPickIndex(pack, aiPool) {
        const totalCardsToDraft = 3 * 15; // Total cards for the draft (3 packs × 15 cards per pack)
        const cardsDraftedSoFar = aiPool.length; // Cards drafted so far
    
        const scoredCards = pack.map(card => ({
            card,
            score: getCardScore(card, aiPool, cardsDraftedSoFar, totalCardsToDraft)
        }));
    
        // Find the highest score(s)
        const maxScore = Math.max(...scoredCards.map(entry => entry.score));
        const highestScoringCards = scoredCards.filter(entry => entry.score === maxScore);
    
        // Pick a random card among the highest-scoring cards
        const randomIndex = Math.floor(Math.random() * highestScoringCards.length);
        return pack.indexOf(highestScoringCards[randomIndex].card);
    }
    
    // Function to calculate the score of a card
    function getCardScore(card, pool, cardsDraftedSoFar, totalCardsToDraft) {
        // Start with a base score of 5
        let score = 5;
    
        // Add lesson synergy adjustment
        score += Card_Pool_Lesson_Synergy(card, pool, cardsDraftedSoFar, totalCardsToDraft);
    
        return score;
    }
    
    // Function to calculate lesson synergy adjustment
    function Card_Pool_Lesson_Synergy(card, pool, cardsDraftedSoFar, totalCardsToDraft) {
        // Calculate normalized progress of the draft (x)
        const progress = cardsDraftedSoFar / totalCardsToDraft;
    
        // Non-linear weight: Logistic function
        const k = 10; // Higher growth rate for faster acceleration
        const c = 0.25; // Earlier midpoint for quicker plateau
        const weight = 5 * (1 / (1 + Math.exp(-k * (progress - c))));
    
        // If the card has no lesson, give it a full value
        if (!card.lesson || card.lesson.length === 0) {
            console.log(`Card without lesson: ${card.name}, Weight: ${weight.toFixed(2)}`);
            return weight;
        }
    
        // Count the number of cards in the pool that have lessons
        const lessonCounts = {};
        let totalLessonCards = 0; // Count of cards in the pool with lessons
        pool.forEach(poolCard => {
            if (poolCard.lesson && poolCard.lesson.length > 0) {
                totalLessonCards++;
                poolCard.lesson.forEach(lesson => {
                    lessonCounts[lesson] = (lessonCounts[lesson] || 0) + 1;
                });
            }
        });
    
        // If no lesson cards are in the pool, return 0 adjustment
        if (totalLessonCards === 0) return 0;
    
        // Calculate lesson percentage for the card's lessons
        const cardLessonPercentage = card.lesson.reduce((sum, lesson) => {
            return sum + (lessonCounts[lesson] || 0) / totalLessonCards;
        }, 0) / card.lesson.length;
    
        // Log for debugging
        console.log(`Card: ${card.name}, Lessons: ${card.lesson}, Weight: ${weight.toFixed(2)}, Lesson Percentage: ${cardLessonPercentage.toFixed(2)}`);
    
        // Return the score adjustment
        return weight * cardLessonPercentage;
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
    
        // Create a download button
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download Player Pools';
        downloadButton.style.marginTop = '20px';
        downloadButton.addEventListener('click', () => {
            const poolsContent = generateDownloadablePools();
            const blob = new Blob([poolsContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'player_pools.txt'; // Save as .txt file
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    
        // Add the button to the poolCardsDiv
        poolCardsDiv.appendChild(downloadButton);
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
    
        if (!currentPack || !Array.isArray(currentPack)) {
            console.error("Current pack is not defined or not an array:", currentPack);
            return;
        }
    
        currentPack.forEach((card, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
    
            const cardImage = document.createElement('img');
            cardImage.src = `cardimages/${card.imgSrc}`;
            cardImage.alt = card.name;
    
            // Handle hover effects
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
    
            // Handle card selection
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

    function generateDownloadablePools() {
        // Structure pools in decklist format
        let textContent = "Draft Results - Player Card Pools\n\n";
    
        playerPools.forEach((pool, index) => {
            textContent += `//deck-${index + 1}\n`;
    
            if (pool.length === 0) {
                textContent += "No cards selected.\n\n";
            } else {
                // Count the occurrences of each card
                const cardCounts = pool.reduce((counts, card) => {
                    counts[card.name] = (counts[card.name] || 0) + 1;
                    return counts;
                }, {});
    
                // Format as "count card name"
                Object.entries(cardCounts).forEach(([cardName, count]) => {
                    textContent += `${count} ${cardName}\n`;
                });
    
                textContent += "\n"; // Separate each player's deck
            }
        });
    
        return textContent;
    }  
    
});
