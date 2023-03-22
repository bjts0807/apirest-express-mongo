class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async getAllUsers() {
      const users = await this.userRepository.all();
      return users;
    }
  
    async getUserById(id) {
      const user = await this.userRepository.get(id);
      return user;
    }
  
    async createUser(userData) {
      const newUser = await this.userRepository.create(userData);
      return newUser;
    }
  
    async updateUser(id, userData) {
      const updatedUser = await this.userRepository.update(id, userData);
      return updatedUser;
    }
  
    async deleteUser(id) {
      await this.userRepository.delete(id);
    }

    async processExcel(uploadedFile) {

        const XLSX = require("xlsx");
        const { v4: uuidv4 } = require('uuid');

        const sheets = uploadedFile.SheetNames;

        let users = {};

        sheets.forEach((sheet) => {

            const sheetData = XLSX.utils.sheet_to_json(uploadedFile.Sheets[sheet]);

            sheetData.forEach((row) => {

                if (users[row.NUMID]) {
                    users[row.NUMID].CONTRATOS = [...users[row.NUMID].CONTRATOS, row.CONTRATO];
                    return;
                }

                users[row.NUMID] = {
                    'UUID': uuidv4(),
                    'TIPOID': row.TIPOID,
                    'NUMID': row.NUMID,
                    'APELLIDO_1': row.APELLIDO_1,
                    'APELLIDO_2': row.APELLIDO_2,
                    'NOMBRE_1': row.NOMBRE_1,
                    'NOMBRE_2': row.NOMBRE_2,
                    'CONTRATOS': [row.CONTRATO]
                }
            })
        })
        const user = await this.userRepository.bulkInsert(users);
        return user;
    }

    async showByDocument(document) {
        const user = await this.userRepository.showByDocument(document);
        return user;
      }
  }
  
  module.exports = UserService;
  