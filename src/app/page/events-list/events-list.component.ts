import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Observable<Event[]> = this.eService.getAll();

  event!: Event

  constructor(private aR: ActivatedRoute, private eService: EventService) {}

  ngOnInit(): void {
    this.aR.params.subscribe(param => {
      this.eService.get(param['id']).forEach(event => {
        this.event = event
      })
    })
  }

}
