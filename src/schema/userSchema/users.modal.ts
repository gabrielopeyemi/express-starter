import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    userRole: string,
    password: string,
    date: Date;
    _id?: string;
};


export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    userRole: String,
    password: String,
    date: {
      type: Date,
      default: new Date()
    },
  });

const UserModal = mongoose.model<IUser>("User", UserSchema);
export default UserModal;