import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/interfaces/FormData';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public submitted = false;
  public id = '';
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {}

  submit(data: FormData): void {
    this.eventsService.postEvent(data).subscribe((res) => {
      this.id = res.id;
      this.submitted = true;
    });
  }
}
