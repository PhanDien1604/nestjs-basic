import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: String;
  readonly age: Number;
}
