import Magician from '../src/Magician.js';

describe('Magician', () => {
  test('должен создавать Magician с правильными свойствами', () => {
    const magician = new Magician('Wizard');
    expect(magician.name).toBe('Wizard');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});
