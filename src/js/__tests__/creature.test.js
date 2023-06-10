import Creature from '../creature';

describe('Creature class', () => {
  it('should calculate attack power correctly when not stoned', () => {
    const creature = new Creature(3);
    creature.attack = 100;
    expect(creature.attack).toBe(80);
  });

  it('should calculate attack power correctly when stoned', () => {
    const creature = new Creature(3);
    creature.attack = 100;
    creature.stoned = true;
    expect(creature.stoned).toBe(true);
    expect(creature.attack).toBe(72);
  });
});
