import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  @Input() event!: Event

  constructor(private aR: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    this.aR.params.subscribe(param => {
      this.eventService.get(param['id']).forEach(event => {
        this.event = event
      })
    })
  }

  onUpdate(form: NgForm):void {
    this.eventService.update(this.event).forEach(event => {
      console.log('Updated event: ', event)
    })
  }

}
