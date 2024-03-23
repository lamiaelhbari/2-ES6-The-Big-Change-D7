// Challenge => Sum of Digits :
function digitalRoot(n) {
  
  // Convertir le nombre en chaîne de caractères pour travailler avec les chiffres individuellement
  let ConvertNumStr = n.toString();

  // Tant que le nombre a plus d'un chiffre
  while (ConvertNumStr.length > 1) {
    let sum = 0;

    // Calculer la somme des chiffres en utilisant une boucle
    for (let i = 0; i < ConvertNumStr.length; i++) {
      sum = sum + parseInt(ConvertNumStr[i]);
    }

    // Mettre à jour la chaîne avec la somme obtenue
    ConvertNumStr = sum.toString();
  }

  // Retourner le chiffre unique
  return parseInt(ConvertNumStr);
}
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));



