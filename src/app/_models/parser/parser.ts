import { CalculateVaribles, findCloseParenthesIndex, findEndOfNumberIndex, removeSpaces } from 'app/_models/parser';
import { isRightExpression } from 'app/_models/arithmetics';
import { isNumber } from 'util';

export class Varible {
    protected _sign: string = null;
    protected _value: number = null;
    get value(): number { return this._value; }
    get sign(): string { return this._sign; }
    constructor(sign: string, val: string) {
        this._sign = sign;
        this._value = parseFloat(val);
    }
    toTextString() {
        return this._sign + this._value;
    }
}

export class Group extends Varible {
    groups: Varible[] = [];

    /**
     * Calculate only groups with * or / symbol
     * @param groups array of groups
     */
    private calculatePriority(groups: Varible[]): Varible[] {
        let hasPriorityIndex = null;
        do {
            hasPriorityIndex = groups.findIndex(e => e.sign === '*' || e.sign === '/');

            if (hasPriorityIndex >= 0) {
                const e1 = groups[hasPriorityIndex - 1];
                const e2 = groups[hasPriorityIndex];
                groups[hasPriorityIndex - 1] = CalculateVaribles(e1, e2);
                groups.splice(hasPriorityIndex, 1);
            } else {
                break;
            }
        } while (true);
        return groups;
    }
    /**
        * calculate only groups with + or - symbol
        * @param groups array of groups
        */
    private calculatePrimal(groups: Varible[]): Varible[] {
        while (groups.length !== 1) {
            const e1 = groups[0];
            const e2 = groups[1];
            groups[0] = CalculateVaribles(e1, e2);
            groups.splice(1, 1);
        }
        return groups;
    }

    private calculate(groups: Varible[]): number | null {
        if (!groups || groups.length === 0) {
            return null;
        }
        let result: Varible[] = groups;
        result = this.calculatePriority(result);
        result = this.calculatePrimal(result);
        if (result[0] !== null) {
            if (result[0].sign === '-') {
                return -result[0].value;
            }
            return result[0].value;
        }
        return null;
    }
    get value(): number {
        return this.calculate(this.groups);
    }

    constructor(Sign: string, text: string) {
        super(Sign, null);

        let sign = null;
        for (let i = 0; i < text.length; i++) {
            const e = text[i];
            if (e === '(') {
                if (text[i + 1] === ')') {
                    i++;
                    continue;
                }
                const end = findCloseParenthesIndex(text, i);
                this.groups.push(new Group(sign, text.substring(i + 1, end)));
                sign = null;
                i = end;
            } else if (e === '+' || e === '-' || e === '*' || e === '/') {
                sign = e;
            } else {
                const end = findEndOfNumberIndex(text, i);
                this.groups.push(new Varible(sign, text.substring(i, end + 1)));
                sign = null;
                i = end;
            }
        }
    }
    toTextString() {
        return '[' + this._sign + this.groups.map(e => e.toTextString()) + ']';
    }
}


export class Parser {
    private _group: Group;

    parse(text: string): Group | null {
        text = removeSpaces(text);
        console.log(text);
        if (isRightExpression(text)) {
            this._group = new Group(null, text);
            return this._group;
        }
        return null;
    }

    getValue() {
        if (this._group) {
            return this._group.value;
        }
        return null;
    }
}
