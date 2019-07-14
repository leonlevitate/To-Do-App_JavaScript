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

}