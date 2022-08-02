console.log("awesome notes")

// add new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "I like reading";
document.querySelector("body").appendChild(newParagraph);

const notes =[
    {
        title: "my next rip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",
    },
    {
        title: "book i am reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "formula1",
        body: "qatar rally",
    },
];
notes.forEach(function (note){
    const p = document.createElement("p");
    p.textContent= `${note.title}--${note.body}`;
    document.querySelector("body").appendChild(p);
});

document.querySelector("button").addEventListener("click", function(event){
    event.target.textContent= "the button was clicked";
    //console.log(event)
});

// console.log(notes[1].body);
// document is html document
// event listens to actions that you do on the DOM
// click an example of an event
// add event listener a document method you add ,Used to add an event to an element
// appendChild is used to pass in elements in parent element
// query selector a doc method used to target html element
// textContent used to put content in an Element,provide new value in an element
// createElement used to create an element in html
// for each=method calls a function for each element in an array-for each,used in an array
// call back function,function within a function
// item-which represents each single item
notes.forEach(function(item){
    // for each=method calls a function for each element in an array-for each,used in an array
    const p = document.createElement("p");
    // declaring a variable p
    // createElement used to create an element in html,the new element is p
    p.textContent = "note.title";
// textContent used to add content in an Element
    document.querySelector("body").appendChild(p)
    // selecting the element body and appending the child body which is p
})
notes.forEach(function(notes) {
    const p = document.createElement("p");
    p.textContent = `${notes.title} -- ${notes.body}`;
    document.querySelector("body").appendChild(p);
})
document.querySelector("button").addEventListener
// .addEventListener-method used to add event,the event is click
("click",function(event) {
    // console.log(event);
    event.target.textContent = "the button was clicked"
});
document
.querySelector("#createNote")
.addEventListener
("click",function(event) {
    // console.log(event);
    event.target.textContent = "the button was clicked"
});
document
.querySelector("#removeNotes")
.addEventListener("click", function (event){
    document.querySelectorAll("p").forEach(function(item){
        item.remove();
    });
});