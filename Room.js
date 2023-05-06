class Room {
    #isBooked=false;
    constructor(floorNum,roomNum,price){
        this.floorNum=floorNum;
        this.roomNum=roomNum;
        this.price=price;
        this.#isBooked=false;
    }
    get roomIsBooked(){
        return this.#isBooked;
    }
    get IsBooked(){
        return this.#isBooked=true;
    }
    printRoom(){
        return console.log(`Room ${this.roomNum} on floor ${this.floorNum} has costs ${this.price} for every night`);
    }   
}
module.exports = Room;
