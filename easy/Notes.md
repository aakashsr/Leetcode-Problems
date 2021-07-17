<h1>NOTES</h1>

## 1. Getting the maximum element of an array</h2>

*  **Array.reduce()** can be used to find the maximum element in a numeric array, by comparing each value:

```js
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
```

*  Using **spread** operator

```
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

* NOTE :  Using **spread** to find "MAX" will fail or return the wrong result if the array has too many elements
*   **reduce** solution does not have this problem.
