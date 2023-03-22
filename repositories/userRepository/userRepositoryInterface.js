const RepositoryInterface = require("../repositoryInterface");

class UserRepositoryInterface extends RepositoryInterface { 
    async bulkInsert(req,res){}
    async showByDocument(req,res){}
}

module.exports = UserRepositoryInterface;