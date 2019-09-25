import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private abc: ServicesService) { }
  prod;
  ngOnInit() {
    this.abc.getDetails().subscribe(data => {
      this.prod = data;
    });
  }}

