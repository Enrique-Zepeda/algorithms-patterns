function sockMerchant(n, ar) {
  // Objeto para contar cuántas veces aparece cada color
  const freq = {};

  // Recorremos el arreglo y contamos cada color
  for (const sock of ar) {
    // Si ya existe, sumamos 1; si no, empezamos en 1
    freq[sock] = (freq[sock] || 0) + 1;
  }

  // Contador de pares
  let pairs = 0;

  // Recorremos cada color en el objeto de frecuencias
  for (const color in freq) {
    // Cada 2 calcetines forman 1 par → dividimos entre 2 y redondeamos hacia abajo
    pairs += Math.floor(freq[color] / 2);
  }

  // Devolvemos el número total de pares
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
