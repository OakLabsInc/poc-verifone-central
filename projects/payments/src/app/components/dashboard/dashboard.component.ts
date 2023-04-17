import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title="Payments Dashboard"
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
