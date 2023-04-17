import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transtactions',
  templateUrl: './transtactions.component.html',
  styleUrls: ['./transtactions.component.scss']
})
export class TranstactionsComponent implements OnInit {

  title="Transactions"
  view: string=''
  titleColor: string='has-text-white'

  constructor(private route: ActivatedRoute) {
     this.route.queryParams.subscribe(params => {
        this.view = params['view'];
        if (this.view !== 'is-subpage') {
          console.log(params);
          this.titleColor = 'has-text-black'
        }
    });
  }

  ngOnInit(): void {

  }

}
