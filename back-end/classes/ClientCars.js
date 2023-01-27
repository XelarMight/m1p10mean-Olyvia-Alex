class ClientCars {
  constructor(make, model, year, registration, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.registration = registration;
    this.type = type;
  }

  insertOne(dbCollection){
    return dbCollection.insertOne(this);
  }

  static findById(id, dbCollection){
    
  }

  static getAllCars(dbCollection){

  }
  exports.car = ClientCars;
}
