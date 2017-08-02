
import { add, divide, subtract, multy } from "app/_models/arithmetics";

export function isNumber(text: string): boolean {
    const numbers = {
        1: true, 2: true, 3: true, 4: true, 5: true,
        6: true, 7: true, 8: true, 9: true, 0: true,
    };

    for (let i = 0; i < text.length; i++) {
        let e = text[i];
        if (!numbers[e]) {
            return false;
        }
    }
    return true;
}

export function isSign(text: string): boolean {
    const signs = ['+', '-', '*', '/'];
    for (let i = 0; i < text.length; i++) {
        let e = text[i];
        if (!signs.find(s => s === e)) {
            return false;
        }
    }
    return true;
}

export function isParentheses(text: string): boolean {
    const numbers = ['(', ')'];
    for (let i = 0; i < text.length; i++) {
        let e = text[i];
        if (!numbers.find(s => s === e)) {
            return false;
        }
    }
    return true;
}

export function hasOnlyMathSymbols(text: string): boolean {
    const mathSymbol = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '(', ')'];
    for (let i = 0; i < text.length; i++) {
        let e = text[i];
        if (!mathSymbol.find(s => s === e)) {
            return false;
        }
    }
    return true;
}

export function isCountOfRoundBracketsRight(text: string): boolean {
    let left = 0;
    let right = 0;
    for (var i = 0; i < text.length; i++) {
        var e = text[i];
        if (e === '(') left++;
        else if (e === ')') right++;
    }
    return left === right;
}

export function isRightExpression(text: string): boolean {
    return isCountOfRoundBracketsRight(text) && hasOnlyMathSymbols(text);
}
