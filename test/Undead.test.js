import Undead from '../src/Undead.js';

describe('Undead', () => {
  test('должен создавать Undead с правильными свойствами', () => {
    const undead = new Undead('Ghoul');
    expect(undead.name).toBe('Ghoul');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
