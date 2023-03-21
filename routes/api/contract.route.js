const router=require('express').Router();

const Contract= require('../../models/contract.model');

router.get('/',async (req,res) => {
    try {
        const contracts =await Contract.find();
        res.json(contracts);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.post('/create',async (req,res)=>{
    try {
        const newcontract=await Contract.create(req.body);
        res.json(newcontract);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.put('/update/:Id',async(req,res) => {
    try {
        const contractEdit = await Contract.findByIdAndUpdate(
            req.params.Id,
            req.body,
            {new: true}
        );
        res.json(contractEdit);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.delete('/delete/:Id', async (req, res) => {
    try {
        const contract = await Contract.findByIdAndDelete(req.params.Id);
        res.json(contract);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.get('/show/:Id', async (req, res) => {
    try {
        const contract = await Contract.findById(req.params.Id);
        res.json(contract);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

module.exports = router;