const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];

  if (!isDeleting) {
    typedTextSpan.textContent += word[charIndex];
    charIndex++;
    if (charIndex === word.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  } else {
    erase();
  }
}

function erase() {
  const word = words[wordIndex];

  typedTextSpan.textContent = word.substring(0, charIndex - 1);
  charIndex--;
  if (charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % word.length;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}

type();
