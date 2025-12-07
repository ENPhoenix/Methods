import Zombie from '../src/Zombie.js';

describe('Zombie', () => {
  test('должен создавать Zombie с правильными свойствами', () => {
    const zombie = new Zombie('Undead');
    expect(zombie.name).toBe('Undead');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
