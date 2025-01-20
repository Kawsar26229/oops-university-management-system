const _id = Symbol("id");
const _type = Symbol("type");
const _amount = Symbol("amount");
const _time = Symbol("time");
class Account {
  constructor(id, type, amount, time) {
    this[_id] = id;
    this[_type] = type || null;
    this[_amount] = amount || null;
    this[_time] = time || null;
  }
  get id() {
    return this[_id];
  }
  get type() {
    return this[_type];
  }
  set type(value) {
    this[_type] = value;
  }
  get amount() {
    return this[_amount];
  }
  set amount(value) {
    this[_amount] = value;
  }
  get time() {
    return this[_time];
  }
  set time(value) {
    this[_time] = value;
  }
  toSting() {
    return `Account details: ID: ${this[_id]}, Type: ${this[_type]}, Amount: ${this[_amount]}, Time: ${this[_time]}`;
  }
}
module.exports = Account;
