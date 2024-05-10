document.getElementById('encryptButton').addEventListener('click', function() {
    const text = document.getElementById('plainText').value;
    const shift = parseInt(document.getElementById('shiftAmount').value, 10);
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('returnText').value = encryptedText;
  });

function caesarCipher(str, shift) {
    let returnText = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90))
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        else if ((code >= 97) && (code <= 122))
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      returnText += char;
    }
    return returnText;
}

document.getElementById('copyText').addEventListener('click', function() {
    const textToCopy = document.getElementById('returnText').value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const text = document.getElementById('returnText').value;
    const shift = parseInt(document.getElementById('shiftAmount').value, 10);
    const decryptedText = caesarCipher(text, -shift);
    document.getElementById('plainText').value = decryptedText;
  });