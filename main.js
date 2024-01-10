var body = document.body;
body.style.backgroundImage = "url('./images/backgroundyellow.jpg')";
var quote = document.querySelector(".quote");
quote.style.fontSize="20px";
var person = document.querySelector(".person");

var btn = document.querySelector(".btn");
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",

    person: "_Steve Jobs"
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",

    person: "_Winston Churchill"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life",

    person: "_Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there",

    person: "_Theodore Roosevelt"
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today",

    person: "_Franklin D. Roosevelt"
  },
  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm",

    person: "_Winston Churchill"
  },
  {
    quote: "The only way to do great work is to love what you do.",

    person: "Steve Jobs"
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",

    person: "_Eleanor Roosevelt"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going",

    person: "_Sam Levenson"
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work",

    person: "_Steve Jobs"
  },
  {
    quote: "In the middle of difficulty lies opportunity..",

    person: "_Albert Einstein"
  },
];
//user click new quote
const newquote = () => {
  // document.querySelector('.btn').innerText = 'clicked!';
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  
  person.innerText = quotes[random].person;
  
};
btn.addEventListener("click", () => {
  newquote();
});
