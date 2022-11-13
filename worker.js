import { workerData } from 'worker_threads';
import { wasteTime } from './waste-time.js';

wasteTime(workerData.load)

