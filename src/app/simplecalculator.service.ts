import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleCalculator } from './simplecalculator';

@Injectable({
    providedIn: 'root'
})

export class SimpleCalculatorService {
    private serviceURL = 'http://localhost:8084/calculator';

    constructor(private http: HttpClient) { }

    public calculate(operation: string, firstOperand: any, secondOperand: any) {
        return this.http.get(this.serviceURL + '/' + operation + '/' + firstOperand + '/' + secondOperand);
    }

    public getHistory() {
        return this.http.get<SimpleCalculator[]>(this.serviceURL + "/history");
    }
}