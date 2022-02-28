const getTemplate = (data = []) => {
    const items = data.map(item => {
        return `
        <button class="datetimeselect__btn survey-form__buttom">${item.value}</button>
        `
    })
    return `
    <div class="datetimeselect__input survey-form__field" data-type="input">
    <span>21.02.2022 16:00</span>
        <i class="fa-solid fa-calendar-days" data-type=></i>
    </div >
    <div class="datetimeselect__dropdown__wraper">
        <div class="datetimeselect__dropdown">
            ${items.join("")}
        </div>
    </div>
`
}


export class DTSelect {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        this.#getCalendarConsultation();//[{value: "01.03.2022"}, {value: "02.03.2022"}, {value: "03.03.2022"}];//
        console.log(this.data);

        this.#render();
        this.#setup();
    }

    #render() {
        // const {data} = this.options;
        this.$el.classList.add("datetimeselect");
        this.$el.innerHTML = getTemplate(this.data);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
    }

    clickHandler(event) {
        const { type } = event.target.dataset;

        console.log(type);
        if (type === "input") {
            this.toggle();
        }

    }

    #getCalendarConsultation() {
        let url = "https://script.google.com/macros/s/AKfycbzr9ln_SdipUwEFhRdu8aDdVL3ayZRFJKvvbc5x/exec";

        let data = {
            "type": "getfreetimes"
        }

        let options = {
            //mode: 'no-cors', // no-cors
            //redirect: 'follow',
            method: 'POST',
            // cache: 'no-cache',
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                //  'Accept'  : 'application/json',
                //  'Access-Control-Allow-Methods':"POST",
                //   "Access-Control-Allow-Origin":"*",
                //  "Access-Control-Allow-Headers":"Content-type"

            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then((response) => console.log(response))
            //.then(result => console.log(result.status))
            .catch((error) => {
                console.log('Error:', error);
            });
           /*  .then(d => {
                this.data = d.status;
            }) */;
        //let response = await fetch(url, options);
        //let respData = await response.json();

        //console.log(respData); */
        //return [{value: "01.03.2022"}, {value: "02.03.2022"}, {value: "03.03.2022"}];
        //return response.text();//[{ value: "01.03.2022" }, { value: "02.03.2022" }, { value: "03.03.2022" }];
    }

    get isOpen() {
        return this.$el.classList.contains("open");
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.$el.classList.add("open");
    }

    close() {
        this.$el.classList.remove("open");
    }

    destroy() {
        this.$el.removeEventListener("click", this.clickHandler)
    }

}

