# Ciphers

A pair of cipher algorithms.

## Shift Cipher Encryption and Decryption
This is a simple set of functions to generate a private key, encrypt a string, and decrypt a string based on a specified alphabet composed of key value pairs using a shift cipher.  The alphabet must only use keys one character in length in this implementation.

### Primary Functions

#### privateKeyGenerator(alphabetLength)

This function randomly generates and returns a valid private key integer based on a specified alphabet length, [alphabetLength].

#### encryptString(string, privateKey, alphabet)

This function encrypts a string type variable, [string], using an integer type variable, [privateKey], and an object with key value pairs where each key is one character in length using a shift cipher.

#### decryptString(string, privateKey, alphabet)

This function encrypts a string type variable, [string], using an integer type variable, [privateKey], and an object with key value pairs where each key is one character in length using a shift cipher.

### Example

The following code will console log the unencrypted string, the private key which will be used in the shift cipher, the encrypted string, and the decrypted string.  It uses a variable, alphabet, to define the alphabet of one length characters to be used by the cipher.  In this case, the English alphabet.

    var alphabet = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25};
    var demoString = 'unshifted';
    var demoKey = privateKeyGenerator(Object.keys(alphabet).length);
    var demoEncryptedString = encryptString(demoString, demoKey, alphabet);
    var demoDecryptedString = decryptString(demoEncryptedString, demoKey, alphabet);
    console.log('Unencrypted String: ' + demoString);
    console.log('Private Key: ' + demoKey);
    console.log('Encrypted String: ' + demoEncryptedString);
    console.log('Decrypted String: ' + demoDecryptedString);


## Vigenère Cipher Encryption and Decryption
This is a simple set of functions to generate a private key, encrypt a string, and decrypt a string based on a specified alphabet composed of key value pairs using a vigenère cipher.  The alphabet must only use keys one character in length in this implementation.

### Primary Functions

#### privateKeyGenerator(alphabet, length)

This function randomly generates and returns a valid private key string of a specified integer length, [length], composed of characters in the specified alphabet, [alphabet].

#### encryptString(string, privateKey, alphabet)

This function encrypts a string type variable, [string], using a string type variable, [privateKey], and an object with key value pairs where each key is one character in length using a vigenère cipher.

#### decryptString(string, privateKey, alphabet)

This function encrypts a string type variable, [string], using an integer type variable, [privateKey], and an object with key value pairs where each key is one character in length using a vigenère cipher.

### Example

The following code will console log the unencrypted string, the private key which will be used in the vigenère cipher, the encrypted string, and the decrypted string.  It uses a variable, alphabet, to define the alphabet of one length characters to be used by the cipher.  In this case, the English alphabet.

    var alphabet = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25};
    var demoString = 'unshifted';
    var demoKey = privateKeyGenerator(alphabet, demoString.length);
    var demoEncryptedString = encryptString(demoString, demoKey, alphabet);
    var demoDecryptedString = decryptString(demoEncryptedString, demoKey, alphabet);
    console.log('Unencrypted String: ' + demoString);
    console.log('Private Key: ' + demoKey);
    console.log('Encrypted String: ' + demoEncryptedString);
    console.log('Decrypted String: ' + demoDecryptedString);
