import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("Add Cluster Url" , {
      dbName: "SELLER-PORTAL",
    })
    .then(() => console.log("Database Connected SuccesFully"))
    .catch((err) => console.log("error In DB", err));
};