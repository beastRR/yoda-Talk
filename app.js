var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

const clickHandler =()=>{
    var input= textInput.value;
    fetch(getTranslationURL(input))
    .then(resp=>{
        return resp.json();})
        .then(resp=>{var translatedText= resp.contents.translated;
        outputDiv.innerText = translatedText;  

    }).catch(err=>{
        console.log("error", err);
        alert("Error Occured!!! Try again");
    })
};

btnTranslate.addEventListener("click", clickHandler);