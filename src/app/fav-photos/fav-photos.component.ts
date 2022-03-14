import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  placeholder = './image.jpg'
  title = "Photos"

  constructor() { }

  ngOnInit(): void {
  }

}
