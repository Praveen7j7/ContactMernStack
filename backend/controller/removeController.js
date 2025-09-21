import mongoose from "mongoose";
import User from "../model/userModel.js";

export const removeUser = async (req, res) => {
  try {
    // const { id } = req.body;
    const {id}=req.params;

    //Check if id exists
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    //Check if id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    //Delete the user
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    console.error("RemoveUser error:", error);
    return res.status(500).json({ message: `RemoveUser error: ${error.message}` });
  }
};


// import User from "../model/userModel.js";

// export const removeUserByName = async (req, res) => {
//   try {
//     const { name } = req.params;

//     if (!name) {
//       return res.status(400).json({ message: "Name is required in URL" });
//     }

//     // Find and delete user by name
//     const user = await User.findOneAndDelete({ name });

//     if (!user) {
//       return res.status(404).json({ message: `User with name '${name}' not found` });
//     }

//     return res.status(200).json({ message: "User deleted successfully", user });
//   } catch (error) {
//     console.error("RemoveUser error:", error);
//     return res.status(500).json({ message: `RemoveUser error: ${error.message}` });
//   }
// };
