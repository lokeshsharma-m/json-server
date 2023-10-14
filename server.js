const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('cities.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3500;

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});


