const userModel = require('../../models/users');

const updateUser = async (req, res) => {
  try {
    const userId = req.user._id; // middleware se milta hai
    const { fullname, email, number, address, city, country, dob } = req.body;

    if (!fullname || !email || !number || !address || !city || !country || !dob) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const updated = await userModel.findByIdAndUpdate(
      userId,
      { fullname, email, number, address, city, country, dob }, 
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser: updated });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = updateUser;
