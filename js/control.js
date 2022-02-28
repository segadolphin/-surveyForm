import {DTSelect} from './datetimeselect.js'


O("select-experience").onchange = myChangeFunction

function myChangeFunction() {
    this.value == "yes" ? O("textarea-experience").hidden = false
        : O("textarea-experience").hidden = true;
}

O("data-form").addEventListener("submit", afterSubmit);

function afterSubmit(e) {
    e.preventDefault();

    let url = "https://script.google.com/macros/s/AKfycbzr9ln_SdipUwEFhRdu8aDdVL3ayZRFJKvvbc5x/exec";

     window.location.href = "./pages/respons.html";
    //fetch()
    //console.log("Кнопка нажата!")
}

const dtselect = new DTSelect("#datetimeselect")

window.s = dtselect;