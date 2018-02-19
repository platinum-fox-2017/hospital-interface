const fs = require('fs');

class ModelEmployee {
    constructor(username, password, role) {
        this.username = username
        this.password = password
        this.role = role
    }
}

module.exports = ModelEmployee;