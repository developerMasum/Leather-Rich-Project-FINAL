import express from 'express';

import { orderController } from './order.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.get('/success-order/:id', orderController.getSingleOrderByOrderNumber);

router.post(
  '/create-order',
  auth(USER_ROLE.superAdmin, USER_ROLE.user),
  orderController.createOrder,
);
router.get('/', auth(USER_ROLE.superAdmin), orderController.getAllOrders);
router.get('/successful-orders', orderController.successfulDelivery);
router.patch(
  '/update-delivery/:id',
  auth(USER_ROLE.superAdmin),
  orderController.updateOrder,
);

router.post('/create-checkout-session');
router.get(
  '/get-single-order/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.user),
  orderController.getSingleOrder,
);

// router.delete('/product/:productId', ProductController.deleteProduct);

export const orderRoute = router;
