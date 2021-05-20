class transportoPriemones {
    constructor(name, steeringWheelPosition, seatCount, wheelCount) {
        this.name = name;
        this.steeringWheelPosition = steeringWheelPosition;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
    }

    turnOnTheEngine() {
        this.engineIsOn = false;
    }
    turnOnTheEngine() {
        this.engineIsOn = true;
    }
}

module.exports = transportoPriemones;