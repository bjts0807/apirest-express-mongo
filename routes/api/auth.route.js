const router=require('express').Router();
const singIn = require('../../repository/auth/index');
const verifyToken = require('../../repository/auth/admin/index');
const logout =require('../../repository/auth/logout');

router.post('/singIn', async(req, res)=>{
    try {
        
        const response=await singIn(req.body.username, req.body.password);
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    } 
})

router.post('/verifyToken', async(req, res)=>{
    try {
        const response = await verifyToken(req.body.token);
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    } 
});

router.post('/logout', (req, res)=>{
    try {
        //res.json('saliendo');
         logout();

    } catch (error) {
        res.status(500).json(error);
    } 
})

module.exports = router