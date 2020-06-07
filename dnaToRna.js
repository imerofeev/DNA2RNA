const dnaToRna = (dna) => {
  if (dna.length === 0) throw new TypeError("Empty data");
  let rna = "";
  dna = dna.toUpperCase();
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
      default:
        throw new Error("Wrong nucleotide");
    }
  }
  return rna;
};

export default dnaToRna;
