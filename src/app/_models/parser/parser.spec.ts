import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { findCloseParenthesIndex, findEndOfNumberIndex, CalculateVaribles, Parser, Group, Varible } from './index';

describe('findCloseParenthesIndex', () => {

    const t1 = '()';
    const t1r = 1;
    const t2 = '(';
    const t2r = null;
    const t3 = '((()))';
    const t3r = 5;

    it(t1 + ' should be ' + t1r, () => {
        expect(findCloseParenthesIndex(t1, 0)).toEqual(t1r);
    });
    it(t2 + ' should be ' + t2r, () => {
        expect(findCloseParenthesIndex(t2, 0)).toEqual(t2r);
    });
    it(t3 + ' should be ' + t3r, () => {
        expect(findCloseParenthesIndex(t3, 0)).toEqual(t3r);
    });
});

describe('findEndOfNumberIndex', () => {

    const t1 = '0123';
    const t1r = 3;
    const t2 = '0123-';
    const t2r = 3;
    const t3 = '0';
    const t3r = 0;

    it(t1 + ' should be ' + t1r, () => {
        expect(findEndOfNumberIndex(t1, 0)).toEqual(t1r);
    });
    it(t2 + ' should be ' + t2r, () => {
        expect(findEndOfNumberIndex(t2, 0)).toEqual(t2r);
    });
    it(t3 + ' should be ' + t3r, () => {
        expect(findEndOfNumberIndex(t3, 0)).toEqual(t3r);
    });
});

describe('CalculateVaribles', () => {

    const t1v1 = new Varible(null, '1');
    const t1v2 = new Varible('+', '1');
    const t1r = 2;

    it(t1v1 + ' ' + t1v2 + ' should be ' + t1r, () => {
        expect(CalculateVaribles(t1v1, t1v2).value).toEqual(t1r);
    });

});

describe('Parser check without parenthes', () => {

    const t1 = '1+1';
    const t1r = 2;
    it(t1 + ' should be ' + t1r, () => {
        expect(new Parser().parse(t1).value).toEqual(t1r);
    });

    const t2 = '1+1*2';
    const t2r = 3;
    it(t2 + ' should be ' + t2r, () => {
        expect(new Parser().parse(t2).value).toEqual(t2r);
    });
    const t3 = '4+1*2-6/2';
    const t3r = 3;
    it(t3 + ' should be ' + t3r, () => {
        expect(new Parser().parse(t3).value).toEqual(t3r);
    });

    const t4 = '4+1*2-6/2-9';
    const t4r = -6;
    it(t4 + ' should be ' + t4r, () => {
        expect(new Parser().parse(t4).value).toEqual(t4r);
    });
});

describe('Parser check without parenthes', () => {

    beforeEach(() => {
        console.log('START:');
    });
    afterEach(() => {
        console.log('END;');
    });

    const t1 = '(1+1)';
    const t1r = 2;
    it(t1 + ' should be ' + t1r, () => {
        expect(new Parser().parse(t1).value).toEqual(t1r);
    });

    const t2 = '(1+1)*2';
    const t2r = 4;
    it(t2 + ' should be ' + t2r, () => {
        expect(new Parser().parse(t2).value).toEqual(t2r);
    });

    const t3 = '(4+1)*(2-6)/2';
    const t3r = -10;
    it(t3 + ' should be ' + t3r, () => {
        expect(new Parser().parse(t3).value).toEqual(t3r);
    });

    const t4 = '(4+1)*(2-6)/2-9';
    const t4r = -19;
    it(t4 + ' should be ' + t4r, () => {
        expect(new Parser().parse(t4).value).toEqual(t4r);
    });

    const t5 = '3+2*4+(6-2)/3';
    const t5r = 3 + 2 * 4 + (6 - 2) / 3;
    it(t5 + ' should be ' + t5r, () => {
        expect(new Parser().parse(t5).value).toEqual(t5r);
    });
});