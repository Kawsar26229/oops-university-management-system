const _id = Symbol("id");
const _roadNo = Symbol("roadNo");
const _city = Symbol("city");
const _state = Symbol("state");
const _country = Symbol("country");
const _postalCode = Symbol("postalCode");

class Address {
  constructor({ id, roadNo, city, state, country, postalCode }) {
    this[_id] = id;
    this[_roadNo] = roadNo || "";
    this[_city] = city || "";
    this[_state] = state || "";
    this[_country] = country || "";
    this[_postalCode] = postalCode;
  }
  get id() {
    return this[_id];
  }
  get roadNo() {
    return this[_roadNo];
  }
  set roadNo(value) {
    this[_roadNo] = value;
  }
  get city() {
    return this[_city];
  }
  set city(value) {
    this[_city] = value;
  }
  get state() {
    return this[_state];
  }
  set state(value) {
    this[_state] = value;
  }
  get country() {
    return this[_country];
  }
  set country(value) {
    this[_country] = value;
  }
  get postalCode() {
    return this[_postalCode];
  }
  set postalCode(value) {
    this[_postalCode] = value;
  }
  toString() {
    return `Address details, ID: ${this[_id]}, Road No: ${this[_roadNo]}, City: ${this[_city]}, State: ${this[_state]}, Country: ${this[_country]}, Postal Code: ${this[_postalCode]}`;
  }
}
module.exports = Address;
