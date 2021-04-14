import { Component } from '@angular/core';
import { SimpleCalculator } from './simplecalculator';
import { SimpleCalculatorService } from './simplecalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CalculatorApp';
  public operations: string;
  public firstOperator: number;
  public secondOperator: number;
  public operationResult: any;
  public simpleCalculator: SimpleCalculator[];
  public selectedOperation: any;

  constructor(private service: SimpleCalculatorService) { }

  // Method is used to call the Service layer for Add Operation
  public add() {
    this.selectedOperation = ' + ';
    this.service.calculate("add", this.firstOperator, this.secondOperator).subscribe(
      data => { this.operationResult = data },
    )
  }

  // Method is used to call the Service layer for Add Operation
  public sub() {
    this.selectedOperation = ' - ';
    this.service.calculate("sub", this.firstOperator, this.secondOperator).subscribe(
      data => { this.operationResult = data },
    )
  }

  // Method is used to call the Service layer for Substract Operation
  public multiply() {
    this.selectedOperation = ' * ';
    this.service.calculate("multiply", this.firstOperator, this.secondOperator).subscribe(
      data => { this.operationResult = data },
    )
  }

  // Method is used to call the Service layer for Division Operation
  public divide() {
    this.selectedOperation = ' / ';
    this.service.calculate("divide", this.firstOperator, this.secondOperator).subscribe(
      data => { this.operationResult = data },
    )
  }

  // Method is used to call the Service layer for Calculation History
  public history() {
    this.service.getHistory().subscribe(
      data => { this.simpleCalculator = data },
    )
  }

  // Method is used to clean the screen
  public reset() {
    this.firstOperator = 0;
    this.secondOperator = 0;
    this.operations = '';
    this.simpleCalculator = [];
    this.operationResult = '';
    this.selectedOperation = '';
  }

  // method is used to allow digits on screen 
  onlyDigits(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}



