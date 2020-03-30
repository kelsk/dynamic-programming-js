function newmanConway(num) {
  if (num === 0) {
    throw new Error("0 is not in the sequence")
  }
  const seq = [];

  seq[1] = 1;
  seq[2] = 1

  if (num == 1 || num == 2) return seq.splice(1, num).join(' ');
  
  for (let i = 3; i <= num; i++) {
    seq[i] = seq[seq[i - 1]] + seq[i - seq[i - 1]];
  }

  return seq.splice(1, num).join(' ')
}

module.exports = {
  newmanConway
};