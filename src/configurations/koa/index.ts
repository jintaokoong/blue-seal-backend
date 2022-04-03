import Koa from 'koa';
import Router from 'koa-router';
import root from './root-router';

const app = new Koa();

const router = new Router();

router.use('/', root.routes());

app.use(router.routes());

export default app;
