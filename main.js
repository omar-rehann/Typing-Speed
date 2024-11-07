let onebtn = document.querySelector(".choose .nor");
let twobtn = document.querySelector(".choose .med");
let threebtn = document.querySelector(".choose .har");
let inf = document.querySelector(".info .update");
let inftwo = document.querySelector(".info .two");
let inpt = document.querySelector(".start .enter")
let enter = document.querySelector(".enter_word .enter")
let sectionword = document.querySelector(".word");
let section = document.querySelector(".group_word")
let resltone = document.querySelector(".result .inc");
let resulttwo = document.querySelector(".result .scor");
let sectionlose = document.querySelector(".lose");
inpt.style.display = "none"
onebtn.onclick = function() {
    inf.innerHTML = "Normal";
    inftwo.innerHTML = 5;
    resltone.innerHTML = 5;
    inpt.style.display = "block"
    twobtn.disabled = true
    threebtn.disabled = true;


}
twobtn.onclick = function() {
    inf.innerHTML = "Medium";
    inftwo.innerHTML = 3;
    resltone.innerHTML = 3;
    inpt.style.display = "block"
    onebtn.disabled = true
    threebtn.disabled = true;

}
threebtn.onclick = function() {
    inf.innerHTML = "Hard";
    inftwo.innerHTML = 2;
    resltone.innerHTML = 2;
    inpt.style.display = "block"
    onebtn.disabled = true
    twobtn.disabled = true;

}
let allword = ["omar",
    "facebook",
    "instgram",
    "github",
    "framework",
    "bootstrap",
    "git",
    "messanger",
    "command line",
    "programinng",
    "deep learning",
    "data structure",
    "algorthim",
    "angular",
    "terminal",
    "node bad",
    "gym",
    "sleeping",
    "iphone",
    "samsung",
    "desktop",
    "pizza",
    "car",
    "pen",
    "mouse",
    "headphone",
    "bed",
    "tale",
    "css",

    "javascript"
]
inpt.onclick = function() {
    inpt.remove();
    enter.focus();
    genword();
};

// let el; // Declare el globally 

function genword() {
    let random = allword[Math.floor(Math.random() * allword.length)];
    let indexword = allword.indexOf(random);
    allword.splice(indexword, 1);
    el = document.createElement("h1"); // Assign globally 
    let txtt = document.createTextNode(random);
    el.appendChild(txtt);
    sectionword.appendChild(el);
    section.innerHTML = "";
    for (let i = 0; i < allword.length; i++) {
        let element = document.createElement("h4");
        let txt = document.createTextNode(allword[i]);
        element.appendChild(txt);
        section.appendChild(element);
    }
    final(); // Call final 
}

function final() {
    let start = setInterval(() => {
        resltone.innerHTML--;
        if (resltone.innerHTML === "0") {
            clearInterval(start);
            if (el.innerHTML.toLowerCase() === enter.value.toLowerCase()) {
                resltone.innerHTML = 5;
                enter.value = ""; // Clear input 
                el.innerHTML = ""
                resulttwo.innerHTML++;
                if (allword.length > 0) {
                    genword();
                } else {
                    sectionlose.innerHTML = "<h3>Game Over. You've completed all words!</h3>";
                }
            } else {
                sectionlose.innerHTML = "<h3>Game Over. Wrong word!</h3>";
            }
        }
    }, 1000);
}