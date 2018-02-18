"uses strict"

module.exports = class ModelEmployee {
  constructor(user, password, role) {
    this.username = user
    this.password = password
    this.role     = role
    this.isLogin  = false
  }
}
