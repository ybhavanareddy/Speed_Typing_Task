let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let countDown = 0;
let intervalId;

function countDownStart() {
    intervalId = setInterval(function() {
        countDown += 1;
        timerEl.textContent = countDown;
    }, 1000);
}

function displayqote(randonQuote) {
    let quoteInputValue = quoteInputEl.value;
    if (randonQuote === quoteInputValue) {
        resultEl.textContent = "You Typed in" + countDown + "seconds";
    } else {
        resultEl.textContent = "you typed incorrect Sentence";
    }
}


function getrandomQuote() {
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote";
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randonQuote = jsonData.content;
            quoteDisplayEl.textContent = randonQuote;
            spinnerEl.classList.add("d-none");
        });
}
submitBtnEl.addEventListener("click", function() {
    let randonQuote = quoteDisplayEl.textContent;
    displayqote(randonQuote);
});
resetBtnEl.addEventListener("click", function() {

    clearInterval(intervalId);
    countDown = 0;
    timerEl.textContent = countDown;
    quoteInputEl.value = "";
    resultEl.textContent = "";
    getrandomQuote();
    countDownStart();
});
getrandomQuote();
countDownStart();