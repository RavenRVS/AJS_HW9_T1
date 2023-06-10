import Daemon from '../daemon';

describe('Daemon class', () => {
  it('should calculate attack power correctly', () => {
    const daemon = new Daemon(5);
    daemon.attack = 100;
    expect(daemon.attack).toBe(60);
  });

  it('should calculate attack power correctly when stoned', () => {
    const daemon = new Daemon(2);
    daemon.attack = 100;
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });
});
