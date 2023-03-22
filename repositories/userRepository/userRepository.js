const mongoose = require('mongoose');
//const User = mongoose.model('user.model');
const User = require('../../models/user.model');

const UserRepositoryInterface = require('./userRepositoryInterface');

class UserRepository extends UserRepositoryInterface{

    async all() {
        const users = await User.find();
        return users;
    }

    async get(id) {
        const user = await User.findById(id);
        return user;
    }

    async update(userData) {
        const user = new User(userData);
        await user.save();
        return user;
    }

    async create(id, userData) {
        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        return user;
    }

    async delete(id) {
        await User.findByIdAndDelete(id);
    }

    async bulkInsert(data) {
        return data;
    }

    async showByDocument(document) {
        const user = await User.find({ documentNumber:document});
        return user;
    }
}

module.exports = UserRepository;
