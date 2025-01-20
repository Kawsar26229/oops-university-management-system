const _id = Symbol("id");
const _name = Symbol("name");
const _contact = Symbol("contact");
const _blood = Symbol("blood");
class Person {
  constructor(id, name) {
    this[_id] = id;
    this[_name] = name;
    this[_contact] = null;
    this[_blood] = null;
  }
  get id() {
    return this[_id];
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get contact() {
    return this[_contact];
  }
  set contact(value) {
    this[_contact] = value;
  }
  get blood() {
    return this[_blood];
  }
  set blood(value) {
    this[_blood] = value;
  }
  toString() {
    return `Person details: ID: ${this[_id]}, Name: ${this[_name]}, Contact: ${this[_contact]}, Blood: ${this[_blood]}`;
  }
}
module.exports = Person;
