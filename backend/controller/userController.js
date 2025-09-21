import User from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    // Get page & limit from query, fallback to defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    // Calculate skip value
    const skip = (page - 1) * limit;

    // Count total users
    const total = await User.countDocuments();

    // Fetch only required users
    const users = await User.find().skip(skip).limit(limit);

    return res.status(200).json({
      contacts: users,
      page,
      pages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
