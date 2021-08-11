//------------------- Credentials -----------------------------------------------
// Author: Christine Coomans
// Date Created: 2020/09/11

function MyFunction() {
    //This will fetch the values from the inserted data given by the user
    var firstName = document.getElementById("firstname").value;
    var secondName = document.getElementById("lastname").value;
    var seperator = ",";

    //This will make a 'constructed' string from the information gotten above
    var str = "Here’s the information in a single string: " + secondName + seperator + " " + firstName;

    //This will return the information as a single string.
    document.getElementById("here").innerHTML = str.toString();
}