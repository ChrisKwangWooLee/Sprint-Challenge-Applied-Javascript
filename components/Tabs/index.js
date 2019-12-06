// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach( topic => {
        // create new topic and set text content as each string in the array we got from the API
        let newTab = document.createElement('div');
        newTab.textContent = topic;
        newTab.classList.add('tab');

        // Append newly created tab to the .topics element
        const topics = document.querySelector('.topics');
        topics.appendChild(newTab);

        // add event listener to each tabs to toggle cards that are of that category (ex. javascript on click shows cards with javascript class)
        newTab.addEventListener('mouseenter', event => {
            event.target.style.background = 'grey';
        })
        newTab.addEventListener('mouseleave', event => {
            event.target.style.background = '#333333';
        })
        newTab.addEventListener('click', event => {
            const allCards = document.querySelectorAll('.card');
            allCardsArr = Array.from(allCards);

            console.log(`"${event.target.textContent}" was clicked!`)
            allCardsArr.forEach(card => {
                const cardClassListArr = Array.from(card.classList);

                if (cardClassListArr[1] === 'node') {
                    cardClassListArr[1] = 'node.js';
                }
                
                if (cardClassListArr[1] === event.target.textContent) {
                    // reset toggle status by removing toggle-on and toggle-off classes
                    card.classList.remove('toggle-on');
                    card.classList.remove('toggle-off');
                    // add toggle-on class so that this card will be displayed
                    card.classList.add('toggle-on');
                    card.style.display = 'block';
                } else {
                    // reset toggle status
                    card.classList.remove('toggle-on');
                    card.classList.remove('toggle-off');
                    // add toggle-off class
                    card.classList.add('toggle-off');
                    card.style.display = 'none';
                }
            })
        })
})
})