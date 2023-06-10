import Magician from '../magician';

describe('Magician class', () => {
  it('should calculate attack power correctly', () => {
    const magician = new Magician(4);
    magician.attack = 100;
    expect(magician.attack).toBe(70);
  });

  it('should calculate attack power correctly when stoned', () => {
    const magician = new Magician(4);
    magician.attack = 100;
    magician.stoned = true;
    expect(magician.attack).toBe(60);
  });
});
