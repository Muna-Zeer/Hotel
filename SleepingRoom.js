const Room = require("./Room");

class SleepingRoom extends Room {
  constructor(floorNum, roomNum, price, capacity) {
    super(floorNum, roomNum, price);
    this.capacity = capacity;
    this.type="Sleeping Room";
    this.description="A room contain bed for sleeping";
  }

  getCapacity() {
    return this.capacity;
  }
}
module.exports = SleepingRoom;