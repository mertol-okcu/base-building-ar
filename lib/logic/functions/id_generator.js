export function createId(length = 16) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const timestampLength = Math.floor(length/2); // Adjust the length of timestamp part
  const digitsLength = length - 1 - timestampLength; // Subtract 1 for initial letter

  const randomLetter = letters.charAt(
    Math.floor(Math.random() * letters.length)
  );

  const timestamp = Date.now().toString(36).slice(-timestampLength);

  const randomDigits = Math.random()
    .toString(36)
    .substring(2, digitsLength + 2);

  return `${randomLetter}${timestamp}${randomDigits}`;
}
