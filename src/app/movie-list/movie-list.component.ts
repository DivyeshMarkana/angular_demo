import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['The Manchurian Candidate', 'Oceans 8', 'The Incredibles', 'Hidden Figures'];
  // movies = {
  //   0: 'The Manchurian Candidate',
  //   1: 'Oceans 8',
  //   2: 'The Incredibles',
  // } 
  constructor() { }

  ngOnInit(): void {
  }

  addMovie(newTitle: string) {
    if (!this.movies.includes(newTitle)) {
      this.movies.push(newTitle)
    }

  }
}
