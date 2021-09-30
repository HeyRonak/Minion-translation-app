

var dataInput = document.querySelector("#text_input"); // input
var output = document.querySelector(".output_window"); // output
var btn = document.querySelector(".show_op"); // button

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var url = "https://api.funtranslations.com/translate/minion.json";

function makeUrl(text){
    return url + "?"+ "text="+ text;
}

function errorMessage(error){
    console.log(  "Something unwanted happen at server side , please try after some time.\n"    + error);
}


btn.addEventListener("click" , function response() {
    var url = makeUrl( dataInput.value );

    console.log( url );
    
    fetch(url)
    .then(response => response.json())
    .then(json =>  output.innerText = json.contents.translated )
    .catch(errorMessage);

})