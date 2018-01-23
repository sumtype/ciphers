/* PRIMARY FUNCTIONS */
//This function generates a usable private key for use in the following encryption and decryption functions.
function privateKeyGenerator(alphabet, length) {
  var output = '', alphabetLength = Object.keys(alphabet).length, alphabetIndexCharLookup = createAlphabetIndexCharLookup(alphabet);
  for (i = 0; i < length; i++) {
    output += alphabetIndexCharLookup[Math.floor(Math.random() * alphabetLength)];
  }
  return output;
}

//This function encrypts a specified string using a vigenère cipher based on the alphabet used and the private key specified.
function encryptString(s, key, alphabet) {
  var output = '', alphabetLength = Object.keys(alphabet).length, alphabetIndexCharLookup = createAlphabetIndexCharLookup(alphabet), keyCounter = 0;
  for (i = 0; i < s.length; i++) {
    if (alphabet.hasOwnProperty(s.charAt(i))) {
      var encryptedChar = alphabetIndexCharLookup[(alphabet[s.charAt(i)] + alphabet[key.charAt(keyCounter)]) % alphabetLength];
      keyCounter += 1;
      if (keyCounter === key.length) keyCounter = 0;
      output += encryptedChar;
    }
  }
  return output;
}

//This function decrypts a specified string using a vigenère cipher based on the alphabet used and the private key specified.
function decryptString(s, key, alphabet) {
  var output = '', alphabetLength = Object.keys(alphabet).length, alphabetIndexCharLookup = createAlphabetIndexCharLookup(alphabet), keyCounter = 0;
  for (i = 0; i < s.length; i++) {
    decryptedChar = alphabetIndexCharLookup[(alphabet[s.charAt(i)] - alphabet[key.charAt(keyCounter)] + alphabetLength) % alphabetLength];
    keyCounter += 1;
    if (keyCounter === key.length) keyCounter = 0;
    output += decryptedChar;
  }
  return output;
}

/* UTILITY FUNCTIONS */
//This function sets up the alphabet's index => character lookup based on the specified alphabet's character => index lookup.
function createAlphabetIndexCharLookup(alphabetCharIndexLookup) {
  var output = [];
  for (var c in alphabetCharIndexLookup)
  {
    output[parseInt(alphabetCharIndexLookup[c])] = c;
  }
  return output;
};
