import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.name = name;
    this.attack = 40;
    this.defence = 10;
  }
}
