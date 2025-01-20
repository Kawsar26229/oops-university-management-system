const UniPerson = require("./UniPerson");
const _studentID = Symbol("studentID");
const _guardian = Symbol("guardian");
const _account = Symbol("account");
const _exams = Symbol("exams");
const _fees = Symbol("fees");
class Student extends UniPerson {
  constructor(id, name, studentID, guardian) {
    super(id, name);
    this[_studentID] = studentID;
    this[_guardian] = guardian;
    this[_account] = null;
    this[_exams] = [];
    this[_fees] = null;
  }
  get studentID() {
    return this[_studentID];
  }
  set studentID(value) {
    this[_studentID] = value;
  }
  get guardian() {
    return this[_guardian];
  }
  set guardian(value) {
    this[_guardian] = value;
  }
  get account() {
    return this[_account];
  }
  set account(value) {
    this[_account] = value;
  }
  get exams() {
    return this[_exams];
  }
  set exams(value) {
    this[_exams] = value;
  }
  get fees() {
    return this[_fees];
  }
  set fees(value) {
    this[_fees] = value;
  }
  toSting() {
    return `Student details: UniPerson: ${super.toString()}, Student ID: ${
      this[_studentID]
    }, Account: ${this[_account]}, Exams: ${this[_exams]}, Fees: ${
      this[_fees]
    }`;
  }
}
module.exports = Student;
