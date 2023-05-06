const Room = require("./Room");

class RoomWithView extends Room {
  constructor(floorNum, roomNum, price, view, numBeds) {
    super(floorNum, roomNum, price);
    this.view = view;
    this.type = "Room with view";
    this.numBeds = numBeds;
    this.description = `A room with View ${this.view} and ${this.numBeds} bed(s)`;
  }

  getView() {
    return this.view;
  }

  getNumBeds() {
    return this.numBeds;
  }
}

module.exports = RoomWithView;
