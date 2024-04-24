import mongoose, { ObjectId, Schema, Types, model } from "mongoose";
import { Property, PropertySchema } from "./Property";




export interface User {
  

    id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    name: string;
    address: string;
    isAdmin: boolean;
    propertyId: ObjectId

}


export const UserSchema = new Schema<User>({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    propertyId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Property"
        }
    ]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }

});

export const UserModel = model<User>('user', UserSchema);
