# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

Document Object Model (DOM) is a bridge between HTML/CSS and JS. It's an object representing HTML elements in a tree like structure. Manipulating the DOM allows developers to create dynamic website, where users can actively interact with the webpage.

2. What is an event?

Every user interaction with the webpage is an event: click, scroll, and key-press. Appropriately dealing with events allow webpage to be dynamic.

3. What is an event listener?

Event listeners await for an event to occur and trigger subsequent actions. JS built-in method '.addEventListener()' takes in two parameters: an event-type and a callback function. This method allows us to create a property on the DOM node to handle events. On the other hand, '.onclick' makes an inline attribute to the HTML to handle events. Both methods are valid, but addEventListener() is a preferred way in the modern web development because only one event can be attached to a DOM element using inline attribute. '.addEventListener()' allows us to handle mutliple events.

4. Why would we convert a NodeList into an Array?

NodList is an array-like object that's returned when we use 'querySelectorAll()' to select multiple elements. NodeList allows forEach() array method but does not allow any other array methods (ex. .map(), .sort(), etc.). 'Array.from(nodeListName)' allows us to convert array-like object into an actually array. This allows us to use array methods. 

5. What is a component?

A component is a part of a whole. In our case, a component is a portion of our webpage made up of HTML elements, CSS ,and JS. An advantage of using a component is that it allows us to reuse code to create elements with a similar funcionality. Inside a component constructor function, we... 

1) create element 
2) add class 
3) add contents and attributes 
4) append 
5) add event listeners.

### Git Set up

* [v] Fork the project into your GitHub user account
* [v] Clone the forked project into a directory on your machine
* [v] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [v] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [v] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [v] Following the instructions in the `Header/index.js` file, create the Header component. 

* [v] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [v] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [v] Complete the carousel functionality in `Carousel.js`

* [v] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [v] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [v] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
