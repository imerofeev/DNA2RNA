const rnaToDna = (rna) => {
  if (rna.length === 0) throw new TypeError("Entered data is empty");
  let rna = "";
  rna = rna.toUpperCase();
  for (let i = 0; i < rna.length; i++) {
    switch (rna[i]) {
      case "C":
        dna += "G";
        break;
      case "G":
        dna += "C";
        break;
      case "A":
        dna += "T";
        break;
      case "U":
        dna += "A";
        break;
      default:
        throw new Error("Wrong nucleotide");
    }
  }
  return dna;
};

export default rnaToDna;
