const quotes = [
    {
        quote: "the way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Be who you are and say what you fell, because those who mind don't matter and thos who matter don't mind.",
        author: "Dr.Seuss",
    },
    {
        quote: "Life is what happens whe you are busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "It's never too late to do the right things.",
        author: "Nicholas Sparks",
    },
    {
        quote: "Once you've accepted your flaws, no one can use them against you.",
        author: "Tyrion Lannister",
    },
    {
        quote: "Two things define you: your patience when you hav nothing and your attitude when you have everything.",
        author: "George Bernard Shaw",
    },
    {
        quote: "The primary cause of unhappiness is never the situation but your thoughts about it.",
        author: "Eckhart Jolle",
    },
    {
        quote: "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown",
    },
    {
        quote: "You have to learn the rules of the game. And then you have to play better than anyone else.",
        author: "Albert Einstein",
    },
    {
        quote: "Life is short, break the rules, forgive quickly, kiss slowly, love truly, laugh uncontrollably, and never regret anything that made you smile.",
        author: "Mark Twain"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Never go on trips with anyone you don't love.",
        author: "Hemmingway",
    },
];

const quote = document.querySelector(".quote div:first-child");
const author = document.querySelector(".quote div:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
