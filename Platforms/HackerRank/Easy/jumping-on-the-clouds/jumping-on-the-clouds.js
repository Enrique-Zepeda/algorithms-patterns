function jumpingOnClouds(c) {
  let jumps = 0; // número de saltos
  let i = 0; // posición actual

  // Mientras no esté en la última nube
  while (i < c.length - 1) {
    // Si puedo saltar 2 posiciones y la nube es segura, prefiero saltar 2
    if (i + 2 < c.length && c[i + 2] === 0) {
      i += 2;
    } else {
      // Si no puedo, salto 1
      i += 1;
    }

    // Cada movimiento aumenta el contador de saltos
    jumps++;
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // -> 4
