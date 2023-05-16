const character = prompt("Enter a character:");

if (character.match(/[a-z]/)) {
  if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
    document.write("The character is a vowel.");
  } else {
    document.write("The character is a consonant.");
  }
} else {
  document.write("Invalid character.");
}