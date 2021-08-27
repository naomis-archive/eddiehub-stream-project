import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/interfaces/FormData';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: FormData[]= [];
  public loaded: boolean = false;

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      this.data = data;
      this.loaded = true;
    })
  }

}
