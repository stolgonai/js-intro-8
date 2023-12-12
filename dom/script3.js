const parentEl = document.getElementById("parent");
console.log("parentEl", parentEl);

/**
 * Get all child nodes
 * - childNodes
 */

console.log("child nodes", parentEl.childNodes); // All nodes

/**
 * Get all child elements
 */

console.log("children", parentEl.children); // All li elements

/**
 * Get the first node and last node
 * - firstChild, lastChild
 */
const firstChild = parentEl.firstChild;
const lastChild = parentEl.lastChild;

console.log("first child", firstChild); // text
console.log("last child", lastChild); // text

/**
 * Get the first element and last element
 * - firstElementChild, lastElementChild
 */
const firstChildEl = parentEl.firstElementChild;
const lastChildEl = parentEl.lastElementChild;

console.log("first element", firstChildEl); // li - USA
console.log("last element", lastChildEl); // li - Brasil

/**
 * Get previous and last sibling nodes
 * - previousSibling, nextSibling
 */

console.log("previous sibling", lastChild.previousSibling); // comment
console.log("next sibling", firstChild.nextSibling); // li - USA
console.log(firstChild.previousSibling); // null
console.log(lastChild.nextSibling); // null

/**
 * Get previous and last element
 * - previousElementSibling, nextElementSibling
 */
console.log("previous sibling element", lastChildEl.previousElementSibling); // li - Mexico
console.log("next sibling element", firstChildEl.nextElementSibling); // li - Canada
console.log(firstChildEl.previousElementSibling); // null
console.log(lastChildEl.nextElementSibling); // null

/**
 * @topic
 * className and classList
 */

const boxEl = document.querySelector(".box");
console.log(boxEl.className); // string -> "box box2 box3"
console.log(boxEl.classList); // DOMTokenList -> ["box", "box2", "box3"]

// Add classname examples

// Using className
// boxEl.className = "box4"; // incorrect
// boxEl.className += " box4"; // concat the classname
// console.log(boxEl.className);

// Using classList
boxEl.classList.add("box4");
console.log(boxEl.className);

// Remove classname examples

// Using className
const classname = boxEl.className;
console.log("classname", classname);
const arrOfClassName = classname.split(" ");
console.log("arrOfClassName", arrOfClassName);
let newClassName = arrOfClassName.filter((className) => className !== "box2");
console.log(newClassName);
boxEl.className = newClassName.join(" ");

// Using classList
boxEl.classList.remove("box3");
console.log(boxEl.className);

/**
 * @topic
 * Create an element in DOM
 */

const footerEl = document.createElement("footer");
// console.log(footerEl);
// footerEl.className = "f1"; aading a className
// footerEl.textContent = "This is a new content via textContent";
// footerEl.innterHTML = "This is a new content via InnerHTML";

const textContent = document.createTextNode("Footer Content via Node"); // create a string
// footerEl.appendChild(textContent);
footerEl.append(textContent);
console.log(footerEl);

//Difference between appendChild and append

const bodyEl = document.querySelector("body");
//Append footer el to the body
// 1st using appendChild
// bodyEl.appendChild(footerEl);
// 2st using appendChild
bodyEl.append(footerEl); // more useful

//Only last append will work
//append footer to box
boxEl.append(footerEl);

/**
 * @topic
 * Events Intro:
 * 1. Mouse Events
 */
const nameInputEl = document.getElementById("name");
const btnEl = document.getElementById("button");
const dblBtnEl = document.getElementById("doubleBtn");

// event - click
btnEl.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default form submission
  console.log("event", event);
  console.log("target element", event.target);
});

//double Click
dblBtnEl.addEventListener("dblclick", (event) => {
  console.log("event", event.target);
});

// Try: mousedown, mouseout, mouseup, mousemove...

/**
 * 2. Keyword Events
 */
bodyEl.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    console.log(event);
    console.log(event.code);
  } else {
    console.log("Wrong key was entered");
  }
});

/**
 * Form events
 */

//change input
// nameInputEl.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });
// input event
nameInputEl.addEventListener("input", (event) => {
  event.preventDefault();
  console.log(event.target.value);
});
