import mongoose from "mongoose";

const PlatformSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  progress: String,
  increase: String,
});



const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    leetcode: PlatformSchema,
    codechef: PlatformSchema,
    codeforce: PlatformSchema,
    hackerrank: PlatformSchema,
    atcoder: PlatformSchema,
    spoj: PlatformSchema,
    codingNinjas: PlatformSchema,
    gfg: PlatformSchema,
    percentile: Number, // Add general percentile
    githubContribution: Number, // Add GitHub contribution
   
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
