// controllers/adminController.js
const getAdminData = (req, res) => {
  res.status(200).json({ message: 'Welcome Admin, here is your secure data.' });
};

module.exports = { getAdminData };
