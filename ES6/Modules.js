// ! Modules

// JavaScript modules allow you to break up our code into separate files.

// This makes it easier to maintain a code-base.

// Modules are imported from external files with the import statement.

// Modules also rely on type="module" in the <script> tag.

// add this in the HTML
{/* <script defer type="module" src="Modules.js"></script>; */}

// ! Export
// Modules with functions or variables can be stored in any external file.

// There are two types of exports: Named Exports and Default Exports.

// ! Named Exports
// Let us create a file named person.js, and fill it with the things we want to export.
// we can create named exports two ways. In-line individually, or all at once at the bottom.


// ! Default Exports
// Let us create another file, named message.js, and use it for demonstrating default export.
// You can only have one default export in a file.

import {name, age} from "./person.js"
console.log(name);
console.log(age);

import message from "./message.js";
console.log(message());