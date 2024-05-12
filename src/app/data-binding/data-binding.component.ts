
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello, world!';

  constructor() { }

  ngOnInit(): void {
  }

  changeMessage(): void {
    this.message = 'New message!';
  }
}
