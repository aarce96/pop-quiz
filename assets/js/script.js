
var startBtnEl = document.querySelector("#start-quiz");
var contentEl = document.querySelector(".content-wrapper");
var newQuestion = document.querySelector(".question");

var startQuizHandler = function(event) {
    event.preventDefault();
    // css styling in js (style.[css-property])
    contentEl.style.display = "none";
    
    var divEl = document.createElement("div");
    divEl.innerHTML = 
        "<h2>Commonly used data types DO Not Include:<h2><ul><li><button>1. Strings</button></li><li><button>2. Booleans</button></li><li><button>3. Alerts</button></li><li><button>4. Numbers</button></li></ul>";
        
    newQuestion.appendChild(divEl);
};

startBtnEl.addEventListener("click", startQuizHandler);
