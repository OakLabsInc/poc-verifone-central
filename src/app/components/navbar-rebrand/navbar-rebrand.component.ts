import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-rebrand',
  templateUrl: './navbar-rebrand.component.html',
  styleUrls: ['./navbar-rebrand.component.scss']
})
export class NavbarRebrandComponent implements OnInit {
  view: string=''

  constructor(private route: ActivatedRoute, private _router: Router) {
    console.log("Route", this.route);
    this.route.queryParams.subscribe(params => {
        this.view = params['view'];

    });
  }

  ngOnInit(): void {
  }

  changePage = (page:string, isSubpage:boolean) => {
    if(isSubpage) {

      this._router.navigateByUrl(page + '?view=is-subpage')
    } else {
      this._router.navigateByUrl(page)
    }

  }
}
