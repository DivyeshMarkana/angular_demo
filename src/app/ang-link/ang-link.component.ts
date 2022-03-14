import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-link',
  templateUrl: './ang-link.component.html',
  styleUrls: ['./ang-link.component.css']
})
export class AngLinkComponent implements OnInit {
  placeholder = ['https://www.youtube.com', "https://www.linkedin.com/login", "https://reactjs.org"]

  constructor() { }

  ngOnInit(): void {
  }

}
