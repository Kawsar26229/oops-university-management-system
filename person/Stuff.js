const Employee = require("./Employee");
const _title = Symbol("title");
class Stuff extends Employee {
  constructor(id, name, title) {
    super(id, name);
    this[_title] = title;
  }
  get title() {
    return this[_title];
  }
  set title(value) {
    this[_title] = value;
  }
  toString() {
    return `Stuff details: Employee: ${super.toString()}, Title: ${
      this[_title]
    }`;
  }
}
module.exports = Stuff;
