import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-expense',
  templateUrl: './display-expense.component.html',
  styleUrls: ['./display-expense.component.css']
})
export class DisplayExpenseComponent {

  expense:any=[];


  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(val);
      });
  }

}
