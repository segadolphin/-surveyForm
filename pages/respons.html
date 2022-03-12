const getHTMLBtn = (data = []) => {

    let line = true;
    let codeHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (line) {
            codeHTML += "<div class='dropdown_line'>";
            line = false;
        }

        codeHTML += data[i];

        if (i % 2 == 0 & i > 0) {
            codeHTML += "</div>";
            line = true;
        }
    }

    if (!line)
        codeHTML += "</div>";

    return codeHTML;
}

const getTemplate = (placeholder = "", data = []) => {

    const itemsDate = data.dates.map((item, i) => {

        let htmlBlock = "";

        if (i == 0)
            htmlBlock = `
                    <div class="datetimeselect__btn survey-form__buttom btn-selected" data-type="date" data-id=${i}><span>${item}</span></div>
                        `
        else
            htmlBlock = `
                    <div class="datetimeselect__btn survey-form__buttom" data-type="date" data-id=${i}><span>${item}</span></div>
                    `

        return htmlBlock;
    })

    let codeHTMLTime = "";
    for (let i = 0; i < data.times.length; i++) {
        codeHTMLTime += `<div class='dropdown_block' data-type="time" data-id=${i} hidden>`;

        let itemsTime = data.times[i].map((item, j) => {
            let htmlBlock = "";

            if (j == 0 && i == 0)
                htmlBlock = `
            <div class="datetimeselect__btn survey-form__buttom btn-selected" data-type="time"><span>${item}</span></div>
            `
            else
                htmlBlock = `
            <div class="datetimeselect__btn survey-form__buttom" data-type="time"><span>${item}</span></div>
            `
            return htmlBlock;
        });

        codeHTMLTime += getHTMLBtn(itemsTime);
        codeHTMLTime += "</div>"
    }

    //${items.join("")}

    let codeHTMLDate = getHTMLBtn(itemsDate);

    return `
    <div class = "datetimeselect__backdrop" data-type="backdrop"></div>
    <div class="datetimeselect__input survey-form__field" data-type="input">
    <span>${placeholder}</span>
        <i class="fa-solid fa-calendar-days"></i>
    </div >
    <div class="datetimeselect__dropdown__wraper">
        <div class="datetimeselect__dropdown">`
        + codeHTMLDate +
        `</div>
        <div class="datetimeselect__dropdown" hidden>`
        + codeHTMLTime +
        `</div>
    </div>
`
}

export class DTSelect {
    #$el;
    #$btnsDate;
    #$btnsTime;
    #placeholder;
    #curDate;
    #curTime;

    constructor(selector) {
        this.#$el = document.querySelector(selector);
        this.#placeholder = "Выберите дату и время";
        this.#getCalendarConsultation();
        this.#setup();
        //   this.#render();
    }

    get date() { return this.#curDate; }
    get time() { return this.#curTime; }

    #render(data = []) {
        this.#placeholder = data.dates[0] + " " + data.times[0][0];

        this.#curDate = data.dates[0];
        this.#curTime = data.times[0][0];

        this.#$el.classList.add("datetimeselect");

        this.#$el.innerHTML = getTemplate(this.#placeholder, data);

        this.#$btnsDate = this.#$el.querySelectorAll(".datetimeselect__btn[data-type='date']");

        this.btnClickDateHandler = this.btnClickDateHandler.bind(this);
        for (let item of this.#$btnsDate)
            item.addEventListener('click', this.btnClickDateHandler);

        this.#$btnsTime = this.#$el.querySelectorAll(".datetimeselect__btn[data-type='time']");
        this.btnClickTimeHandler = this.btnClickTimeHandler.bind(this);
        for (let item of this.#$btnsTime)
            item.addEventListener('click', this.btnClickTimeHandler);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.#$el.addEventListener('click', this.clickHandler);        
    }

    clickHandler(event) {
        
        let dataType = (event.target.dataset.type != undefined) ? event.target.dataset.type : event.path[1].dataset.type;

        console.log(dataType);

        switch (dataType) {
            case "input": {
                this.#toggle();
                break;
            }
            case "backdrop": {
                this.#close();
                break;
            }
        }
    }

    btnClickDateHandler(event) {
        let curEl;
        if (event.target.nodeName == "SPAN")
            curEl = event.path[1];
        else
            curEl = event.target;


        for (let i = 0; i < this.#$btnsDate.length; i++)
            this.#$btnsDate[i].classList.remove("btn-selected");

        curEl.classList.add("btn-selected");
        //console.log(curEl.dataset.id);
        this.#showTimesPanel(curEl.dataset.id);
    }

    btnClickTimeHandler(event) {

        let curEl;
        if (event.target.nodeName == "SPAN")
            curEl = event.path[1];
        else
            curEl = event.target;

        for (let i = 0; i < this.#$btnsTime.length; i++)
            this.#$btnsTime[i].classList.remove("btn-selected");

        curEl.classList.add("btn-selected");


        let dd = this.#$el.querySelector(".datetimeselect__dropdown[hidden] .btn-selected");
        //console.log(dd);

        this.#curDate = dd.innerText;
        this.#curTime = curEl.innerText;

        this.#setPlaceholder(dd.innerText + " " + curEl.innerText);

        this.#toggle();
        this.#showDatePanel();
    }

    #showTimesPanel(id = 0) {
        let dd = this.#$el.querySelectorAll(".datetimeselect__dropdown");

        //  console.log(dd);
        for (let i = 0; i < dd.length; i++) {
            dd[i].hidden = !dd[i].hidden;
        }
       
        let ddb = this.#$el.querySelector(".datetimeselect__dropdown:not([hidden])");


        // console.log(ddb.children);

        let child_ddb = ddb.children;
        for (let i = 0; i < child_ddb.length; i++) {
            if (child_ddb[i].dataset.id == id) {
                child_ddb[i].hidden = false;
                break;
            }
        }
    }

    #showDatePanel() {
        let dd = this.#$el.querySelectorAll(".datetimeselect__dropdown");

        //  console.log(dd);
        for (let i = 0; i < dd.length; i++) {
            if (i == 0)
                dd[i].hidden = false
            else
                dd[i].hidden = true;
        }

        let ddb = this.#$el.querySelectorAll(".datetimeselect__dropdown[hidden] .dropdown_block");

        //  console.log(ddb);
        for (let i = 0; i < ddb.length; i++) {
            ddb[i].hidden = true;
        }
   }

    #getCalendarConsultation() {
        let url = "https://script.google.com/macros/s/AKfycbzr9ln_SdipUwEFhRdu8aDdVL3ayZRFJKvvbc5x/exec";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.#render(data.data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    get isOpen() {
        return this.#$el.classList.contains("open");
    }

    #setPlaceholder(value = "") {
        this.#placeholder = value;
        let ss = this.#$el.querySelector('.datetimeselect__input span');
        ss.innerHTML = value;
    }


    #toggle() {
        this.#showDatePanel();
        this.isOpen ? this.#close() : this.#open();
    }

    #open() {
        this.#$el.classList.add("open");
    }

    #close() {
        this.#$el.classList.remove("open");
    }

    destroy() {
        this.#$el.removeEventListener("click", this.clickHandler);

        for (let item of this.#$btnsDate)
            item.removeEventListener('click', this.btnClickDateHandler);

        for (let item of this.#$btnsTime)
            item.removeEventListener('click', this.btnClickTimeHandler);
    }
}
