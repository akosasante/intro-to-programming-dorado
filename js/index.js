// Assignment

let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

// document.getElementById('copyright').innerHTML = thisYear, " Scott Feichter";
//
// document.getElementById("copyright").style.color = "white";


footer.appendChild(copyright);

let skills = ["Honest", "Dependable", "Energenic"];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener("submit", function(event) {

    event.preventDefault();
    let msgName = document.getElementById("name");
    let msgEmail = document.getElementById("email");
    let msgMessage = document.getElementById("message");
    console.log(msgName, msgEmail, msgMessage);
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(event) {
        let entry = document.getElementsByName("removeButton").parentNode.nodeName;
        document.remove("entry");
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
    })
    document.getElementsByName("leave_message");
});