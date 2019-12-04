const fs = require('fs');
const theme = require('./theme');

const name = 'CodeSandbox Black-color-theme.json';

fs.writeFileSync('./themes/' + name, JSON.stringify(theme, null, 2));
