function vehicle(type, tire) {
    this.type = type;
    this.tire = tire;
    
    this.printDetails = function() {
      document.write("Type: " + this.type+"<br>");
      document.write("Tire: " + this.tire+"<br>");
    }
  }
  
  var carType = prompt("Enter car type:");
  var carTire = parseInt(prompt("Enter number of tires for the car:"));
  var car = new vehicle(carType, carTire);
  
  var busType = prompt("Enter bus type:");
  var busTire = parseInt(prompt("Enter number of tires for the bus:"));
  var bus = new vehicle(busType, busTire);
  
  var truckType = prompt("Enter truck type:");
  var truckTire = parseInt(prompt("Enter number of tires for the truck:"));
  var truck = new vehicle(truckType, truckTire);
  
  car.printDetails();
  bus.printDetails();
  truck.printDetails();