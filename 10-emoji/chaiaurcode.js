const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

btn.onmouseover = function () {
  let i = Math.floor(Math.random() * emojis.length + 1);
  btn.textContent = emojis[i];
};
