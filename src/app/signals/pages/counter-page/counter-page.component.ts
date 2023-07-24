import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counter = signal(10);

  //if use signals only read you should
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
