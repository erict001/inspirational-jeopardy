function getJservice() {
  var requestUrl = "http://jservice.io/api/random";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const questionText = document.createElement("h2");
      const answerText = document.createElement("h4");

      questionText.textContent = data[0].question;
      answerText.textContent = data[0].answer;

      document.body.appendChild(questionText);
      document.body.appendChild(answerText);
    });
}

function getQuote() {
  var requestUrl = "https://type.fit/api/quotes";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomNumber = Math.floor(Math.random() * 1643);

      const quoteText = document.createElement("h2");
      const authorText = document.createElement("h4");

      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;

      document.body.appendChild(quoteText);
      document.body.appendChild(authorText);
    });
}

getJservice();

getQuote();


 //creating Modal 
 var modal = document.getElementById("myModal")
 var btn = document.getElementById("answer")

 //when the answer is submitted, the modal opens

 
function modalAppear() {
 document.querySelector("#myModal").classList.remove("hide")
 modal.style.display = "block";
 }

 btn.addEventListener("click", modalAppear);

 //when the user clicks outside of the modal, the modal closes
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none"
   }
 };