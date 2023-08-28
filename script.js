function decimalToBinary(num) {
  const binary = [];
  let remainder = 0;
  let quotient = num;

  while (quotient !== 0) {
    remainder = quotient % 2;
    binary.push(remainder);
    quotient = Math.floor(quotient / 2);
  }

  binary.reverse();
  return binary.join("");
}

window.decimalToBinary = decimalToBinary;