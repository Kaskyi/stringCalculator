import { Component, OnInit } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { CalculatorService } from 'app/_services/calculator.service';
import { isCountOfRoundBracketsRight, hasOnlyMathSymbols } from 'app/_models/arithmetics';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myInput = '';

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  get hasRightSymbols(): boolean {
    return hasOnlyMathSymbols(this.myInput);
  }

  get isRoundBracketsRight(): boolean {
    return isCountOfRoundBracketsRight(this.myInput);
  }

  get calculationResult(): string {
    return this.calculatorService.fullExpresion;
  }

  IsRoundBracketsRight(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const name = control.value;
      const no = !isCountOfRoundBracketsRight(this.myInput);
      return no ? { 'IsRoundBracketsRight': name } : null;
    };
  }

  inputFormControl = new FormControl('', [
    Validators.required,
    this.IsRoundBracketsRight()
  ]);

  calculate() {
    this.calculatorService.parseData(this.myInput);
  }
}
