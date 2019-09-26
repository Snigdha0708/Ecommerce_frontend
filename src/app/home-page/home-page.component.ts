import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private abc: ServicesService, private router: Router) { }
  prod;
  ngOnInit() {
    this.abc.getDetails().subscribe(data => {
      this.prod = data;
    });
  }
  goToDetails(namea) {
    this.router.navigate(['/productInfo'], {queryParams: {namea}});
  }
}

