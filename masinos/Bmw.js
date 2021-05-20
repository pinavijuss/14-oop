const Lengvosios = require('./Lengvosios');

class Bmw extends Lengvosios {
    constructor(name, steeringWheelPosition, seatCount, wheeelCount) {
        super(name, steeringWheelPosition, seatCount, wheeelCount);
    }
}

module.exports = Bmw;