/* const router = require('express').Router();
const User = require('../../models/user.model');
const XLSX = require("xlsx");
const { v4: uuidv4 } = require('uuid'); 

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.put('/update/:Id', async (req, res) => {
    try {
        const userEdit = await User.findByIdAndUpdate(
            req.params.Id,
            req.body,
            { new: true }
        );
        res.json(userEdit);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.delete('/delete/:Id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.Id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.get('/show/:Id', async (req, res) => {
    try {
        const user = await User.findById(req.params.Id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.get('/showByDocument/:document', async (req, res) => {
    try {
        const user = await User.find({ documentNumber: req.params.document });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});



router.post("/process/excel", async (req, res) => {
    //"C:\\Users\\dev1_\\Documents\\BASE DE DATOS CAJACOPI ENERO 2023.xlsx"
    const uploadedFile = XLSX.read(req.files.file.data);
    const sheets = uploadedFile.SheetNames;

    let users = {};
    sheets.forEach((sheet) => {
        sheetData = XLSX.utils.sheet_to_json(uploadedFile.Sheets[sheet]);
        sheetData.forEach((row) => {

            if (users[row.NUMID]) {
                users[row.NUMID].CONTRATOS = [...users[row.NUMID].CONTRATOS,row.CONTRATO];
                return;
            }

            users[row.NUMID] = {
                'UUID' : uuidv4(),
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

    res.json(users);
});



module.exports = router; */
const router = require('express').Router();

const UserController = require('../../controllers/userController');
const UserRepository = require('../../repositories/userRepository/userRepository');
const UserService = require('../../services/userService');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', userController.getAllUsers.bind(userController));
router.get('/show/:id', userController.getUserById.bind(userController));
router.post('/create', userController.createUser.bind(userController));
router.put('/update/:id', userController.updateUser.bind(userController));
router.delete('/delete/:id', userController.deleteUser.bind(userController));
router.post('/process/excel', userController.processExcel.bind(userController));
router.get('/showByDocument/:document', userController.showByDocument.bind(userController));

module.exports = router; 