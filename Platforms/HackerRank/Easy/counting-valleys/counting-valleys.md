# Nombre del problema

Plataforma: HackerRank  
Link: (https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
Dificultad: Fácil  
Lenguaje: JavaScript

## Resumen del problema

Dado un número de pasos `steps` y un string `path` con letras `"U"` (subir) y `"D"` (bajar), tengo que contar cuántos **valles completos** recorre el caminante.  
Un valle es una secuencia de pasos por debajo del nivel del mar que empieza en nivel 0 y termina cuando vuelve a nivel 0.

## Idea clave

Llevar un contador de altura (`level`) que sube con `"U"` y baja con `"D"`.  
Cada vez que doy un paso `"U"` y, después de ese paso, el nivel vuelve a ser `0`, significa que acabo de salir de un valle, así que incremento el contador de `valleys`.

## Patrón

running sum / contador de estado

## Estructuras de datos y técnicas

- Variables simples (`level`, `valleys`)
- Bucle `for...of` para recorrer el string
- Condicionales `if` para actualizar el estado

## Cómo reconocería este patrón la próxima vez

Pistas para identificar que puedo usar running sum:

- Me piden seguir un recorrido donde algo sube y baja (altura, saldo, balance, etcétera).
- Me importa saber cuándo cruzo cierto nivel (por ejemplo, cero).
- Puedo modelar el problema con una variable que se va acumulando paso a paso.

## Pasos de la solución

1. Crear dos variables: `level` (nivel actual) y `valleys` (valles recorridos).
2. Recorrer el string `path` carácter por carácter.
3. Si el paso es `"U"`, incrementar `level`; si es `"D"`, decrementar `level`.
4. Cada vez que el paso es `"U"` y después de sumarlo `level` queda en `0`, incrementar `valleys`.
5. Devolver `valleys`.

## Complejidad

Tiempo: O(n), donde `n` es el número de pasos.  
Espacio: O(1), uso solo un par de variables.

## Código final

Aquí va la solución limpia y comentada en el lenguaje que use.
function countingValleys(steps, path) {
let level = 0;
let valleys = 0;

for (const step of path) {
if (step === "U") {
level++;

      if (level === 0) {
        valleys++;
      }
    } else {
      level--;
    }

}

return valleys;
}
console.log(countingValleys(8, "UDDDUDUU"));

## Errores o bloqueos que tuve

- Me atoré al principio al pensar la lógica y entender bien la definición de valle.

## Aprendi

- Que puedo iterar directamente sobre un string con for...of sin convertirlo a array.
- Que llevar una suma acumulada (running sum) es muy útil para problemas de recorridos donde algo sube y baja.
