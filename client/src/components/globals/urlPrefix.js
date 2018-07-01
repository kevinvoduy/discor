const url = {
  restServer: process.env.NODE_ENV === 'production' ? process.env.PRO_REST : process.env.DEV_REST,
  postServer: process.env.NODE_ENV === 'production' ? process.env.PRO_POST : process.env.DEV_POST,
  sockServer: process.env.NODE_ENV === 'production' ? process.env.PRO_SOCK : process.env.DEV_SOCK,
};

export default url;
