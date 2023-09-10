const UserEntity = require("../entities/User")
const Service = require("./Service");

let instance
class UserService extends Service{

  constructor() {
    if(instance) return instance;

    super(UserEntity);
    
    instance = this;
  }
}

module.exports = UserService;
