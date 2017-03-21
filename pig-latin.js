function toPigLatin () {

  function isVowel (input) {
    input = input.toLowerCase();
    var word = input.split("");
    for (var i = 0; i < word.length; i++) {
      if (word[0]==='a' || word[0]==='e' || word[0]==='i' || word[0]==='o' || word[0]==='u') {
        return true;
      } else if (word[0]==='y') {
        return null;
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

  function fromPig (input) {
    var word = input.split("");
    var i = 0;
    do {
      i++;
    } while (word[i] !== '-');
    var firstSound = word.splice(i);
    var firstLetter = firstSound.splice(1, firstSound.length - 3).join("");
    word.unshift(firstLetter);
    return word.join("");
  }

  function translate (input) {
    var sentence = input.split(" ");
    var words = [];
    for (var i = 0; i < sentence.length; i++) {
      var word = fromPig(sentence[i]);
      words.push(word);
    }
    return words.join(" ");
  }

  return {
    fromPig: fromPig,
    translate: translate
  };
}
var yeah = fromPigLatin();
console.log(yeah.translate('ey-hay ou-yay otherfucker-may'));