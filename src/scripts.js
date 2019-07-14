// Creating the Close buttons for lists that are not created with the main function

var myList = document.getElementsByTagName("li");
var index;

for(index = 0; index < myList.length; index++){
    var aSpanTag = document.createElement("SPAN");
    var someText =document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someText);
    myList[index].appendChild(aSpanTag);
}
// CLOSE BUTTON
var closeButton = document.getElementsByClassName("close");

for(i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function(){
        var theDiv = this.parentElement;
        theDiv.style.display = "none"
    }
}


// Creating Todo Function
function createNewElement() {
    var li = document.createElement('li');
    var theInputValue = document.getElementById("input").value;
    var textNode = document.createTextNode(theInputValue);
    
    li.appendChild(textNode);

    if(theInputValue === '') {
        alert("Please enter your note")
    } else {
        document.getElementById("the-ul").appendChild(li);
    }

    document.getElementById("input").value = "";

    var theSpanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    theSpanTag.className = "close";
    theSpanTag.appendChild(text);
    li.appendChild(theSpanTag);

// Remove items when click on SPAN CLOSE BUTTON


}

var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {

    if(event.target.tagName === " LI"){
        event.target.classList.toggle('checked');
    }
});