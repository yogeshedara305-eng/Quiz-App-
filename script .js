document.querySelector(".start-button").addEventListener('click',startfunction)
const questions = [
  {
    question: "1. Which keyword is used to declare a variable that can be reassigned?",
    options: ["const", "let", "fixed", "static"],
    answer: "let"
  },
  {
    question: "2. What is the output of typeof 'Hello'?",
    options: ["number", "boolean", "string", "object"],
    answer: "string"
  },
  {
    question: "3. Which method converts a NodeList into an array?",
    options: ["Array.from()", "Array.push()", "Array.pop()", "Array.sort()"],
    answer: "Array.from()"
  },
  {
    question: "4. Which method creates a new array by transforming each element?",
    options: ["filter()", "find()", "map()", "some()"],
    answer: "map()"
  },
  {
    question: "5. Which method selects the first matching HTML element?",
    options: ["querySelector()", "querySelectorAll()", "getElementsByName()", "createElement()"],
    answer: "querySelector()"
  },
  {
    question: "6. What is the output of 2 + '3'?",
    options: ["5", "23", "6", "NaN"],
    answer: "23"
  },
  {
    question: "7. Which event occurs when a user clicks a button?",
    options: ["change", "submit", "click", "load"],
    answer: "click"
  },
  {
    question: "8. Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "9. Which method removes the last element from an array?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    answer: "pop()"
  },
  {
    question: "10. Which keyword declares a function in JavaScript?",
    options: ["function", "method", "define", "func"],
    answer: "function"
  },
  {
    question: "11. Which operator checks both value and type?",
    options: ["=", "==", "===", "!="],
    answer: "==="
  },
  {
    question: "12. Which method selects array elements that satisfy a condition?",
    options: ["map()", "filter()", "join()", "push()"],
    answer: "filter()"
  },
  {
    question: "13. What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Document Oriented Module",
      "Digital Output Model"
    ],
    answer: "Document Object Model"
  },
  {
    question: "14. Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "15. Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    answer: "JSON.stringify()"
  },
  {
    question: "16. Which keyword is used to handle errors?",
    options: ["try...catch", "if...else", "for...of", "switch"],
    answer: "try...catch"
  },
  {
    question: "17. Which method selects the first array element that satisfies a condition?",
    options: ["map()", "filter()", "find()", "reduce()"],
    answer: "find()"
  },
  {
    question: "18. Which method is used to store data in localStorage?",
    options: ["localStorage.save()", "localStorage.setItem()", "localStorage.add()", "localStorage.push()"],
    answer: "localStorage.setItem()"
  },
  {
    question: "19. What does a Promise represent?",
    options: [
      "An HTML element",
      "The eventual result of an asynchronous operation",
      "A CSS selector",
      "A loop"
    ],
    answer: "The eventual result of an asynchronous operation"
  },
  {
    question: "20. Which keyword is used to wait for a Promise inside an async function?",
    options: ["wait", "defer", "await", "promise"],
    answer: "await"
  }
];
 var ramnumber=0
 var count=0
function result(count){
    var continer=document.querySelector(".continer")
        continer.innerHTML=``
        continer.innerHTML = `
        <h1 class="result">Result:</h1>
        <p>Your Score: ${count}</p>
        <button class="restart">ReAttempt</button>
    `;
     document.querySelector(".restart").addEventListener("click",restart)
     function restart(){
        startfunction(ramnumber=0)
     }
}
function startfunction() {
    if (ramnumber === questions.length) {
        result(count);
        return;
    }

    let continer = document.querySelector(".continer");

    continer.innerHTML = `
        <h1 class="titleQuiz">Quiz</h1>

        <p class="question">${questions[ramnumber].question}</p>

        <div class="list">
            ${questions[ramnumber].options.map((option) => `
                <div class="ansqu">
                    <input type="radio"
                           name="option"
                           value="${option}"
                           class="checkbox">

                    <p class="op1">${option}</p>
                </div>
            `).join("")}
        </div>

        <button class="next-btn">Next</button>
    `;

    document.querySelector(".next-btn").addEventListener("click", nextfunction);

    function nextfunction() {
        let selected = document.querySelector('input[name="option"]:checked');

        if (selected) {
            console.log("Selected Answer:", selected.value);

            if (selected.value === questions[ramnumber].answer) {
                count++;
                console.log(count)
                console.log("Correct Answer!");
            } else {
                console.log("Wrong Answer!");
            }

            ramnumber++;

            startfunction();

        } else {
            console.log("Please select an option!");
        }
    }
}