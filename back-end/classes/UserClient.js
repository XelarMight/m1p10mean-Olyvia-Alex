class UserClient {
  constructor(name, firstName, birthdate,
      id, phone, email, password) {
    this.name = name;
    this.firstName = firstName;
    this.birthdate = birthdate;
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

exports.user = UserClient;
