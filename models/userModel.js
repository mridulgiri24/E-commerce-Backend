import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //cartData: {type: Object, default: {}}
});
// {
//   minimize: false;
// }

const User = mongoose.models.User || mongoose.model("User", user);

export default User;
