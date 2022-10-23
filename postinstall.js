const childProcess = require('child_process');

childProcess.execSync('npm install');
childProcess.execSync('npm run build');
