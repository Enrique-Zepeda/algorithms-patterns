# Nombre del problema

Plataforma: HackerRank  
Link: (https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
Dificultad: Fácil  
Lenguaje: JavaScript

## Resumen del problema

Tengo que llegar desde la primera nube hasta la última usando el **mínimo número de saltos**.  
Cada posición del arreglo representa una nube:

- `0` = nube segura
- `1` = nube peligrosa

Solo puedo pararme en nubes `0` y en cada movimiento puedo saltar 1 o 2 posiciones, siempre evitando caer en una nube `1`.

## Idea clave

Llevar un índice que representa mi posición actual y, en cada paso, **intentar saltar dos nubes si es seguro**.  
Si no puedo saltar dos (porque me salgo del arreglo o caería en un `1`), salto una.  
Cada vez que salto, incremento el contador de `jumps`.  
Como todos los saltos cuestan lo mismo, avanzar lo máximo posible de forma segura minimiza el número total de saltos.

## Patrón

Greedy lineal / avanzar lo máximo posible de forma segura

## Estructuras de datos y técnicas

- Arreglo de enteros (`0` y `1`)
- Variables simples (`i` para el índice y `jumps` para los saltos)
- Bucle (`while` o `for`) con condicionales para decidir si avanzo 1 o 2 posiciones

## Cómo reconocería este patrón la próxima vez

Pistas para identificar este tipo de greedy lineal:

- Tengo un **camino lineal** (arreglo) y una posición actual.
- Puedo avanzar **1 o más pasos fijos** (por ejemplo 1 o 2) y todos los movimientos **cuestan lo mismo**.
- Hay casillas “prohibidas” o malas que debo evitar.
- Me piden **minimizar el número de movimientos** y las decisiones se pueden tomar mirando solo las casillas cercanas (localmente).

## Pasos de la solución

1. Crear una variable `jumps` en 0 para contar los saltos.
2. Crear una variable `i` en 0 para representar la posición actual.
3. Mientras `i` no haya llegado a la última nube:
   - Si puedo saltar dos posiciones y la nube `i + 2` es segura (`0`), hacer `i += 2`.
   - En caso contrario, hacer `i += 1`.
   - Después de cada movimiento, incrementar `jumps`.
4. Devolver `jumps` como número mínimo de saltos.

## Complejidad

Tiempo: O(n), donde `n` es el número de nubes.  
Espacio: O(1), solo uso variables simples para índice y contador.

## Código final

```js
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
```

## Errores o bloqueos que tuve

- Al inicio me bloqueé pensando en una solución complicada y no veía claro cómo minimizar los saltos.
- Tenía la idea de recorrer el arreglo y revisar si el siguiente índice era 1, pero no sabía cómo manejar de forma correcta el avance de 2 posiciones.
- Cometí el error de dejar que el bucle actualizara el índice automáticamente en lugar de controlarlo manualmente como requiere este problema.

## Aprendi

- Que puedo controlar el índice manualmente dentro del bucle (i += 1 o i += 2) en lugar de depender siempre de i++.
- A pensar de forma greedy: si todos los movimientos cuestan lo mismo, avanzar lo más lejos posible de forma segura ayuda a minimizar el número total de pasos.
- Que muchos problemas de caminos lineales se resuelven tomando buenas decisiones locales (mirando solo 1 o 2 posiciones adelante).
