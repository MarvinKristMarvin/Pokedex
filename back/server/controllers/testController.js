const testController = {
  testFunction: function (req, res, next) {
    console.log("OK");
    next();
  },
};

export { testController };
