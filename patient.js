class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
    this.next_meeting = ''
  }
}

module.exports = Patient
