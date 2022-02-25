O("select-experience").onchange = myChangeFunction

function myChangeFunction() {
    this.value == "yes" ? O("textarea-experience").hidden = false
        : O("textarea-experience").hidden = true;
}
