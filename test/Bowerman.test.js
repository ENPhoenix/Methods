import Bowerman from '../src/Bowerman.js';

describe('Bowerman', () => {
  test('должен создавать Bowerman с правильными свойствами', () => {
    const bowerman = new Bowerman('Archer');
    expect(bowerman.name).toBe('Archer');
    expect(bowerman.type).toBe('Bowman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
  });
});
