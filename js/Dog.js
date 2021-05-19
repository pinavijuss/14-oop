class Dog {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.voiceCount = 0;

    }

    voice() {
        /*console.log('Au au!!!');
       console.log(this.name);
       */

        console.log(`${this.name}: au au!!! (${++this.voiceCount})`);
    }
}


module.exports = Dog;