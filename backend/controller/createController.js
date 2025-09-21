import User from "../model/userModel.js";
import userValidator from "./userValidator.js";

export const createUser = async (req, res) => {
  try {
    // ✅ Validate request body with Zod
    const parsedData = userValidator.parse(req.body);

    // ✅ Save to MongoDB
    const user = new User(parsedData);
    await user.save();

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    // Zod validation error
    if (error.errors) {
      return res.status(400).json({ errors: error.errors });
    }

    return res.status(500).json({ message: `Error saving user: ${error.message}` });
  }
};
