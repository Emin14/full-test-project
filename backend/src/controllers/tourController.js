const { tours } = require('../data/mockData.js');

const getTours = (req, res) => {
  res.json({ success: true, data: tours });
};


module.exports = {
  getTours,
};