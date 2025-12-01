# Nombre del problema

Plataforma: HackerRank  
Link: (https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
Dificultad: Fácil  
Lenguaje: JavaScript

## Resumen del problema

Tengo que encontrar los pares de calcetines que existen y retornar cuantos pares existen, n son el numero de calcetines que exiten y arr es el arreglo de calcetines

## Idea clave

Usar un Hash map (conteo) para contar el numero de colores que existen de cada calcetines y depues dividir entre 2 cada color de calcetin quitando los decimales
hacia abajo y sumarlos para saber el numero correcto de calcetines

## Patrón

Hash map (conteo de frecuencias)

## Estructuras de datos y técnicas

- Objeto como hash map para frecuencias
- Recorrido lineal del arreglo
- Uso de `Math.floor` para obtener pares completos

## Cómo reconocería este patrón la próxima vez

Pistas para identificar que puedo usar conteo con hash map:

- Me piden contar **pares** o **grupos** formados por elementos repetidos.
- El orden de los elementos **no importa**, solo cuántas veces aparecen.
- La solución obvia con doble bucle sería O(n²) y quiero algo O(n).
- Puedo llevar un conteo por cada valor distinto (color, número, letra, etcétera).

## Pasos de la solución

1. Crear un objeto vacío `freq` para guardar cuántas veces aparece cada color.
2. Recorrer el arreglo `ar` y, para cada calcetín, incrementar `freq[color]` usando `freq[color] = (freq[color] || 0) + 1`.
3. Crear una variable `pairs` inicializada en 0.
4. Recorrer las llaves del objeto `freq` y, para cada color, sumar a `pairs` el valor de `Math.floor(freq[color] / 2)`.
5. Devolver `pairs` como el número total de pares de calcetines.

## Complejidad

Tiempo O(n)  
Espacio O(n)

## Código final

Aquí va la solución limpia y comentada en el lenguaje que use.
function sockMerchant(n, ar) {
const freq = {};

for (const sock of ar) {
freq[sock] = (freq[sock] || 0) + 1;
}

let pairs = 0;
for (const color in freq) {
pairs += Math.floor(freq[color] / 2);
}

return pairs;
}

## Errores o bloqueos que tuve

- Me atoré porque no sabía bien cómo usar un objeto para llevar el conteo de forma correcta.
- Intenté usar Object.keys(socks) === sock, pero Object.keys devuelve todas las llaves en un arreglo, no la llave actual, así que esa comparación nunca iba a funcionar.

## Aprendi

- Para contar frecuencias es mejor usar freq[llave] = (freq[llave] || 0) + 1.
- Debo practicar más el uso de objetos como mapas y cómo recorrerlos con for...in.
