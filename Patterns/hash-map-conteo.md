# Hash map (conteo de frecuencias)

## Idea del patrón

Usar una estructura tipo **mapa** (objeto o `Map`) para contar cuántas veces aparece cada valor en una colección.  
Primero convierto el arreglo o string en un mapa de **valor → frecuencia**, y luego resuelvo el problema usando esas frecuencias.

---

## Cuándo usarlo

Piensa en este patrón cuando:

- Importa **cuántas veces** aparece cada elemento.
- El **orden** de los elementos no es tan importante, pero las cantidades sí.
- La solución ingenua sería usar **dos ciclos anidados** para comparar todo con todo.
- El enunciado habla de:
  - pares
  - grupos
  - elementos repetidos
  - “más frecuente”, “al menos k veces”, “mismas letras”, etcétera.

Ejemplos típicos:

- Contar pares de elementos iguales (como **Sock Merchant**).
- Ver si dos strings son anagramas.
- Encontrar el elemento que más se repite.
- Verificar si hay duplicados.

---

## Plantilla mental (pseudocódigo)

1. Crear un mapa vacío `freq`.
2. Recorrer la colección.
3. Para cada elemento `x`, hacer `freq[x]++` (o inicializar en uno si no existe).
4. Usar `freq` para calcular la respuesta:
   - sumar pares
   - comparar frecuencias
   - buscar máximos, etcétera.

---

## Implementación típica en JavaScript (Object)

### Contar frecuencias

```js
const freq = {};

for (const x of arr) {
  // Si ya existe freq[x], lo usa; si no, toma 0 y suma 1
  freq[x] = (freq[x] || 0) + 1;
}
```
