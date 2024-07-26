// ex : validationMiddleware(teamPatchSchema, 'body')
export default (schema, source) => {
  return async (req, res, next) => {
    try {
      // source = soit body, soit query, soit params
      // donc au final on analysera soit req.body, soit req.query, soit req.params
      // on ecrit pas .source mais [source] car sinon ca chercherait la propriété source de req qui n'existe pas
      await schema.validateAsync(req[source]);
      // req['body'] === req.body
      // si tout ce passe bien on continue vers le controller
      next();
    } catch (err) {
      res.status(400).json(err.message);
    }
  };
};
