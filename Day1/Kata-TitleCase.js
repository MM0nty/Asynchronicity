const titleCase  = function(text) {
  // Your code in here ...
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      newText += text[i].toUpperCase()
    }
    else if (text[i-1] === " ") {
      newText += text[i].toUpperCase();
    } else {
      newText += text[i].toLowerCase();
    }
  }
  console.log(newText);
  return newText;
};

titleCase("AB");
titleCase("HI YO");
titleCase("hAndlE wEIrd vOwEl cAsE");
titleCase("ALL UPPER CASE WORDS");
titleCase("all lower case words");
titleCase("i r cool");
