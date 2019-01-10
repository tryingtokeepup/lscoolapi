module.exports = (req, res, next) => {
  const value = req.query.number;

  if (value) {
    req.double = value * 2;

    next();
  } else {
    res.status(400).send('please provide a number');
  }
};
