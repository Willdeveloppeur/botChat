var messtext;
var rep;
var answer = "Hello !";
var notText = "Je ne comprends pas votre question";
var fine = "plutot bien et vous ?";
// d = new Date(); 
// var hour =d.toLocaleTimeString();
// MonTimeout = setTimeout("getAnswer(form)", 3000 ); 
// // setTimeout(function() { alert("bip"); }, 2000); 

function getAnswer(form) {
    var question = form.elements['question'].value;
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(question);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "quest";
    document.getElementById("question").value = "";

    if (question === "bonjour" || question === "hello" || question === "hey") {
        node = document.createElement("DIV");
        var textnode = document.createTextNode(answer);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep";
        document.getElementById('msg').scrollTop = document.getElementById('msg').scrollHeight;
    } else if (question === "ca va ?" || question === "la forme ?") {
        node = document.createElement("DIV");
        var textnode = document.createTextNode(fine);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById('msg').scrollTop = document.getElementById('msg').scrollHeight;
    } else {
        node = document.createElement("DIV");
        var textnode = document.createTextNode(notText);
        node.appendChild(textnode);
        timer = document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep2";
        document.getElementById('msg').scrollTop = document.getElementById('msg').scrollHeight;
    }
    return false;

}


function timeSet() {
    d = new Date();
    var hour = d.toLocaleTimeString();
    node2 = document.createElement("P");
    var hourPlus = document.createTextNode(hour);
    node2.appendChild(hourPlus);
    document.getElementById("msg").appendChild(node2);
    node2.className = "hour";
    clearTimeout(timeSet);
}

function Timer() {

    setTimeout(timer(), 1000);
}

// MonTimeout = setTimeout("getAnswer(form)", 3000 ); 
// // setTimeout(function() { alert("bip"); }, 2000); 





{/* <button id="doorbell-button" class="bottom_right" style="visibility: hidden;">Donner votre avis</button> */ }









// function ourTime{
//     question;
//    
//     node2 = document.createElement("P");
//     var hourPlus =document.createTextNode(hour);
//     node2.appendChild(hourPlus);
//     document.getElementById("msg").appendChild(node2);
//     node2.className="hour";
// }
// setTimeout(getAnswer(form), 3000);
