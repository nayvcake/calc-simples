# Simple Calculator
A simple calculator with low memory usage and cpu and output return with simple data.


```js
const calc = new SimpleCalculator()


console.log(calc.start('12*25'))
```

## Result
```js
{ 
    error: false, 
    errorInfo: 0, 
    time: 1, 
    input: '12 * 25', 
    result: 300 
}
```


## Error

- ErrorInfo - 0 (It means that results were performed normally and without error.)
- ErrorInfo - 1 (When the rope is empty you need to enter an entry!)
- ErrorInfo - 2 (The library has detected that there is a letter.)
- ErrorInfo - 3 (It seems that mathematics is totally wrong)
- ErrorInfo - 4 (There was a problem with the library. Open a problem to solve the problem!)

## How does the library work?
The results are released by an eval and to protect against bad entry for this there are 3 errors to save from a broken code or end up doing something you can't in the eval. If there is any type of leak try opening an issue to solve the problem as soon as possible!
