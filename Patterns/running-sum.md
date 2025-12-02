# Running sum / Contador de estado

## Idea del patrón

Llevar una variable que representa un **estado acumulado** (por ejemplo altura, saldo, diferencia, balance) e ir actualizándola paso a paso.  
La solución del problema se basa en cómo cambia ese estado y en detectar momentos especiales, como cuando cruza cierto valor (por ejemplo cero).

---

## Cuándo usarlo

Piensa en este patrón cuando:

- El problema describe un **recorrido** o proceso paso a paso.
- Cada paso **aumenta o disminuye** un valor.
- Te preguntan por:
  - cuándo vuelves a un cierto nivel
  - cuándo el valor se vuelve positivo o negativo
  - máximos o mínimos de ese estado acumulado

Ejemplos típicos:

- Contar valles o montañas en una caminata (altura que sube y baja).
- Llevar el balance de paréntesis abiertos y cerrados.
- Llevar el saldo de puntos, dinero, diferencia entre dos equipos, etcétera.
- Detectar momentos en que el estado cruza un límite (por ejemplo pasar de negativo a cero).

---

## Plantilla mental (pseudocódigo)

1. Definir una variable de estado, por ejemplo `estado = 0`.
2. Recorrer la secuencia de pasos.
3. En cada paso:
   - actualizar el estado (sumar o restar, o aplicar la regla que toque)
   - revisar si se cumple alguna condición interesante sobre el estado.
4. Usar esas condiciones para contar, registrar o devolver la respuesta.

---

## Implementación típica en JavaScript

Ejemplo genérico:

```js
let estado = 0;

for (const paso of pasos) {
  // Actualizar el estado según el tipo de paso
  if (paso === "U") {
    estado++;
  } else {
    estado--;
  }

  // Revisar condiciones sobre el estado
  // if (estado === 0) { ... }
}
```
