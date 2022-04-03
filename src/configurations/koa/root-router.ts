import Router from 'koa-router';

const root = new Router();

root.get('/', (context) => {
  context.message = 'server is up!';
});

export default root;
