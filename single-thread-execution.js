import { wasteTime } from './waste-time.js';
import { executor } from './executor.js';

executor((loadSeed, onProcessExit) => {
    wasteTime(loadSeed);
    onProcessExit();
} , 'Single thread');


