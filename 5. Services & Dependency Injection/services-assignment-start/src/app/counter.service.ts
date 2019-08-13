export class CounterService {
  counter = 0;

  incrementCounter() {
    this.counter++;
    console.log(this.counter);
  }
}
