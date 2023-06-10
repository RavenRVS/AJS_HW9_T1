export default class Creature {
  constructor(distance) {
    this.distanceProperty = distance;
  }

  set stoned(value) {
    this.stonedProperty = value;
  }

  get stoned() {
    return this.stonedProperty;
  }

  get attack() {
    const distanceCoefficient = 1 - (this.distanceProperty - 1) * 0.1;

    let attackPower = this.attackProperty * distanceCoefficient;

    if (this.stonedProperty) {
      attackPower -= Math.log2(this.distanceProperty) * 5;
    }

    return Math.round(attackPower);
  }

  set attack(value) {
    this.attackProperty = value;
  }
}
