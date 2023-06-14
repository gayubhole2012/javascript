//poly means that it could be solve using wide range of techniques.fill would fill the gap in the browser
//polyfill provides the function and features that developer expects the broswer to offer by default.
//polyfill is a piece of code to add functionality to older browser that have incompability issue
//we will use promise.we will be writing the promise in ES6 code and then converting into ES5 code to avoid the incompability issues of older browser.

window.currentUser = {
    name: 'Sam'
};
if(!window.Promise){
    console.log('Your browser is really old!');
}