
import { Worker } from 'node:worker_threads'
import { executor } from './executor.js';

executor((loadSeed, onProcessExit) => {
    const worker = new Worker('./worker', { 
        workerData: { load: loadSeed } 
    });
    worker.on('exit', onProcessExit);
},'Worker threads');



