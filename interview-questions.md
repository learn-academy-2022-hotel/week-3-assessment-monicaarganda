# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is used in React, it is a mixture of HTML and Javascript. Inside of a React app it is printed below the return of the component function. When considering syntax, many things in HTML have already been defined in Javascript therefore certain command calls will now change into camelCase when using JSX.
For example:
HTML - a command is class, but because in Javascript when calling on a class is the same when using React the proper JSX syntax now converts the command call to className.

Researched answer: JSX stands for Javascript XML, JSX has the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into react elements. A syntax difference between HTML and JSX is that JSX uses React fragments. In HTML when writing code it is not needed to return a single parent element whereas JSX does need one.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager used to manage all of the files a react application needs in order to perform correctly. When running yarn in the terminal it is running every node module needed and organizing them in order that will result in the react app running correctly.

Researched answer: Yarn is a package manager that allows us to share code with other developers in order to avoid rewriting components, libraries and frameworks. In order for our code to work properly yarn ensures this by yarning in all of the dependencies needed. Once Yarn is run it updates the yarn.lock file. This file is the foundation of the current project and by updating it makes it fast and reliable.

3. What is a React component?

Your answer: A React component is a function that is run and returned on the browser. Everything in react is a component. 

Researched answer: React components are reusable writings of code that returns JSX onto the DOM. Components are used to build the user interface with Javascript. An example is a Functional Component, these are javascript functions.

Example:
const exampleComponent = () => {
    return <h1>Hello Hotel!</h1>;
}

4. What is the difference between state values and props in React?

Your answer: State values gives a variable as well as a method to update the variable called useSate used in the main app, whereas a prop is a property used to pass data from and to components within the app.

Researched answer: The difference between state vales and props is that state is managed within the component. State is a built in react object that contains data of a declared variable and method to update the component. Whereas props refers to the properties of a component, these get passed to the component in a function's parameters. 

5. What is the DOM?

Your answer: DOM stands for the Document Object Model, this is what we see when looking at a website in our browser. This is a product of what our code produces visually. 

For example: 
In CSS:
h1 {
    text-align: center;
}
This example will visually command the text written on our header in size 1 to now be in the center of the page.

Researched answer: DOM stands for Document Object Model, this is the user interface that users see. The DOM automatically updates when states change in React. By being able to see the DOM while working on a project this allows the developer to see the process of their work.

6. STRETCH: Which is the difference between a div and a span?

Your answer: A div stands for division that allows the code to be written in sections whereas span could possibly be used to span across the entirety of the code and manipulate it to return a specific action.

Researched answer: A div element is used for block-level organization and styling elements while using attributes whereas a span element is used for inline organization and styling and uses no attributes in its opening tag. Div's wrap an entire section of code while span wraps a specific word. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Also referred to as OOP is a method of programming that is designed around objects rather than functions and logic. OOP has four building blocks including Classes, Objects, Methods and Attributes as well as four Pillars including Encapsulation, Abstraction, Inheritance and Polymorphism.
 
2. Ruby: A dynamic, scripting programming language that is popular for its simplicity and productivity. It has a syntax that is natural to read and easy to write. This programming language is mainly used to build web applications because it is so flexible it allows a developer to add as well as remove functionality to the core language features.
 
3. Implicit return: This is a method used by developers completely based on their styling preferences, it is used to shorten the code within a function body. An implicit return means the return is implied resulting in all functions being returned on their own, even if the developer doesn't write it.
 
4. Ruby blocks: Are chunks of code that are enclosed in curly braces or in a do / end statement which are passed through into methods. It allows you to group code into a standalone unit that you can use as a method argument. These are useful because it allows them to save code and use it later on, they can accept arguments and return a value.
 
Syntax Example:
[1, 2, 3].each do |n|
    puts n
  end
 
5. Ruby hashes: A Hash ia collection of unique keys and their values. A hash is wrapped by curly braces which contains key-value pairs separated by commas. Each value is assigned to a key using a hash rocket ( => ). Calling the hash followed by a key name within brackets grabs the value associated with that key. A hash is similar to arrays but differs because there are no numerical indexes, hashes can only be accessed by their keys.
 
Syntax Example: { a: 1, b: 2, c: 3 }
