# Javascript-
code repository for javascript code

🔁 for...of → Use when looping over values of an iterable (like arrays, strings, sets, etc.)
const arr = [10, 20, 30];

for (const num of arr) {
    console.log(num); // 10, 20, 30
}
✅ Best for:

Arrays

Strings

Maps, Sets

Anything iterable

❌ Not ideal for objects (won’t work directly).

🔁 for...in → Use when looping over keys (property names) of an object
const person = { name: "Wasif", age: 22 };

for (const key in person) {
    console.log(key, person[key]); // name Wasif, age 22
}
Best for:

Plain objects

Checking object properties

❌ Avoid for arrays unless you need indexes and don’t care about order or prototype properties.

🔁 .forEach() → Use when looping over arrays and want to use a callback
const arr = [1, 2, 3];

arr.forEach((num, index) => {
    console.log(index, num); // 0 1, 1 2, 2 3
});
✅ Best for:

Arrays (clean and readable)

When you want access to index or use arrow functions

❌ Can't use break or continue inside it
❌ Not for objects or async/await properly

| Loop Type      | Use For                   | Can Break? | Works With Objects? | Index Access |
|----------------|---------------------------|------------|----------------------|--------------|
| `for...of`     | Values of iterable items  | ✅ Yes     | ❌ No                | ❌ Not directly |
| `for...in`     | Keys in objects           | ✅ Yes     | ✅ Yes               | ✅ Keys      |
| `.forEach()`   | Array elements with callback | ❌ No     | ❌ No                | ✅ Yes       |
Great question! `for...of`, `for...in`, and `.forEach()` are **loops in JavaScript**, but they serve different purposes. Here's a clear breakdown:

---

### 🔁 `for...of` → **Use when looping over values of an iterable (like arrays, strings, sets, etc.)**

```javascript
const arr = [10, 20, 30];

for (const num of arr) {
    console.log(num); // 10, 20, 30
}
```

✅ Best for:
- Arrays
- Strings
- Maps, Sets
- Anything iterable

❌ Not ideal for objects (won’t work directly).

---

### 🔁 `for...in` → **Use when looping over keys (property names) of an object**

```javascript
const person = { name: "Wasif", age: 22 };

for (const key in person) {
    console.log(key, person[key]); // name Wasif, age 22
}
```

✅ Best for:
- Plain objects
- Checking object properties

❌ Avoid for arrays unless you need indexes and don’t care about order or prototype properties.

---

### 🔁 `.forEach()` → **Use when looping over arrays and want to use a callback**

```javascript
const arr = [1, 2, 3];

arr.forEach((num, index) => {
    console.log(index, num); // 0 1, 1 2, 2 3
});
```

✅ Best for:
- Arrays (clean and readable)
- When you want access to index or use arrow functions

❌ Can't use `break` or `continue` inside it  
❌ Not for objects or async/await properly

---

### 🧠 Summary Table:

| Loop Type      | Use For                   | Can Break? | Works With Objects? | Index Access |
|----------------|---------------------------|------------|----------------------|--------------|
| `for...of`     | Values of iterable items  | ✅ Yes     | ❌ No                | ❌ Not directly |
| `for...in`     | Keys in objects           | ✅ Yes     | ✅ Yes               | ✅ Keys      |
| `.forEach()`   | Array elements with callback | ❌ No     | ❌ No                | ✅ Yes       |

Would you like a visual example using all three on the same dataset to compare?