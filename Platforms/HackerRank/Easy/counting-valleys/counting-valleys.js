// Mejor Solucion
function countingValleys(steps, path) {
  let level = 0; // nivel del mar
  let valleys = 0; // cuántos valles he terminado

  for (const step of path) {
    // si subo
    if (step === "U") {
      level++; // primero actualizo la altura

      // si acabo de regresar a nivel 0, venía desde un valle
      if (level === 0) {
        valleys++;
      }
    } else {
      // si bajo
      level--;
    }
  }

  return valleys;
}
console.log(countingValleys(8, "UDDDUDUU"));

// ---------------- Mi primera Solucion ------------------------
function countingValleysMiSolution(steps, path) {
  // Write your code here
  let valleys = 0;
  let level = 0;

  const ar = [...path];
  ar.forEach((pasos) => {
    if (pasos === "U" && level + 1 === 0) {
      valleys++;
    }
    if (pasos === "D") {
      level--;
    } else {
      level++;
    }
  });
  return valleys;
}
console.log(countingValleysMiSolution(8, "UDDDUDUU"));
