import { Schema, model, SchemaTypes } from "mongoose";
import IToken from "./entities/IToken";

const tokenSchema = new Schema<IToken>({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export default model<IToken>("Token", tokenSchema);
