import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar-rebrand',
  templateUrl: './navbar-rebrand.component.html',
  styleUrls: ['./navbar-rebrand.component.scss']
})
export class NavbarRebrandComponent implements OnInit {
  view: string=''
  isClicked: boolean = false;
  constructor(private route: ActivatedRoute,
     private _router: Router,
     @Inject(DOCUMENT) private document: Document) {
    console.log("Route", this.route);
    this.route.queryParams.subscribe(params => {
        this.view = params['view'];

    });
  }

  ngOnInit(): void {
  }

  changePage = (page:string, isSubpage:boolean) => {
    this.isClicked = true;
    if(isSubpage) {

      this._router.navigateByUrl(page + '?view=is-subpage')
    } else {
      this._router.navigateByUrl(page)
    }
    setTimeout(() =>{
      this.isClicked = false;
    },10)

  }
}
