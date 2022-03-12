import { DTSelect } from './datetimeselect.js'


O("select-experience").onchange = myChangeFunction;

function myChangeFunction() {
    this.value == "true" ? O("textarea-experience").hidden = false
        : O("textarea-experience").hidden = true;
}

O("data-form").addEventListener("submit", afterSubmit);

function afterSubmit(e) {
    e.preventDefault();

    let url = "https://webhook.site/f7f02a37-9189-4235-8702-9af64b3fd801"; // "https://script.google.com/macros/s/AKfycbzr9ln_SdipUwEFhRdu8aDdVL3ayZRFJKvvbc5x/exec"; //


    let data = {
        type: "writeconsultation",
        status: "new"
    };

    let form = document.body.querySelectorAll("[name]");

    for (let i = 0; i < form.length; i++) {
        data[form[i].name] = form[i].value;
    }

    /* let sel = document.body.querySelectorAll("#datetimeselect .btn-selected");
    console.log(sel);
    for (let i = 0; i < sel.length; i++) {
        data[sel[i].dataset.type] = sel[i].innerText;
    } */


    data["date"] = dtselect.date;
    data["time"] = dtselect.time;
    console.log(data);
    
    //pattern="+7([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}" 
    //date, time , fio, email, phone, social-name, social-account, niche, launch-experience, launch-note

    let options = {
        method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
        .then(response => {
            console.log(response.ok);
            //if (response.ok)
            //    window.location.href = "./pages/respons.html";
        })
        .catch((error) => {
            console.log('Error:', error);
        }); 
    /* .then((data) => {
            
    }) */
    //console.log("Кнопка нажата!")
}

const dtselect = new DTSelect("#datetimeselect")

window.s = dtselect;
