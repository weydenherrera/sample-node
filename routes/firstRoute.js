
import { firstController } from '../controller/firstController.js'
import { Router }  from 'express';
const route1 = Router();
route1.get('/', firstController);

export default route1 ;