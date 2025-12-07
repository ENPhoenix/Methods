import Daemon from '../src/Daemon.js';

describe('Daemon', () => {
  test('должен создавать Daemon с правильными свойствами', () => {
    const daemon = new Daemon('Demon');
    expect(daemon.name).toBe('Demon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
