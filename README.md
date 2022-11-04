# threading-poc-nodejs
Playing with worker threads in Node.JS.
# Usage
Single thread: `node single-thread-execution.js`
<br>
Worker threads: `node worker-execution.js`
<br>
<br>
You can set the execution conditions in `config.js`:
```
// How many are we calling the slow function?
export const NUMBER_OF_CALLS = {{integer}};
// How slow do you want the function to be? (Bigger === Slower)
export const LOAD_SEED = {{integer}};
```
# Example results
Using parameters:
```
NUMBER_OF_CALLS = 5;
LOAD_SEED = 14;
```
Results:
```
Single thread: 
Process 1: 13.033s
Current total time: 13.033s
Process 2: 13.164s
Current total time: 26.197s
Process 3: 13.122s
Current total time: 39.319s
Process 4: 13.085s
Current total time: 52.404s
Process 5: 13.078s
Current total time: 1:05.482 (m:ss.mmm)
```
```
Worker threads: 
Process 1: 27.806s
Current total time: 27.809s
Process 2: 28.142s
Current total time: 28.145s
Process 3: 28.219s
Current total time: 28.223s
Process 4: 28.309s
Current total time: 28.313s
Process 5: 28.334s
Current total time: 28.339s
```
