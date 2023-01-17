class BasicCrud {
  constructor(data) {
    this.data = data;
  }

  insertOne(dbCollection){
    return dbCollection.insertOne(this.data);
  }

  //id here is an object
  static findById(id, dbCollection){
    return dbCollection.find(id);
  }

  //select everything
  static getAllCars(dbCollection){
    return dbCollection.find({});
  }

}

exports.basicCrud = BasicCrud;
