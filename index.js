const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((elem) => {
    let letterWord = elem.split(" ");
    let letterArr = [];
    for (let i = 0; i < letterWord.length; i++) {
      let upperCased =
        letterWord[i].charAt(0).toUpperCase() + letterWord[i].slice(1);
      letterArr.push(upperCased);
    }
    return letterArr.join(" ");
  });
};
console.log(titleCased());
