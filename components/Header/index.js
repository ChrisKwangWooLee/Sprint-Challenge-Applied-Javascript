// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // Create Element
    const header = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span');

    // Add class
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Add text content
    date.textContent = 'Smarch 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98\u00B0'; // There might be an issue with this

    // Append
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

const headerComponent = document.querySelector('.header-container');
headerComponent.appendChild(Header());
