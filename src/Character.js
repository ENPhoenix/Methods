export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Недопустимый тип');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = this.getAttack(type);
    this.defence = this.getDefence(type);
  }

  getAttack(type) {
    const attacks = {
      Bowman: 25,
      Swordsman: 40,
      Magician: 10,
      Daemon: 10,
      Undead: 25,
      Zombie: 40,
    };
    return attacks[type];
  }

  getDefence(type) {
    const defences = {
      Bowman: 25,
      Swordsman: 10,
      Magician: 40,
      Daemon: 40,
      Undead: 25,
      Zombie: 10,
    };
    return defences[type];
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
