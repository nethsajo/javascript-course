//Bundling - join all modules into one file. This a complex process which can eliminate unused code and compress our code as well

//Transpiling and Polyfilling - basically to convert all modern JavaScript syntax and features back to old ES5 syntax so that even older browsers can understand the code without breaking and this is usually done using a tool called Babel

//Module - reusable piece of code that encapsulates implementation detauls;

//Usually a standalone file, but it doesn't have to be

//Modules always contains some code and it can also have imports and exports

//Export - can export values out of a module. For example, simple values or even entire functions and whatever we export from a module is called the public API. Just like classes where we can also expose a public API for other codes to consume

//In the case of modules this public API is actually consumed by importing values into a module. Just like we can export values in modules, we can usually also import values from other modules. These other modules from which we import are called DEPENDENCIES of the importing module

//Compose software: Modules are small building blocks that we put together to build complex applications

//Isolate components: Modules can be developed in isolation without thinking about the entire codebase;

//Abstract code: Implement low-level code in modules and import theses abstractions into other modules

//Organize code: Modules naturally lead to a more organized codebase;

//Reuse code: Modules allow us to easily reuse the same code, even across multiple objects

//ES6 Modules - modules stored in files, exactly one module per file

//Modules are imported synchronously

//All the importing statements are basically hoisted to the top

//Variables that are declared inside of a module are actually scope to this module. So basically inside a module, the module itself is like the top level scope and so by default this means that all top level variables are private inside of this variable

//Two types of exports:

//Named Exports: is actually the simplest way of exporting something from a module because all we have to do is to put export in front of anything that we might want to export

//Import everything from shoppingCart module. Kind of the convention when we import everything into an object. So basically this we'll create an object containing everything that is exported from the module that we will specify
import * as ShoppingCart from './shoppingCart.js';

//Export multiple things at the same time using named exports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//Default Exports: when we only want to export one thing per module

//Never mix named and default exports in the same module. So the preferred style is actually to just use one default export per module and then import that we did. Avoid that to reduce complexity

//IMPORTS ARE NOT COPIES OF THE EXPORT!!!! THEY ARE INSTEAD LIKE A LIVE CONNECTION

//Top-level await (ES2022)
//REMEMBER: Using top-level await, await outside of any async function will block the entire module in a way that we really couldn't block code execution before
