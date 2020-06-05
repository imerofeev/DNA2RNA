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
        return "Entered data is not RNA chain";
    }
  }
  return dna;
};

export default rnaToDna;
