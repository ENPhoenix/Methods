import Character from '../src/Character.js';

describe('Character', () => {
  test('должен создавать Character с допустимым именем и типом', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('должен выбрасывать ошибку для недопустимой длины имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('должен выбрасывать ошибку для недопустимого типа', () => {
    expect(() => new Character('Hero', 'Invalid')).toThrow('Недопустимый тип');
  });

  test('levelUp должен увеличивать уровень на 1, повышать атаку и защиту на 20%, и устанавливать здоровье на 100', () => {
    const character = new Character('Hero', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30); 
    expect(character.defence).toBe(30);  
    expect(character.health).toBe(100);
  });

  test('levelUp должен выбрасывать ошибку, если здоровье равно 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа');
  });

  test('damage должен правильно снижать здоровье с учетом защиты', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(50);
    expect(character.health).toBe(62.5);
  });

  test('damage не должен снижать здоровье ниже 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0); 
  });
});
