let things = {
    Thing1 : {
        name: "thing 1",
    },

    Thing2 : {
        name: "thing 2",
    },

    Thing3 : {
        name: "thing 3",
    }
}

let buttons = document.querySelectorAll("button");


function showData() {
    let key = this.dataset.key;

    let headline = document.querySelector("h1");

    headline.textContent = things[key].name;
}



buttons.forEach(button => button.addEventListener("click", showData));