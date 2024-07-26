import Joi from "joi";

export default Joi.object({
  name: Joi.string().min(1),
  description: Joi.string().min(1),
})
  .min(1)
  .required();
