const quotes = [
  {
    quote:
      "Indolence is a delightful but distressing state. We must be doing something to be happy.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until its done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo",
  },
  {
    quote:
      "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
    author: "Andrew Carnegie",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
