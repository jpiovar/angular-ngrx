import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';
import { State } from '../../../state/state';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  // attendees: Attendee[] = [];
  spinner$: Observable<boolean>;
  attendees$: Observable<Attendee[]>;

  constructor(private store: Store<State>, private eventService: EventService) {}

  ngOnInit(): void {
    this.getAttendees();
    this.spinner$ = this.store.pipe(select(state => state.spinner.isOn));
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
    this.store.dispatch({ type: 'startSpinner' });
    this.eventService
      .addAttendee(attendee).subscribe(() => {
        this.getAttendees()
        this.store.dispatch({ type: 'stopSpinner' });
      });
  }

}
