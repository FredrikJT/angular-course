export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log(`Active to inactive: ${this.activeToInactive}`);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log(`Inactive to Active: ${this.inactiveToActive}`);
  }

}
