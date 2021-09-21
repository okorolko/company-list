const Koa = require("koa");
const cors = require('@koa/cors');
const Router = require("koa-router");
const handlers = require("./handlers");

const app = new Koa();
const router = new Router();

app.use(cors())  

router.get("/company", handlers.getCompanies);

app.use(router.routes());

app.listen(3500);
