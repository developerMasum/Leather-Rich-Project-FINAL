/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';

const createUserIntoDB = async (payload: TUser) => {
  const isExistUser = await User.findOne({ email: payload.email });

  if (isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email already exists');
  }

  const result = await User.create(payload);
  return result;
};
const getAllUser = async()=>{
  const result  =  await User.find()
  return result;
}




export const UserServices = {
  createUserIntoDB,getAllUser
};
