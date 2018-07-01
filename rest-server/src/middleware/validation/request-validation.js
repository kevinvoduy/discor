import Joi from 'joi';

export default {
  signup: {
    body: {
      firstname: Joi.string().regex(/^[a-zA-Z0-9]{2,20}$/).required(),
      lastname: Joi.string().regex(/^[a-zA-Z0-9]{2,20}$/).required(),
      username: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required(),
    }
  },
  login: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required()
    }
  }
};
