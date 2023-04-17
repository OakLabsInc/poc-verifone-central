import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title="Commerce"
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
