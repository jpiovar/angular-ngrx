import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';

import { StartSpinner, StopSpinner } from '../../../state/spinner/spinner.actions';
import { getSpinner } from '../../../state/spinner/spinner.selectors';

import { LoadAttendees } from '../../state/attendees/attendees.actions';
import { State } from '../../state';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  // attendees: Attendee[] = [];
  spinner$: Observable<boolean>;
  attendees$: Observable<Attendee[]>;

  constructor(
    private store: Store<State>,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadAttendees());
    // this.getAttendees();
    this.spinner$ = this.store.pipe(select(getSpinner));
    this.attendees$ = this.store.pipe(select(state => state.event.attendees.attendees));
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
    this.store.dispatch(new StartSpinner());
    this.eventService
      .addAttendee(attendee).subscribe(() => {
        this.getAttendees()
        this.store.dispatch(new StopSpinner());
      });
  }

}
