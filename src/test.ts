import { exec } from 'child_process';

console.log('hello');

exec('python', (err, stdout, sterr) => console.log(stdout));
