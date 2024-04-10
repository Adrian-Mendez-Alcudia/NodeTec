import express from 'express';
import { sessionProductController } from './sesiones_producto.controller';

const sessionProductRouter = express.Router();

sessionProductRouter.get('/',sessionProductController.getSessionsProduct)
sessionProductRouter.get('/:id',sessionProductController.getSessionProductById)

export default sessionProductRouter