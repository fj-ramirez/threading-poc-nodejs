
import { Worker } from "node:worker_threads"
import { NUMBER_OF_CALLS, LOAD_SEED } from './config.js' 

// I know I know, duplicated code... I might fix it later :)
console.log('Worker threads: ')
console.time('Current total time')
for(let i = 1; i <= NUMBER_OF_CALLS; i++){
    console.time(`Process ${i}`)
    const worker1 = new Worker('./worker', { 
        workerData: { load: LOAD_SEED } 
    });
    worker1.on('exit', () => {
        console.timeEnd(`Process ${i}`);
        console.timeLog('Current total time'); 
    });
}
