import { Component } from "@angular/core";
import { from } from "rxjs";
import { mergeScan, scan, tap } from "rxjs/operators";
import { BusinessIncomeService } from "src/app/services/business-income.service";
import { Emerald } from "src/app/shared/emerald.model";
import { BusinessIncome } from "./interfaces/business-income.model";

@Component({
	selector: 'business-income',
	templateUrl: './business-income.component.html'
})
export class BusinessIncomeComponent {
	businessIncomeEmerald:Emerald = {
		id: 7,
		title: 'Business Income',
		quote: 'Good businesses generate missions to drive their profits. Great businesses generate profits to drive their missions',
		author: 'Tony Hsieh',
		goal: '$10000 annual net profit',
		emeraldImageUrl: 'assets/red-emerald.png',
		resources: [
			{name: 'resource 16'},
			{name: 'resource 17'},
			{name: 'resource 18'}
		]
	}

	constructor(private businessIncomeService:BusinessIncomeService) {}

  businessIncome$ = this.businessIncomeService.businessIncome$;

	businessIncomeProfitTotal$ = this.businessIncomeService.businessIncome$
    .pipe(
      mergeScan((acc:number, curr:BusinessIncome[]) => {
        return from(curr)
          .pipe(
            scan((start:number, business:BusinessIncome) => start + business.profit, 0)
          )
      }, 0),
      tap(output => console.log('total profit', output))
    );
};