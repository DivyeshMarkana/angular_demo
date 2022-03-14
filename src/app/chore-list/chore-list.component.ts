import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {
  chores = [ 'Empty dishwasher', 'Compelete launchCode prep work', 'Buy groceries', 'Finish LaunchCode prep work' ];

//   chores = [
//     {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries']},
//     {title: "Today's Chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
//     {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']},
//  ]

  constructor() { }

  ngOnInit(): void {
  }

}
