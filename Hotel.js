
const Room = require('./Room.js');
const RoomWithView = require('./RoomWithView.js');
const SleepingRoom = require('./SleepingRoom.js');
class Hotel {
  Address;
  NumberOfRoom;
  #minFloor;
  #maxFloor;
  rooms = [];
  constructor(Address, NumberOfRoom, minFloor, maxFloor) {
    this.Address = Address;
    this.NumberOfRoom = NumberOfRoom;
    this.#maxFloor = maxFloor;
    this.#minFloor = minFloor;
  }
  get address() {
    return this.Address;
  }
  get numberOfRooms() {
    return this.NumberOfRoom;
  }

  get minFloor() {
    return this.#minFloor;
  }

  get maxFloor() {
    return this.#maxFloor;
  }

  get Room() {
    return this.rooms;
  }
  set address(newAddress) {
    this.Address = newAddress;
  }
  set NumberOfRoom(newNumberOfRoom) {
    this.NumberOfRoom = newNumberOfRoom;
  }
  
  
  set maxFloor(maxFloorValue) {
    this.#maxFloor = maxFloorValue;
  }
  set minFloor(minFloorValue) {
    this.#minFloor = minFloorValue;
  }

  addRoom(room) {
    if (this.rooms.length >= this.NumberOfRoom) {
      return console.log("sorry all rooms in the hotel has been booked");
    } else {
      this.rooms.push(room);
    }
  }

  allBookedRoom() {
    const bookedRooms = this.rooms.filter((room) => room.roomIsBooked);
    console.log(`The following rooms in ${this.address} have been booked:`);
    bookedRooms.forEach((room) => {
      console.log(`Room ${room.roomNum} on floor ${room.floorNum} is a ${room.type}.`);
      console.log(`  Description: ${room.description}`);
      console.log(`  Price: $${room.price} per night`);
    });
  }
  
  printAdvertisement() {
    console.log(`Welcome to our hotel at ${this.address}!`);
    console.log(`We have ${this.numberOfRooms} rooms available from floors ${this.minFloor}-${this.maxFloor}.`);
    if (this.rooms.length > 0) {
      console.log(`Rooms start from $${this.rooms[0].price} per night.`);
    }
  }
  
}
//mock data for the hotel
const hotel = new Hotel("shepard/Bethlehem", 10, 1, 5);
const room1 = new Room(1, "102", 120);
room1.printRoom();
const room2 = new Room(2, "103", 120);
room2.printRoom();
const room3 = new Room(3, "101", 120);
room3.printRoom();
const room4 = new Room(4, "104", 160);
room4.printRoom();
const room5 = new Room(5, "105", 190);
room5.printRoom();
const room6 = new Room(6, "106", 180);
room6.printRoom();
const room7 = new Room(7, "107", 110);
room7.printRoom();
//add room for the hotel instance
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);

// print rooms has been booked in the hotel


hotel.allBookedRoom();
hotel.printAdvertisement();
room1.printRoom();



//!SECTION
const room9 = new SleepingRoom(1, 101, 100, 2);
const room10 = new SleepingRoom(1, 102, 150, 4);
const room11 = new RoomWithView(2, 201, 200, 'ocean', 2);
const room12 = new RoomWithView(2, 202, 250, 'city', 1);
room12.printAdvertisement;
const hotel1 = new Hotel('123 Main St', 6, 1, 3);
hotel1.addRoom(room9);
hotel1.addRoom(room12);
hotel1.addRoom(room10);
hotel1.addRoom(room11);
// Print information about the hotel
console.log(`Welcome to ${hotel.address}!`);
console.log(`We have ${hotel.numberOfRooms} rooms available from floors ${hotel.minFloor}-${hotel.maxFloor}.`);
console.log(`The following rooms are available:`);

// Print information for each room
for (let room of hotel.rooms) {
  console.log(`Room ${room.roomNum} on floor ${room.floorNum} .`);
  // console.log(`  Description: ${room.description}`);
  console.log(`  Price: $${room.price} per night`);
  
  if (room.roomIsBooked) {
    console.log('  This room is currently booked.');
  } else {
    console.log('  This room is available.');
  }
}  // <-- add this closing brace
