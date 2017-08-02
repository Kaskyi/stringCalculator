import { Injectable } from '@angular/core';
import { Parser } from 'app/_models/parser';

@Injectable()
export class CalculatorService {

  private _parser: Parser;
  private _textOrigin: string;

  constructor() { }

  parseData(text: string): Parser {
    this._textOrigin = text;
    this._parser = new Parser();
    this._parser.parse(text);
    return this._parser;
  }

  get result(): number | null {
    if (this._parser) {
      return this._parser.getValue();
    }
    return null;
  }

  get fullExpresion(): string {
    if (this._parser && this.result) {
      return this._textOrigin + ' = ' + this.result.toString();
    }
    return '';
  }
}
