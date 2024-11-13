import { cards } from './cards.js';

// Global variables for cards
let allCards = [];
let filteredCards = [];
let pageNumber = 1;
let totalPages = 1;
let container;
let lookingForStarter = 0;
let MainSide = 0;


//*************************************************************************************************************************************//
//********************************************************* Function Definitions ******************************************************//
//*************************************************************************************************************************************//


//*************************************************************************************************************************************//
//********************************************************* Filter Functions ******************************************************//
//*************************************************************************************************************************************//

    //************************ Function to display a page of cards************************//

    function displayPage(pageNumber, filteredCards, container) 
    {
        container.innerHTML = ''; // Clear existing cards
        const startIndex = (pageNumber - 1) * 8;
        const endIndex = startIndex + 8;
        for (let i = startIndex; i < endIndex && i < filteredCards.length; i++) {
            createCardButton(filteredCards[i], container);
        }
    }
    
   //******************** Function to filter cards by selected lesson types****************//
   function filterCardsByLessonType() 
   {
    const selectedLessonTypes = [];
    document.querySelectorAll('.lesson-dropdown .dropdown-item input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            const lessonType = checkbox.nextElementSibling.nextElementSibling.textContent.trim();
            selectedLessonTypes.push(lessonType);
        }
    });

    return selectedLessonTypes;
    }

    //******************** Function to filter cards by selected card types****************//
    function filterCardsByCardType() {
    const selectedCardTypes = [];
    document.querySelectorAll('.card-dropdown .dropdown-item input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            let cardTypeElement = checkbox.nextElementSibling;

            // Check if the next sibling is an image, if so, move to the next sibling (the span)
            if (cardTypeElement && cardTypeElement.tagName === 'IMG') {
                cardTypeElement = cardTypeElement.nextElementSibling;
            }

            const cardType = cardTypeElement.textContent.trim();
            selectedCardTypes.push(cardType);
        }
    });
    return selectedCardTypes;
    }

    //******************** Function to filter cards by both lesson types and card types****************//
    function filterCards() 
    {
        const selectedLessonTypes = filterCardsByLessonType();
        const selectedCardTypes = filterCardsByCardType();

        filteredCards = allCards.filter(card => {
            // Check lesson type filter
            const lessonMatch = selectedLessonTypes.length === 0 || (card.lesson && card.lesson.some(lesson => selectedLessonTypes.includes(lesson)));
            
            // Check card type filter
            const cardTypeMatch = selectedCardTypes.length === 0 || (card.type && card.type.some(type => selectedCardTypes.includes(type)));

            // Return true only if both filters match
            return lessonMatch && cardTypeMatch;
        });

        //*************** Reset to page 1, sort this new card list and display the new filtered cards****************//
        pageNumber = 1;

        // Get the current sort option from the dropdown
        const currentSortOption = document.getElementById('Deck_Builder_Body_Search_Filter_Sort_Option').value;

        // Map the sort option value to the corresponding sort attribute
        let sortAttribute;
        switch (currentSortOption) {
            case 'option1':
                sortAttribute = 'Set';
                break;
            case 'option2':
                sortAttribute = 'Card Type';
                break;
            case 'option3':
                sortAttribute = 'Lesson Type';
                break;
            case 'option4':
                sortAttribute = 'Mana Cost';
                break;
            default:
                sortAttribute = 'Set'; // Default sorting by 'Set'
        }

        // Sort the filtered cards based on the current sort attribute
        sortFilteredCards(sortAttribute);
        displayPage(pageNumber, filteredCards, container);
        updatePageNumber(pageNumber);
    }

    //********************* Function to sort filtered cards by a given attribute ****************//
    function sortFilteredCards(sortAttribute) 
    {
    filteredCards.sort((a, b) => {
        switch (sortAttribute) {
            case 'Set':
                return a.setName.localeCompare(b.setName); // Sort alphabetically by set name
            case 'Card Type':
                return a.type[0].localeCompare(b.type[0]); // Sort alphabetically by card type (assuming type is an array)
            case 'Lesson Type':
                // Sort alphabetically by the first mana type (if any), place cards with no mana type at the end
                const manaA = a.lesson ? a.lesson[0] : 'ZZZZ'; // 'ZZZZ' to sort cards with no mana at the end
                const manaB = b.lesson ? b.lesson[0] : 'ZZZZ';
                return manaA.localeCompare(manaB);
            case 'Mana Cost':
                // Sort numerically by mana cost, place cards with no mana cost at the end
                const costA = a.cost ? parseInt(a.cost, 10) : Number.MAX_VALUE;
                const costB = b.cost ? parseInt(b.cost, 10) : Number.MAX_VALUE;
                return costA - costB;
            default:
                return 0; // Default case (no sorting)
        }
    });

    // After sorting, reset to page 1 and re-display the sorted cards
    pageNumber = 1;
    displayPage(pageNumber, filteredCards, container);
    updatePageNumber(pageNumber);
    }

//*************************************************************************************************************************************//
//********************************************************* Creation Functions ******************************************************//
//*************************************************************************************************************************************//

    //********************* Update the createCardButton function to include hover ****************//
    function createCardButton(card, container) {
        const button = document.createElement("button");
        button.classList.add("Display_Card_Button");
    
        // Set card properties as data attributes for background storage
        button.setAttribute('data-card-name', card.name);       // Store card name
        button.setAttribute('data-card-type', card.type);       // Store card type
        button.setAttribute('data-mana-cost', card.cost || ''); // Store mana cost (if applicable)
        button.setAttribute('data-mana-type', card.lesson || ''); // Store mana type (if applicable)
        button.setAttribute('data-img-src', card.imgSrc);       // Store image source
    
        const img = document.createElement("img");
        img.src = `./cardimages/${card.imgSrc.replace(/[_-]/, '')}`; // Set image source
        button.appendChild(img);
    
        container.appendChild(button);
    
        // Event listener for adding card to deck
        button.addEventListener('click', function() {
            handleCardClick(card);
        });
    
        // Hover effect for larger image preview
        //handleCardHover(button, card.imgSrc, card.horizontal);
    }
    
    // **************************Function to create a new card type element and insert in deck*******************************//
    function createCardTypeElement(card, deckList) 
    {
        let cardTypeElement = document.createElement('div');
        cardTypeElement.classList.add('deck-card-type');
        cardTypeElement.dataset.type = card.type;

        const typeHeading = document.createElement('h3');
        typeHeading.textContent = card.type;
        cardTypeElement.appendChild(typeHeading);

        insertCardTypeElementInOrder(deckList, cardTypeElement, card.type);

        return cardTypeElement;
    }

    //********************* Helper Function to create a new card element****************//
    function createCardElement(card) 
    {
        let cardElement = document.createElement('div');
        cardElement.classList.add('deck-card');
        cardElement.dataset.name = card.name;

        const cardCountElement = document.createElement('span');
        cardCountElement.classList.add('card-count');
        cardCountElement.textContent = '1';

        const cardNameElement = document.createElement('span');
        cardNameElement.classList.add('card-name');
        cardNameElement.textContent = card.name;

        const cardPowerCostElement = document.createElement('span');
        cardPowerCostElement.classList.add('card-power-cost');
        cardPowerCostElement.textContent = card.powerCost || '';

        const cardLessonImageElement = document.createElement('img');
        cardLessonImageElement.classList.add('card-lesson-img');
        cardLessonImageElement.src = card.lessonType && lessonTypeImages[card.lessonType] ? lessonTypeImages[card.lessonType] : '';

        const cardSetSymbolElement = document.createElement('img');
        cardSetSymbolElement.classList.add('card-set-symbol');
        cardSetSymbolElement.src = card.set && setImages[card.set] ? setImages[card.set] : '';

        // Append all elements to the card
        cardElement.appendChild(cardCountElement);
        cardElement.appendChild(cardNameElement);
        cardElement.appendChild(cardPowerCostElement);
        cardElement.appendChild(cardLessonImageElement);
        cardElement.appendChild(cardSetSymbolElement);

        return cardElement;
    }

    // Function to create a new starter card element
    function createStarterElement(card) 
    {
        // Create the main card element
        let starterElement = document.createElement('div');
        starterElement.classList.add('starter-card'); // Differentiate starter with a new class
        starterElement.dataset.name = card.name; // Store card name in a data attribute

        // Create a span for the card's name
        const cardNameElement = document.createElement('span');
        cardNameElement.classList.add('card-name');
        cardNameElement.textContent = card.name;

        // Create an element for the card's power cost (if applicable)
        const cardPowerCostElement = document.createElement('span');
        cardPowerCostElement.classList.add('card-power-cost');
        cardPowerCostElement.textContent = card.powerCost || '';

        // Create an image element for the lesson type
        const cardLessonImageElement = document.createElement('img');
        cardLessonImageElement.classList.add('card-lesson-img');
        cardLessonImageElement.src = card.lessonType && lessonTypeImages[card.lessonType] ? lessonTypeImages[card.lessonType] : '';

        // Create an image element for the set symbol
        const cardSetSymbolElement = document.createElement('img');
        cardSetSymbolElement.classList.add('card-set-symbol');
        cardSetSymbolElement.src = card.set && setImages[card.set] ? setImages[card.set] : '';

        // Append the elements to the starter card element
        starterElement.appendChild(cardNameElement);
        starterElement.appendChild(cardPowerCostElement);
        starterElement.appendChild(cardLessonImageElement);
        starterElement.appendChild(cardSetSymbolElement);

        return starterElement;
    }

//*************************************************************************************************************************************//
//********************************************************* Clicking Functions ******************************************************//
//*************************************************************************************************************************************//

    //********************* Display Card Clicking Funtion****************//
   // Function to handle normal card click or starter card click
   function handleCardClick(card) {
    // Check if we are selecting a starter
    if (lookingForStarter === 1) {
        const starterElementHolder = document.getElementById('Starter_Element_Holder');

        // Prevent adding more than one starter
        if (starterElementHolder.querySelector('.starter-card')) {
            console.log("A starter has already been selected.");
            return; // Exit without adding the new starter
        }

        // Call function to add the starter
        addStarterToDeck(card);
    } else {
        // Determine the current deck based on MainSide
        const deckCountElement = MainSide === 0 
            ? document.getElementById('Deck_Card_Count')      // Mainboard count display
            : document.getElementById('Side_Deck_Card_Count'); // Sideboard count display

        // Parse the current and max count values
        let [currentCount, maxCount] = deckCountElement.textContent.split('/').map(Number);

        // Mainboard deck limit check with starter condition
        if (MainSide === 0) {
            const starterSelected = document.querySelector('#Starter_Element_Holder .starter-card') !== null;
            const maxMainDeck = starterSelected ? 61 : 60;

            if (currentCount >= maxMainDeck) {
                console.log("Cannot add more cards to the main deck. Limit reached.");
                return;
            }
        } else {
            // Sideboard limit check
            if (currentCount >= 15) {
                console.log("Cannot add more cards to the sideboard. Limit reached.");
                return;
            }
        }

        // Proceed to add the card if the deck limit is not exceeded
        addCardToDeck(card);
    }
    }

    // Function to get the appropriate container based on MainSide (0 = Main Deck, 1 = Sideboard)
    function getDeckContainer() {
        return MainSide === 0 
            ? document.getElementById("Deck_Builder_Deck_List_Frame_Body_Cards")
            : document.getElementById("Deck_Builder_Deck_List_Frame_Body_Sideboard_Cards");
    }

    // Function to add a card to the deck or sideboard container
    function addCardToDeck(card) {
        const container = getDeckContainer();

        // Ensure there is a container for the card type, or create one
        let cardTypeElement = container.querySelector(`.deck-card-type[data-type="${card.type}"]`);
        if (!cardTypeElement) {
            cardTypeElement = createCardTypeElement(card, container);
        }

        // Check if the card already exists in this container
        let cardElement = cardTypeElement.querySelector(`.deck-card[data-name="${card.name}"]`);
        let cardCount = cardElement ? parseInt(cardElement.querySelector('.card-count').textContent) : 0;

        // Handle lesson and non-lesson cards: only limit non-lesson cards to 4 
        console.log(card.tye);
        if (card.type && (card.type.includes('Lesson') || cardCount < 4)) {
            if (!cardElement) {
                // Create a new card element and append it
                cardElement = createCardElement(card);
                cardTypeElement.appendChild(cardElement);
            } else {
                // Increment count if the card already exists
                incrementCardCount(cardElement);
            }

            // Only add an event listener once
            if (!cardElement.getAttribute('data-listener-added')) {
                cardElement.addEventListener('click', function() {
                    handleCardRemove(cardElement, cardTypeElement);
                });
                cardElement.setAttribute('data-listener-added', 'true');
            }

            // Update the deck card count based on the current deck (Main or Sideboard)
            const deckCardCountElement = MainSide === 0 
                ? document.getElementById('Deck_Card_Count')
                : document.getElementById('Side_Deck_Card_Count');

            let [currentCount, maxCount] = deckCardCountElement.textContent.split('/').map(Number);

            // Increment the count in the display, up to the maximum
            if (currentCount < maxCount) {
                currentCount += 1;
                deckCardCountElement.textContent = `${currentCount}/${maxCount}`;
            }
        } else {
            console.log(`Cannot add more than 4 copies of ${card.name}`);
        }
    }

    
    // Function to add the selected card to the Starter section
    function addStarterToDeck(card) 
    {
        // Get the Starter div
        const starterDiv = document.getElementById('Starter_Element_Holder');

        // Add the selected card to the Starter div as a card element
        starterDiv.appendChild(createStarterElement(card)); // Assuming createCardElement builds the card HTML

        const deckCardCountElement = document.getElementById('Deck_Card_Count');
        let [currentCount, maxCount] = deckCardCountElement.textContent.split('/').map(Number);

        if (currentCount < maxCount) {
            currentCount += 1;
            deckCardCountElement.textContent = `${currentCount}/${maxCount}`;
        }

        // Reset the lookingForStarter variable
        lookingForStarter = 0;

        // Reset the filter back to the original state (or last used filter)
        filterCards(); // Assuming this resets to the last filtered state
    }

//*************************************************************************************************************************************//
//******************************************************* Housekeeping Functions ******************************************************//
//*************************************************************************************************************************************//

    // ************************************Function to increment card count*********************************//
    function incrementCardCount(cardElement) {
        const cardCountElement = cardElement.querySelector('.card-count');
        cardCountElement.textContent = parseInt(cardCountElement.textContent) + 1;
    }

    // Function to decrement card count
    function decrementCardCount(cardElement) 
    {
    const cardCountElement = cardElement.querySelector('.card-count');
    const currentCount = parseInt(cardCountElement.textContent);

    // Decrement the card count if it's greater than 0
    if (currentCount > 0) {
        cardCountElement.textContent = currentCount - 1;
    }
    }

    // ***************Function to insert card type in alphabetical order****************//
    function insertCardTypeElementInOrder(deckList, cardTypeElement, cardType) 
    {
        let inserted = false;
        const existingTypes = Array.from(deckList.querySelectorAll('.deck-card-type'));

        for (let i = 0; i < existingTypes.length; i++) {
            if (existingTypes[i].dataset.type.localeCompare(cardType) > 0) {
                deckList.insertBefore(cardTypeElement, existingTypes[i]);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            deckList.appendChild(cardTypeElement);
        }
    }

    //********************* Function to update the page number display****************//
    function updatePageNumber(pageNumber) 
    {
    const pageNumberDisplay = document.getElementById('Page_Number');
    totalPages = Math.ceil(filteredCards.length / 8);
    pageNumberDisplay.innerHTML = `<p>Page ${pageNumber}/${totalPages}</p>`;
    }

    // ********************* Function to handle card hover for showing large image in the center of the page, with rotation for sideways cards ****************//
    function handleCardHover(cardElement, cardImageSrc, isHorizontal) {
        const largeCardPreview = document.getElementById('largeCardPreview');
        const previewImage = largeCardPreview.querySelector('img');

        // On mouse enter, show the large card preview
        cardElement.addEventListener('mouseenter', function() {
            previewImage.src = `./cardimages/${cardImageSrc}`; // Set the large image source
            largeCardPreview.style.display = 'block'; // Show the preview

            // Rotate the image if the card is horizontal (sideways)
            if (isHorizontal) {
                previewImage.style.transform = 'rotate(90deg)'; // Rotate the image by 90 degrees
            } else {
                previewImage.style.transform = ''; // Reset rotation if the card is not sideways
            }
        });

        // On mouse move, follow the mouse while staying within the viewport
        cardElement.addEventListener('mousemove', function(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            const previewWidth = largeCardPreview.offsetWidth;
            const previewHeight = largeCardPreview.offsetHeight;

            // Adjust the horizontal position of the preview to follow the mouse
            let leftPosition = mouseX + 20; // 20px offset from the mouse
            if (leftPosition + previewWidth > windowWidth) {
                leftPosition = mouseX - previewWidth - 20; // Show it to the left if it exceeds viewport width
            }

            // Adjust the vertical position based on whether the mouse is in the top or bottom half of the screen
            let topPosition;
            if (mouseY < windowHeight / 2) {
                // Mouse in the top half: show the image below the mouse
                topPosition = mouseY;
            } else {
                // Mouse in the bottom half: show the image above the mouse
                topPosition = mouseY - previewHeight;
            }

            // Apply the calculated positions
            largeCardPreview.style.left = `${leftPosition}px`;
            largeCardPreview.style.top = `${topPosition}px`;
        });

        // On mouse leave, hide the large card preview
        cardElement.addEventListener('mouseleave', function() {
            largeCardPreview.style.display = 'none'; // Hide the preview
            previewImage.style.transform = ''; // Reset the transform (no rotation)
        });
    }

    function handleCardRemove(cardElement, cardTypeElement) {
        const cardCountElement = cardElement.querySelector('.card-count');
        let cardCount = parseInt(cardCountElement.textContent);
    
        // If there is more than one card, call the decrement function
        if (cardCount > 1) {
            decrementCardCount(cardElement); // Call the decrement function
        } else {
            // If there is only one card, remove the card element
            cardTypeElement.removeChild(cardElement);
    
            // If the card type container is empty after removing the card, remove the type container
            if (cardTypeElement.querySelectorAll('.deck-card').length === 0) {
                cardTypeElement.parentNode.removeChild(cardTypeElement);
            }
        }
    
        // Determine which counter to update based on MainSide
        const deckCardCountElement = MainSide === 0
            ? document.getElementById('Deck_Card_Count')      // Main deck count element
            : document.getElementById('Side_Deck_Card_Count'); // Sideboard count element
    
        // Parse current and maximum counts
        let [currentCount, maxCount] = deckCardCountElement.textContent.split('/').map(Number);
    
        // Decrease the total deck count for the appropriate deck
        if (currentCount > 0) {
            currentCount -= 1;
            deckCardCountElement.textContent = `${currentCount}/${maxCount}`;
        }
    }
    
    // Function to filter cards by "Witch" or "Wizard" subTypes and set lookingForStarter to 1
    function filterForStarter() 
    {
        lookingForStarter = 1; // Set global variable to indicate we are looking for a starter card

        // Filter the cards that have "Witch" or "Wizard" in subTypes
        filteredCards = allCards.filter(card => card.subTypes && (card.subTypes.includes('Witch') || card.subTypes.includes('Wizard')));

        // Display the filtered cards
        pageNumber = 1; // Reset to page 1
        displayPage(pageNumber, filteredCards, container);
        updatePageNumber(pageNumber);
    }

    // Function to toggle visibility based on the value of MainSide
    function toggleDeckTitle() {
        const mainDeckTitle = document.getElementById('Maindeck_Title');
        const sideDeckTitle = document.getElementById('Sidedeck_Title');

        if (MainSide === 0) {
            mainDeckTitle.style.display = 'block'; // Show Maindeck Title
            sideDeckTitle.style.display = 'none';  // Hide Sidedeck Title
        } else {
            mainDeckTitle.style.display = 'none';  // Hide Maindeck Title
            sideDeckTitle.style.display = 'block'; // Show Sidedeck Title
        }
    }

    function switchDeck() {
        MainSide = MainSide === 0 ? 1 : 0;
        toggleDeckTitle(); // Update visibility based on new MainSide value
    }

    // Function to validate deck before exporting
    function validateDeck() {
        const errors = [];

        // Check if a deck name is provided
        const deckName = document.getElementById('Deck_Name_Input').value.trim();
        if (!deckName) {
            errors.push("Please enter a deck name.");
        }

        // Check if a starter character has been selected
        const starterCard = document.querySelector('#Starter_Element_Holder .starter-card');
        if (!starterCard) {
            errors.push("Each deck must have a starting character.");
        }

        // Check if the main deck has exactly 60 cards
        const deckCardCountElement = document.getElementById('Deck_Card_Count');
        const [currentCount] = deckCardCountElement.textContent.split('/').map(Number);

        if (currentCount !== 61) {
            errors.push("Each deck must have exactly 60 cards.");
        }

        // Display errors if any requirements are not met
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }

        return true; // Return true if all validations pass
    }

    // Function to export the deck list to a .txt file
    function exportDeck() {
        // Validate deck before exporting
        if (!validateDeck()) return; // Exit if validation fails

        const deckName = document.getElementById('Deck_Name_Input').value.trim();

        // Get the deck list and starter character from the deck list container
        const deckCards = document.querySelectorAll('#Deck_Builder_Deck_List_Frame_Body_Cards .deck-card');
        const starterCard = document.querySelector('#Starter_Element_Holder .starter-card');

        // Prepare the content for the .txt file
        let fileContent = `//deck-1\n`;

        // Loop through the deck cards and format them
        deckCards.forEach(card => {
            const cardName = card.querySelector('.card-name').textContent;
            const cardCount = card.querySelector('.card-count').textContent;
            fileContent += `${cardCount} ${cardName}\n`;
        });

        fileContent += `\n//play-1\n`;

        // Add the starter character to the file
        const starterName = starterCard.querySelector('.card-name').textContent;
        fileContent += `1 ${starterName}\n`;

        // Create a .txt file and download it
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${deckName}.txt`;
        link.click();
    }   

//*************************************************************************************************************************************//
//*********************************************************** Event Listener Setup ****************************************************//
//*************************************************************************************************************************************//

    //****************************** */ Function to set up event listeners for page navigation****************//
    function setupPageNavigation() {
        document.getElementById('Next_Page_Button').addEventListener('click', function() {
            totalPages = Math.ceil(filteredCards.length / 8);
            if (pageNumber < totalPages) {
                pageNumber++;
                displayPage(pageNumber, filteredCards, container);
                updatePageNumber(pageNumber);
            } else {
                console.log("You are at the last page");
            }
        });

        document.getElementById('Previous_Page_Button').addEventListener('click', function() {
            if (pageNumber > 1) {
                pageNumber--;
                displayPage(pageNumber, filteredCards, container);
                updatePageNumber(pageNumber);
            } else {
                console.log("You are at the first page");
            }
        });
    }

   //*************************** Function to set up event listeners for both dropdown checkboxes****************//
   function setupCheckboxListeners() {
    document.querySelectorAll('.dropdown-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // If lookingForStarter is 1, prevent the checkbox interaction and filterCards call
            if (lookingForStarter === 1) {
                checkbox.checked = !checkbox.checked; // Prevent the checkbox from being checked/unchecked
                return; // Exit the function to ensure filterCards is not called
            }
            // Otherwise, allow normal behavior and call filterCards
            filterCards();
        });
    });
    }

    //************************* Event listener for sort option selection in Deck_Builder_Body_Search_Filter_Sort_Option *************************//
    document.getElementById('Deck_Builder_Body_Search_Filter_Sort_Option').addEventListener('change', function() {
        const selectedValue = this.value;

        // Map the selected dropdown option value to the actual attribute
        let sortAttribute;
        switch (selectedValue) {
            case 'option1':
                sortAttribute = 'Set';
                break;
            case 'option2':
                sortAttribute = 'Card Type';
                break;
            case 'option3':
                sortAttribute = 'Lesson Type';
                break;
            case 'option4': // Make sure the fourth option's value is 'option4'
                sortAttribute = 'Mana Cost';
                break;
            default:
                sortAttribute = 'Set'; // Default sorting by 'Set'
        }

        // Call the sort function with the selected attribute
        sortFilteredCards(sortAttribute);
    });

   // Event listener to handle starter selection
    document.getElementById('Deck_Builder_Deck_List_Frame_Body_Starter').addEventListener('click', function() {
    const starterElementHolder = document.getElementById('Starter_Element_Holder');

    // Check if there is already a starter in place
    if (starterElementHolder.firstChild) {
        // If a starter exists, decrement the deck count
        const deckCardCountElement = document.getElementById('Deck_Card_Count');
        let [currentCount, maxCount] = deckCardCountElement.textContent.split('/').map(Number);

        if (currentCount > 0) {
            currentCount -= 1;
            deckCardCountElement.textContent = `${currentCount}/${maxCount}`;
        }

        // Remove any objects inside the Starter_Element_Holder
        while (starterElementHolder.firstChild) {
            starterElementHolder.removeChild(starterElementHolder.firstChild); // Clear the starter element holder
        }
    }

    // Set lookingForStarter to 1 and call filterForStarter
    lookingForStarter = 1;
    filterForStarter();
    });

    // Event listener to export the deck list
    document.getElementById('Save_Deck_Button').addEventListener('click', exportDeck);

    document.getElementById('Deck_Builder_Body_Display_Deck_Cards_Button').addEventListener('click', function() {
        // Get the deck cards and starter character
        const deckCards = Array.from(document.querySelectorAll('#Deck_Builder_Deck_List_Frame_Body_Cards .deck-card')).map(card => {
            const cardName = card.querySelector('.card-name').textContent;
            const cardCount = parseInt(card.querySelector('.card-count').textContent);
            return { name: cardName, count: cardCount };
        });
    
        const starterCard = document.querySelector('#Starter_Element_Holder .deck-card');
        const starterName = starterCard ? starterCard.querySelector('.card-name').textContent : null;
    
        // Get the base URL (in this case, the URL of the current page)
        const baseURL = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/';
    
        // Create a new tab
        const newTab = window.open();
    
        // Prepare minimal HTML content with the base tag
        const tabContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Deck Display</title>
            <base href="${baseURL}">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .deck-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 10px;
                }
                .deck-card img {
                    width: 100%;
                    height: auto;
                }
                .starter-row {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Deck Display</h1>
            <div id="deck-container"></div>
            <script type="module">
                import { cards } from './cards.js';
                
                const deckCards = ${JSON.stringify(deckCards)};
                const starterName = ${JSON.stringify(starterName)};
    
                // Function to create card element with correct image path
                function createCardElement(cardName, imgSrc) {
                    const cardElement = document.createElement('div');
                    cardElement.classList.add('deck-card');
                    const img = document.createElement('img');
                    img.src = './cardimages/' + imgSrc;  // Prepend the correct image path
                    img.alt = cardName;
                    cardElement.appendChild(img);
                    return cardElement;
                }
    
                // Get the deck container
                const deckContainer = document.getElementById('deck-container');
    
                // Display starter card if available
                if (starterName) {
                    const starterCard = cards.find(c => c.name === starterName);
                    if (starterCard) {
                        const starterDiv = document.createElement('div');
                        starterDiv.classList.add('starter-row');
                        const starterCardElement = createCardElement(starterName, starterCard.imgSrc);
                        starterDiv.appendChild(starterCardElement);
                        deckContainer.appendChild(starterDiv);
                    }
                }
    
                // Display deck cards
                const deckGrid = document.createElement('div');
                deckGrid.classList.add('deck-grid');
                
                deckCards.forEach(deckCard => {
                    const cardData = cards.find(c => c.name === deckCard.name);
                    if (cardData) {
                        for (let i = 0; i < deckCard.count; i++) {
                            const cardElement = createCardElement(deckCard.name, cardData.imgSrc);
                            deckGrid.appendChild(cardElement);
                        }
                    }
                });
    
                deckContainer.appendChild(deckGrid);
            </script>
        </body>
        </html>
        `;
    
        // Write the content to the new tab
        newTab.document.write(tabContent);
        newTab.document.close();
    });

    

//*************************************************************************************************************************************//
//****************************************************Load Content*********************************************************************//
//*************************************************************************************************************************************//

document.addEventListener('DOMContentLoaded', function() 
{
    allCards = [...cards]; // Copying all cards directly
    filteredCards = [...cards]; // Initially, all cards are displayed
    pageNumber = 1;
    container = document.getElementById("Deck_Builder_Body_Card_Library_Display");

    //********************************* Initial Setup ********************************//

    // Load the first page of cards initially
    displayPage(pageNumber, filteredCards, container);
    setupPageNavigation();
    setupCheckboxListeners();


    // Function to toggle visibility based on the value of MainSide
    function toggleDeckTitle() {
        const mainDeckTitle = document.getElementById('Maindeck_Title');
        const sideDeckTitle = document.getElementById('Sidedeck_Title');
        const mainDeckContainer = document.getElementById('Deck_Builder_Deck_List_Frame_Body_Maindeck');
        const sideBoardContainer = document.getElementById('Deck_Builder_Deck_List_Frame_Body_Sideboard');
    
        if (MainSide === 0) {
            mainDeckTitle.style.display = 'block';
            sideDeckTitle.style.display = 'none';
            
            mainDeckContainer.style.display = 'block'; // Show main deck container
            mainDeckContainer.style.width = '100%';    // Full width when visible
            
            sideBoardContainer.style.display = 'none'; // Hide sideboard container
            sideBoardContainer.style.width = '0';      // Zero width when hidden
        } else {
            mainDeckTitle.style.display = 'none';
            sideDeckTitle.style.display = 'block';
            
            mainDeckContainer.style.display = 'none';  // Hide main deck container
            mainDeckContainer.style.width = '0';       // Zero width when hidden
            
            sideBoardContainer.style.display = 'block'; // Show sideboard container
            sideBoardContainer.style.width = '100%';    // Full width when visible
        }
    }
    

    // Call toggleDeckTitle initially to set the correct visibility
    toggleDeckTitle();

    // Function to change MainSide and update visibility
    function switchDeck() {
        MainSide = MainSide === 0 ? 1 : 0;
        toggleDeckTitle(); // Update visibility based on new MainSide value
    }

    // Event listeners to switch between decks
    document.getElementById('Maindeck_Button').addEventListener('click', switchDeck);
    document.getElementById('SideDeck_Button').addEventListener('click', switchDeck);
});


























