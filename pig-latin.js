function toPigLatin () {

  function isVowel (input) {
    input = input.toLowerCase();
    var word = input.split("");
    for (var i = 0; i < word.length; i++) {
      if (word[0]==='a' || word[0]==='e' || word[0]==='i' || word[0]==='o' || word[0]==='u') {
        return true;
      }
        return false;
    }
  }

  function toPig (input) {
      input += '-';
      while (isVowel(input) === false) {
        var word = input.split("");
        var firstSound = word.shift();
        word.push(firstSound);
        input = word.join("");
      }
      input += 'ay';
      return input;
  }

  function translate (input) {
    var sentence = input.split(" ");
    var words = [];
    for (var i = 0; i < sentence.length; i++) {
      var word = toPig(sentence[i]);
      words.push(word);
    }
    return words.join(" ");
  }

  return {
    isVowel: isVowel,
    toPig: toPig,
    translate: translate
  };
}

function fromPigLatin () {

}
var yeah = toPigLatin();
console.log(yeah.translate('Hey There Uganda'));