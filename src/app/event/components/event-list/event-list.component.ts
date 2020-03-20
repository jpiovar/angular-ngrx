import { Component, OnInit, Input } from '@angular/core';
import { Attendee } from '../../../models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input()
  attendees: Attendee[];

  constructor() { }

  ngOnInit(): void {
  }

}
