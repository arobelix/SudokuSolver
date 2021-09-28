const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Sudoku Solver');
    res.end();
});

server.listen(3000, () => console.log('Server Running'));