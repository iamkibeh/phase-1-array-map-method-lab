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
  // return  tutorials.map((elem)=>{
  //   let splitElem = elem.split(" ");
  //   let newArr = []
  //   for (let index = 0; index < splitElem.length; index++) {
  //     const element = splitElem[index];
  //    newArr.push(element.charAt(0).toUpperCase().concat(`${splitElem[index].slice(1)}`))
  //   }
  //  return newArr.join(" ")
  // })
};
console.log(titleCased());
