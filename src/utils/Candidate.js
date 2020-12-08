import uuid from 'react-uuid';

export default class Candidate {
  constructor(name, age, email, address, stage) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    this.stage = stage;
  }
}


