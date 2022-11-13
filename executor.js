import { NUMBER_OF_CALLS, LOAD_SEED } from './config.js' 

export const executor = (executeFunc, label) => {
    console.log(`${label}: `)
    console.time('Current total time');
    for(let i = 1; i <= NUMBER_OF_CALLS; i++){
        console.time(`Process ${i}`)
        executeFunc(LOAD_SEED, () => {
            console.timeEnd(`Process ${i}`)
            console.timeLog('Current total time')
        });
        
    }
}




