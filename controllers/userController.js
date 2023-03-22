class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUsers(req, res) {
        const users = await this.userService.getAllUsers();
        res.send(users);
    }

    async getUserById(req, res) {
        const id = req.params.id;
        const user = await this.userService.getUserById(id);
        res.send(user);
    }

    async createUser(req, res) {
        const userData = req.body;
        const newUser = await this.userService.createUser(userData);
        res.send(newUser);
    }

    async updateUser(req, res) {
        const id = req.params.id;
        const userData = req.body;
        const updatedUser = await this.userService.updateUser(id, userData);
        res.send(updatedUser);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        await this.userService.deleteUser(id);
        res.send('User deleted successfully');
    }

    async processExcel(req, res) {
        const XLSX = require("xlsx");
        const uploadedFile = XLSX.read(req.files.file.data);
        const data= await this.userService.processExcel(uploadedFile);
        res.send(data);
    }

    async showByDocument(req, res){
        try {
            const document = req.params.document;
            const user = await this.userService.showByDocument(document);
            res.send(user);
        } catch (error) {
            res.status(500).json({ error: 'Ha ocurrido un error' });
        }
       
    }
}

module.exports = UserController;
