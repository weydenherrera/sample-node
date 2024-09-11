
import { secondController, processController } from '../controller/secondController.js'
import { Router }  from 'express';
const secondRouter = Router();
secondRouter.get('/api/second', secondController);
secondRouter.get('/api/process', processController);

export default secondRouter ;