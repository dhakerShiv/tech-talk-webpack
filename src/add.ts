import * as addHelper from "./addHelper";

export const add = (a: number, b: number): string => {
    const result = addHelper.addFractions();

    return "I am add, " + result;
}
