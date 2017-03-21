function pigLatinTranslator () {

  function toPigLatin () {

    function isVowel (input) {
      var word = input.split("");
      for (var i = 0; i < word.length; i++) {
        if (word[0]==='a' || word[0]==='e' || word[0]==='i' || word[0]==='o' || word[0]==='u') {
          return true;
        }
          return false;
      }
    }

    function toPig (input) {
      if (isVowel(input) === true) {
        input += '-ay';
        return input;
      }
        var word = input.split("");
        var firstLetter = word.shift();
        word.push('-' + firstLetter + 'ay');
        var output = word.join("");
        return output;
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

  return {
    toPigLatin: toPigLatin()
  };
}


var hi = pigLatinTranslator();
console.log(hi.toPigLatin.translate("hi"));