// CLOSE BUTTON
var closeButton = document.getElementsByClassName("close");

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

    for(i = 0; i < closeButton.length; i++){
        closeButton[i].onclick = function(){
            var theDiv = this.parentElement;
            theDiv.style.display = "none"
        }
    }

}

createNewElement();