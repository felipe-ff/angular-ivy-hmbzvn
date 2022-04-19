import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
})
export class CounterPageComponent implements OnInit {
  totalCounter$: Observable<number>;

  constructor(private counterService: CounterService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.totalCounter$ = this.counterService.totalCounter$.asObservable();
  }
}
