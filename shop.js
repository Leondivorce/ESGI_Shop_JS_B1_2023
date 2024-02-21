let fruits = []
var table = document.getElementById("Table");


const addApple = document.getElementById("Apple");

addApple.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Apple";
});

const addPeer = document.getElementById("Peer");

addPeer.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Peer";
});

const addOrange = document.getElementById("Orange");

addOrange.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Orange";
});

const addCherry = document.getElementById("Cherry");

addCherry.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Cherry";
});

const addBanana = document.getElementById("Banana");

addBanana.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Banana";
});

const addGrapes = document.getElementById("Grapes");

addGrapes.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Grapes";
});

const addStrawberry = document.getElementById("Strawberry");

addStrawberry.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Strawberry";
});

const addPeach = document.getElementById("Peach");

addPeach.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Peach";
});

const addPineaple = document.getElementById("Pineaple");

addPineaple.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Pineaple";
});

const addLemon = document.getElementById("Lemon");

addLemon.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Lemon";
});

const addKiwi = document.getElementById("Kiwi");

addKiwi.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Kiwi";
});

const addCoconut = document.getElementById("Coconut");

addCoconut.addEventListener("click", function(){
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "Coconut";
});

const buttonClear = document.getElementById("clear")
buttonClear.addEventListener("click", function(){
    table.innerHTML = ""
});

// buttonClear.addEventListener("click", function(){
//     var rowCount = table.rows.length;
//     table.deleteRow(rowCount);

// });