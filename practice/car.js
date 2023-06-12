function vehicle(type,tire){
    this.tire = tire;
    this.type = type;

    this.printDetail = function(){
        document.write('Type:-'+this.type+'<br>');
        document.write('Tire:-'+this.tire+'<br>');        
    }
}

var carType = prompt("Enter The CarType:-");
var carTire = prompt("Enter Number of tire in Car");
var car = new vehicle(carType,carTire);

var busType = prompt("Enter The BusType:-");
var busTire = prompt("Enter Number of tire in Bus:-");
var bus = new vehicle(busType, busTire);

var truckType = prompt("Enter TruckType:-");
var truckTire = prompt("Enter Number of tire in Truck:-");
var truck = new vehicle(truckType,truckTire);

car.printDetail();
bus.printDetail();
truck.printDetail();