import * as chalk from 'chalk';

export const success = (...log) => {
  if (process.env.DEBUG === 'true') {
    console.log(chalk.default.white.bgGreen.bold(...log));
  }
};

export const warning = (...log) => {
  if (process.env.DEBUG === 'true') {
    console.log(chalk.default.gray.bgYellow.bold(...log));
  }
};

export const error = (...log) => {
  if (process.env.DEBUG === 'true') {
    console.log(chalk.default.white.bgRed.bold(...log));
  }
};
