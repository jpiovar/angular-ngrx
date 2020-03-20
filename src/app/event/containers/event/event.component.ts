import { Component, OnInit } from '@angular/core';
import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  // attendees: Attendee[] = [];
  attendees$: Observable<Attendee[]>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees() {
    // this.eventService
    //   .getAttendees()
    //   .subscribe(attendees => (this.attendees = attendees));
    this.attendees$ = this.eventService.getAttendees();
  }

  // addAttendee(attendee: Attendee) {
  //   debugger;
  //   this.attendees = [...this.attendees, attendee];
  //   console.log('TCL: EventComponent -> addAttendee -> this.attendees', this.attendees);
  // }
  addAttendee(attendee: Attendee) {
    this.eventService
      .addAttendee(attendee)
      .subscribe(() => this.getAttendees());
  }

}
