import Joi from "joi";

export default Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().min(1),
}).required();
