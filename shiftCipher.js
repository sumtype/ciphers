/* PRIMARY FUNCTIONS */
//This function generates a usable private key for use in the following encryption and decryption functions.
function privateKeyGenerator(alphabetLength) {
  return Math.floor(Math.random() * alphabetLength);
}

//This function encrypts a specified string using a shift ciper based on the alphabet used and the private key specified.
function encryptString(s, key, alphabet) {
  var output = '', alphabetLength = Object.keys(alphabet).length, alphabetIndexCharLookup = createAlphabetIndexCharLookup(alphabet);
  for (i = 0; i < s.length; i++) {
    if (alphabet.hasOwnProperty(s.charAt(i))) {
      var encryptedChar = alphabetIndexCharLookup[(alphabet[s.charAt(i)] + key) % alphabetLength];
      output += encryptedChar;
    }
  }
  return output;
}

//This function decrypts a specified string using a shift ciper based on the alphabet used and the private key specified.
function decryptString(s, key, alphabet) {
  var output = '', alphabetLength = Object.keys(alphabet).length, alphabetIndexCharLookup = createAlphabetIndexCharLookup(alphabet);
  for (i = 0; i < s.length; i++) {
    decryptedChar = alphabetIndexCharLookup[(alphabet[s.charAt(i)] - key + alphabetLength) % alphabetLength];
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
