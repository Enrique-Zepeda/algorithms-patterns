# algorithms-patterns

Reconocer patrones en los algoritmos

# Biblioteca de algoritmos y patrones

Repositorio personal para estudiar algoritmos de entrevistas técnicas.

Aquí no solo guardo soluciones, sino la **idea clave**, el **patrón** y los **errores que cometí**, para entrenar el reconocimiento de patrones en lugar de memorizar código suelto.

---

## Objetivos del repositorio

- Construir una **librería de patrones** (sliding window, two pointers, hash map, etcétera).
- Registrar **cada problema** que resuelvo con:
  - idea clave
  - patrón principal
  - estructuras de datos usadas
  - complejidad
  - errores o bloqueos
- Conectar este repo con otras herramientas:
  - Tabla en **Notion** para estadísticas y filtros
    - [Problemas de algoritmos – Notion](https://www.notion.so/Problemas-de-algoritmos-2bc87a0449ed80cca6dbfc773635fbd6?source=copy_link)
  - **Flashcards** para entrenar el “radar de patrones”
    - [Deck Algorithms-Patterns – Gizmo](https://gizmo.ai/deck/57367182?p=fngDLG-N5HU&t=1&featureId=2&deckName=Algorithms-Patterns&deckColour=fb7185&senderName=Enrique%20Zepeda&senderUserId=12428342)

---

## Estructura del proyecto

La estructura puede crecer con el tiempo, pero la base es:

.
├── README.md
├── patterns/
│ ├── sliding-window.md
│ ├── two-pointers.md
│ ├── hash-map.md
│ └── ...
├── platforms/
│ ├── hackerrank/
│ │ ├── easy/
│ │ │ └── nombre-problema/
│ │ │ ├── nombre-problema.js
│ │ │ └── nombre-problema.md
│ │ ├── medium/
│ │ └── hard/
│ └── leetcode/
│ ├── easy/
│ ├── medium/
│ └── hard/
└── flashcards/
├── patterns.txt
└── data-structures.txt

## Plantilla para problemas

# Nombre del problema

Plataforma: LeetCode  
Link: https://leetcode.com/problems/XXXXXXXX  
Dificultad: Fácil  
Lenguaje: JavaScript

## Resumen del problema

Explico el problema en dos o tres frases con mis propias palabras.

## Idea clave

Una frase corta que resuma la esencia de la solución.  
Ejemplo  
Usar un hash map para guardar valores vistos y encontrar el complemento en O(1).

## Patrón

Patrón principal  
por ejemplo  
hash map para conteo o búsqueda  
two pointers  
sliding window  
binary search  
dfs  
bfs  
dp

Si aplica  
Patrón secundario.

## Estructuras de datos y técnicas

- Array
- Hash map
- Set
- Stack
- Queue
- Árbol
- Grafo

## Cómo reconocería este patrón la próxima vez

Puntos que me ayuden a identificarlo en otro enunciado, por ejemplo:

- Me piden saber si existe un par que cumple una condición.
- Quieren evitar usar dos ciclos anidados.
- Puedo guardar información de lo que ya vi en un mapa.

## Pasos de la solución

1. Paso uno.
2. Paso dos.
3. Paso tres.

## Complejidad

Tiempo O(n)  
Espacio O(n)

## Código final

```js
// Solución limpia y comentada
```
