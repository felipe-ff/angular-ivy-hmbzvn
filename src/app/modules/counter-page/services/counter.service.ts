import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService implements OnDestroy {
  totalCounter$ = new BehaviorSubject<number>(0);

  increaseTotal(amount: number): void {
    this.totalCounter$.next(this.totalCounter$.getValue() + amount);
  }

  decreaseTotal(amount: number): void {
    this.totalCounter$.next(this.totalCounter$.getValue() - amount);
  }

  ngOnDestroy(): void {
    this.totalCounter$.next(0);
    this.totalCounter$.complete();
  }
}
