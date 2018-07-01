import * as chalk from 'chalk';

export const success = (...log) => {
  if (process.env.DEBUG === 'true') {
    console.log(chalk.default.white.bgGreen.bold(...log));
  }
};

export const database = (...log) => {
  if (process.env.DEBUG === 'true') {
    console.log(chalk.default.gray.bgMagentaBright.bold(...log));
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

export function SUCCESS(body) {
  return buildResponse(200, body);
}

export function FAILURE(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
}