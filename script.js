var messtext;
var rep;
var answer = "Hello !";
var notText = "Je ne comprends pas votre question";
var fine = "plutot bien et vous ?";
var question = form.elements['question'].value;

function getAnswer(form) {
    userName();
    question = form.elements['question'].value.toLowerCase();
    node = document.createElement("DIV");
    textnode = document.createTextNode(question);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    timeSet2();
    node.className = "quest";
    document.getElementById("question").value = "";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    giveTime();
    return false;
}


function botAnswer() {
    if (question === "bonjour" || question === "hello" || question === "hey" || question === "hi" || question === "coucou"  ) {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(answer);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    } else if (question === "ca va ?" || question === "la forme ?" || question === "ca farte?" || question === "roots?"  ) {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(fine);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    } else {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(notText);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep2";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    }
}

function giveTime() {
    setTimeout(botAnswer, 4000);
}

function timeSet() { //heure pr le bot
    d = new Date();
    var hour = d.toLocaleTimeString();
    node2 = document.createElement("P");
    var hourPlus = document.createTextNode(hour);
    node2.appendChild(hourPlus);
    document.getElementById("msg").appendChild(node2);
    node2.className = "hour";
    clearTimeout(timeSet);
}

function timeSet2() { //heure pr l'utilisateur
    timeSet();
    node2.className = "hour2";
}

function botName() {
    var nameBot = "Bot Simplon";
    node3 = document.createElement("P");
    var textnode = document.createTextNode(nameBot);
    node3.appendChild(textnode);
    document.getElementById("msg").appendChild(node3);
    node3.className = "botName";
}

function userName() {
    var nameBot = "User";
    node3 = document.createElement("P");
    var textnode = document.createTextNode(nameBot);
    node3.appendChild(textnode);
    document.getElementById("msg").appendChild(node3);
    node3.className = "userName";
}

function afficher_cacher(DIV)
{
    if(document.getElementById(msg).style.visibility=="hidden")
    {
        document.getElementById(msg).style.visibility="visible";
        document.getElementById('button_'+msg).innerHTML='Cacher le texte';
    }
    else
    {
        document.getElementById(msg).style.visibility="hidden";
        document.getElementById('button_'+msg).innerHTML='Afficher le texte';
    }
    return true;
}


    // function botAnswer(){
    //    
    // }


//     if (question === "bonjour" || question === "hello" || question === "hey") {
//         node = document.createElement("DIV");
//         var textnode = document.createTextNode(answer);
//         node.appendChild(textnode);
//         document.getElementById("msg").appendChild(node);
//         timeSet();
//         node.className = "rep";
//         document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
//     } else if (question === "ca va ?" || question === "la forme ?") {
//         node = document.createElement("DIV");
//         var textnode = document.createTextNode(fine);
//         node.appendChild(textnode);
//         document.getElementById("msg").appendChild(node);
//         timeSet();
//         document.getElementById("msg").appendChild(node2);
//         node.className = "rep";
//         document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
//     } else {
//         node = document.createElement("DIV");
//         var textnode = document.createTextNode(notText);
//         node.appendChild(textnode);
//         document.getElementById("msg").appendChild(node);
//         timeSet();
//         node.className = "rep2";
//         document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
//     }
//     return false;

// }
