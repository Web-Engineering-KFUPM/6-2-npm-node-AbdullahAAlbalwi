import _ from "lodash"

export function parseNumbers(input) {
    return _.map(input, (str) => Number(str));
  }

  export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
  }