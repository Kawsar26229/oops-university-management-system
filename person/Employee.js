const UniPerson = require("./UniPerson");
const _employeeID = Symbol("employeeID");
const _salary = Symbol("salary");
class Employee extends UniPerson {
  constructor(id, name, employeeID, salary) {
    super(id, name);
    this[_employeeID] = employeeID;
    this[_salary] = salary || null;
  }
  get employeeID() {
    return this[_employeeID];
  }
  set employeeID(value) {
    this[_employeeID] = value;
  }
  get salary() {
    return this[_salary];
  }
  set salary(value) {
    this[_salary] = value;
  }
  toString() {
    return `Employee details: UniPerson: ${super.toString()}, Employee ID: ${
      this[_employeeID]
    }, Salary: ${this[_salary]}`;
  }
}
module.exports = Employee;
