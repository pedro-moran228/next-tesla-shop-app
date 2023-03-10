import { IUser } from "@/interfaces";
import { model, Model, Schema, models } from "mongoose";

export interface IUserModel extends IUser {}

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: {
                values: ["admin", "client"],
                message: "{VALUE} no es un role válido",
                default: "client",
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
);
const UserModel: Model<IUserModel> = models.User || model("User", userSchema);

export default UserModel;
