export function gerarOrderRandomica() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let code = 'VLO-';
  for (let i = 0; i < 5; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    code += Math.random() < 0.5 ? randomLetter : randomNumber;
  }
  return code;
}