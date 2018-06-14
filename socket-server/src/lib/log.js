export default (...args) => {
  if (process.env.DEBUG === 'true') {
    console.log(...args);
  }
};
