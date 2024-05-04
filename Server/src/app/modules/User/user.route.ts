/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

import { UserControllers } from './user.controller';



const router = express.Router();

router.post(
  '/create-user',

  // validateRequest(UserValidation.createUserValidationSchema),

  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUser)




export const UserRoutes = router;
