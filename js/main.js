let things = {
    thing1 : {
        name: "thing 1"
    },

    thing2 : {
        name: "thing 2"
    },

    thing3 : {
        name: "thing 3"
    }
}

let buttons = document.querySelectorAll("button");
    //things = {};

function showData() {
    let key = this.dataset.key;

    let headline = document.querySelector("h1");

    headline.textContent = things[key].name;
}

// function getData() { 
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         things = data;
    


//     })
// }

//getData();

buttons.forEach(button => button.addEventListener("click", showData));