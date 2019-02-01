# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

DOM stands for Document Object Model. It allows JavaScript to interact with web pages. I think of the DOM as a tree. The trunk of the tree is the Document, which is the most general part of the DOM. From there, the DOM branches off, much like branches from a tree trunk. Each branch must end in a node, which contains an object. JavaScript loves objects, and thus can play with the DOM in neat ways.

2. What is an event?

An Event is an event in the DOM. It can be triggered by a human interacting with the webpage (e.g. mouse or keyboard interactions), by JavaScript in the webpage itself (e.g. code), or by some other event in the browser (e.g. losing internet connection).

3. What is an event listener?

An event listener can be attached to DOM objects to allow interactions with the webpage. When an event occurs, the listener is notified and can invoke a function. That function can do a great many things, from styling a webpage differently, to checking a user-inputted email address for mistakes, to creating video games.

4. Why would we convert a NodeList into an Array?

It is relatively common to convert an `HTMLCollection` into an Array using `Array.from()` because an `HTMLCollection` is an array-like object, but doesn't have `.forEach()` as a method. Iterating over the elements in that collection can be quite handy so that built-in loop is nice to have. `NodeList` _does_ have `.forEach()` as a method, though, so that isn't the reason. Unless you're working with older browsers, which don't support `NodeList.forEach()`, in which case you'd want to convert it to an Array in order to iterate over it. At that point, though, you just writing a `for` loop is probably simpler anyway without converting anything.

5. What is a component?

A component is a reuseable pattern of code. It allows JavaScript to quickly create repeated elements and/or interactions. For example, if you have a database full of thousands of Tweets for a particular user, using component to take the data and place it into the HTML, CSS, and JavaScript for each individual Tweet is essential – otherwise, you'd be writing all that code for each of the thousands of Tweets. Let the machine do the hard work!

### Git Set up

* [x] Fork the project into your GitHub user account
* [x] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [ ] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [ ] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
