
//index.mjs
 
import express from 'express';
import route1 from './routes/firstRoute.js'
import route2 from './routes/secondRoute.js'
const app = express();

app.use(route1);
app.use(route2);
// app.get('/', myRouteHandler)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})