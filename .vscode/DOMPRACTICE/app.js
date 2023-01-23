//ADDING elemnt by JS
const body = document.body;
// body.append("hello world", " bye");
// body.appendChild("hello world 3"); //appendchild wouldnt be shown.

const div = document.createElement("div");
// div.innerText = "<strong>Hello World 4</strong>";//innerText pay more attention to styling
div.textContent = "<strong>Hello World 2</strong>";//textContent pay more attention to text
body.append(div); //no text will be shown in here

const div2 = document.createElement("div2");
div2.innerHTML = "<strong>Hello World 5</strong>";
body.append(div2);

const strong = document.createElement("strong");
strong.innerText = "same result as innerHTML but safer";
div.append(strong);

// =====================================
//deleting element from the body
// const body2 = document.body;
const div3 = document.querySelector("div");
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// spanBye.remove();//compeletely removing it from the HTML
// div3.append(spanBye);// taking it back
// div3.removeChild(spanBye);


// ===================================================
// MODIFYING THE ELEMENTS
console.log(spanHi.getAttribute("id"));
