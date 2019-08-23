/* eslint-disable newline-per-chained-call */
import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  token: [Joi.string(), Joi.number().required()],
  firstName: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
  lastName: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(100).required(),
  address: Joi.string().alphanum().min(3).required(),
  bio: Joi.string().regex(/^[a-zA-Z ]{3,30}$/).min(3).max(30).required(),
  occupation: Joi.string().regex(/^[a-zA-Z ]{3,30}$/).min(3).max(30).required(),
  expertise: Joi.string().regex(/^[a-zA-Z ]{3,30}$/).min(3).max(30).required(),
  userType: Joi.string().valid('user', 'mentor', 'admin').required(),
});

export default schema;
