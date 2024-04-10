import express from 'express';
import { productController } from './producto.controller';

const productRouter = express.Router();

productRouter.get('/',productController.getProducts)
productRouter.get('/:id',productController.getProductById)

export default productRouter