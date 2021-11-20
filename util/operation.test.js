import {
  addition,
  multiplication,
  subtraction,
  division,
  squareRoot,
} from './operations';

describe('Operations', () => {
  it('addition of two operands returns the expected value', () => {
    const firstOperand = 2;
    const secondOperand = 3;

    const result = addition(firstOperand, secondOperand);

    expect(result).toEqual(2 + 3);
  });

  it('subtraction of two operands returns the expected value', () => {
    const firstOperand = 6;
    const secondOperand = 4;

    const result = subtraction(firstOperand, secondOperand);

    expect(result).toEqual(6 - 4);
  });

  it('multiplication of two operands returns the expected value', () => {
    const firstOperand = 3;
    const secondOperand = 4;

    const result = multiplication(firstOperand, secondOperand);

    expect(result).toEqual(3 * 4);
  });

  it('division of two operands returns the expected value', () => {
    const firstOperand = 12;
    const secondOperand = 4;

    const result = division(firstOperand, secondOperand);

    expect(result).toEqual(12 / 4);
  });

  it('square root of an operands returns the expected value', () => {
    const operand = 81;

    const result = squareRoot(operand);

    expect(result).toEqual(9);
  });
});
