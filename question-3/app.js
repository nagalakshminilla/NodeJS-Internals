import os from 'os';
import fs from 'fs/promises';

async function runApp() {
  try {
    console.log('Free Memory:', os.freemem());
    console.log('Total CPU Cores:', os.cpus().length);
    await fs.writeFile('data.txt', 'Hello World');
    console.log('data.txt created');
    await fs.writeFile('Readme.md', '## This is first line in Readme');
    console.log('Readme.md created');
    const data = await fs.readFile('data.txt', 'utf-8');
    console.log('Content of data.txt:', data);
    await fs.appendFile('data.txt', '\nThis is second line');
    console.log('Content appended to data.txt');
    await fs.unlink('Readme.md');
    console.log('Readme.md deleted');

  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}
runApp();
