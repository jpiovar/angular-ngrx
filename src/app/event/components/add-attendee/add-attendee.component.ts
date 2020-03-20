import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Attendee } from '../../../models';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss']
})
export class AddAttendeeComponent implements OnInit {
  @Output()
  addAttendee = new EventEmitter<Attendee>();

  constructor() { }

  ngOnInit(): void {
  }

  addAttendeeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  submit() {
    const attendee = {
      name: this.addAttendeeForm.value.name,
      attending: true,
      guests: 0
    };
    console.log('TCL: AddAttendeeComponent -> submit -> attendee', attendee);
    this.addAttendee.emit(attendee);
  }

}
