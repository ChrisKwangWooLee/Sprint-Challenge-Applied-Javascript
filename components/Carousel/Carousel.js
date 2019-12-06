/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {

  // Create Elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  // Add Class
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  // set initial state (image 2 and image 3 displayed)
  img1.classList.add('img');
  img2.classList.add('img');
  img3.classList.add('img');
  img4.classList.add('img');
  img1.classList.add('toggle-off-1');
  img2.classList.add('toggle-on-left-2');
  img3.classList.add('toggle-on-right-3');
  img4.classList.add('toggle-off-4');
  // img1.classList.add('1');
  // img2.classList.add('2');
  // img3.classList.add('3');
  // img4.classList.add('4');


  // Add attribute and text content
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';
  leftButton.textContent = '<';
  rightButton.textContent = '>';

  // Append
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  img2.style.display = 'block';
  img3.style.display = 'block';

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());

// add event listener
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', event => {
  let images = document.querySelectorAll('.img');  // images is an array-like object of images
  images.forEach(image => {
    // change the source attribute
    if (image.src === 'http://127.0.0.1:5502/assets/carousel/mountains.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/computer.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/computer.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/trees.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/trees.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/turntable.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/turntable.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/mountains.jpeg';
    }
  })
})

rightButton.addEventListener('click', event => {
  let images = document.querySelectorAll('.img');  // images is an array-like object of images
  images.forEach(image => {
    // change the source attribute
    if (image.src === 'http://127.0.0.1:5502/assets/carousel/turntable.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/trees.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/trees.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/computer.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/computer.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/mountains.jpeg';
    } else if (image.src === 'http://127.0.0.1:5502/assets/carousel/mountains.jpeg') {
      image.src = 'http://127.0.0.1:5502/assets/carousel/turntable.jpeg';
    }
  })
})


/*
Below is the bug I created
- If I shift the reading frame, the order of image messes up. 
- Fix: If I shoft the content instead (not the reading frame), the order is still intact.
*/

// leftButton.addEventListener('click', event => {
//   let images = document.querySelectorAll('.img');  // images is an array-like object of images
//   images.forEach(image => {
//     // updating the order of images in an infinite loop
//     if (image.classList.contains('toggle-off-1')) {
//       image.classList.remove('toggle-off-1');
//       image.classList.add('toggle-off-4');
//     } else if (image.classList.contains('toggle-on-left-2')){
//       image.classList.remove('toggle-on-left-2');
//       image.classList.add('toggle-off-1');
//     } else if (image.classList.contains('toggle-on-right-3')) {
//       image.classList.remove('toggle-on-right-3');
//       image.classList.add('toggle-on-left-2');
//     } else if (image.classList.contains('toggle-off-4')) {
//       image.classList.remove('toggle-off-4');
//       image.classList.add('toggle-on-right-3');
//     } 

//     // Change display
//     if (image.classList.contains('toggle-on-left-2')) {
//       image.style.display = 'block';
//     } else if (image.classList.contains('toggle-on-right-3')) {
//       image.style.display = 'block';
//     } else if (image.classList.contains('toggle-off-4')) {
//       image.style.display = 'none';
//     } else if (image.classList.contains('toggle-off-1')) {
//       image.style.display = 'none';
//     }
//   })
// })

// rightButton.addEventListener('click', event => {
//   let images = document.querySelectorAll('.img');  // images is an array-like object of images
//   let imagesArr = Array.from(images);
//   imagesArr.forEach(image => {
//     // updating the order of images in an infinite loop
//     if (image.classList.contains('toggle-off-4')) {
//       image.classList.remove('toggle-off-4');
//       image.classList.add('toggle-off-1');
//     } else if (image.classList.contains('toggle-off-1')){
//       image.classList.remove('toggle-off-1');
//       image.classList.add('toggle-on-left-2');
//     } else if (image.classList.contains('toggle-on-left-2')) {
//       image.classList.remove('toggle-on-left-2');
//       image.classList.add('toggle-on-right-3');
//     } else if (image.classList.contains('toggle-on-right-3')) {
//       image.classList.remove('toggle-on-right-3');
//       image.classList.add('toggle-off-4');
//     } 

//     // Change display
//     if (image.classList.contains('toggle-on-left-2')) {
//       image.style.display = 'block';
//     } else if (image.classList.contains('toggle-on-right-3')) {
//       image.style.display = 'block';
//     } else if (image.classList.contains('toggle-off-4')) {
//       image.style.display = 'none';
//     } else if (image.classList.contains('toggle-off-1')) {
//       image.style.display = 'none';
//     }
//   })
// })