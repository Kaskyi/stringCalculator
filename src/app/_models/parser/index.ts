import { add, divide, subtract, multy, isNumber, isSign } from "app/_models/arithmetics";
import { Varible } from "app/_models/parser/parser";
export * from "app/_models/parser/parser";

export function findCloseParenthesIndex(text: string, startSearchIndex: number): number {
    let opened = 0;
    for (let i = startSearchIndex; i < text.length; i++) {
        if (text[i] == '(') {
            opened++;
        } else if (text[i] == ')') {
            opened--;
        }
        if (opened === 0) {
            return i;
        }
    }
    return null;
}

export function findEndOfNumberIndex(text: string, startIndex: number): number {
    for (var i = startIndex; i < text.length; i++) {
        var e = text[i];
        if (!isNumber(e)) return i - 1;
    }
    return text.length - 1;
}


export function calculate(f: number, sign: string, s: number): string {
    switch (sign) {
        case '+': return add(f, s).toString();
        case '-': return subtract(f, s).toString();
        case '*': return multy(f, s).toString();
        case '/': return divide(f, s).toString();
        case null: return add(f, s).toString();
    }
    return null;
}

export function CalculateVaribles(a: Varible, b: Varible): Varible {
    if (a == null) { return b; }
    if (b == null) { return a; }
    let av = a.value;
    if (a.sign === '-') {
        av = -a.value;
    }
    return new Varible('+', calculate(av, b.sign, b.value));
}

export function removeSpaces(text: string): string {
    let res = '';
    for (var i = 0; i < text.length; i++) {
        var e = text[i];
        if (!(e === ' ' || e === '\t')) {
            res += e;
        }
    }
    return res;
}

