const transportoPriemones = require('./transportoPriemones');

class Lengvosios extends transportoPriemones {
    constructor(name, steeringWheelPosition, seatCount, wheeelCount) {
        super(name, steeringWheelPosition, seatCount, wheeelCount);
    }
}

module.exports = Lengvosios;