import { wasteTime } from "./waste-time.js";
import { NUMBER_OF_CALLS, LOAD_SEED } from './config.js'

// I know I know, duplicated code... I might fix it later :)
console.log('Single thread: ')
console.time('Current total time');
for(let i = 1; i <= NUMBER_OF_CALLS; i++){
    console.time(`Process ${i}`)
    wasteTime(LOAD_SEED);
    console.timeEnd(`Process ${i}`)
    console.timeLog('Current total time')
}


