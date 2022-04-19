import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
  counter = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {}

  onClicked(): void {
    this.counterService.increaseTotal(1);
    this.counter++;
  }

  onReset(): void {
    this.counterService.decreaseTotal(this.counter);
    this.counter = 0;
  }

  ngOnDestroy(): void {
    this.counterService.totalCounter$.next(0);
  }
}
