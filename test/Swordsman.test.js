import Swordsman from '../src/Swordsman.js';

describe('Swordsman', () => {
  test('должен создавать Swordsman с правильными свойствами', () => {
    const swordsman = new Swordsman('Warrior');
    expect(swordsman.name).toBe('Warrior');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});
