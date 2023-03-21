const router=require('express').Router();

const healthServiceManager= require('../../models/healthServiceManager.model');

router.get('/',async (req,res) => {
    try {
        const healthServiceManagers =await healthServiceManager.find();
        res.json(healthServiceManagers);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.post('/create',async (req,res)=>{
    try {
        const newHealthServiceManager=await healthServiceManager.create(req.body);
        res.json(newHealthServiceManager);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.put('/update/:Id',async(req,res) => {
    try {
        const healthServiceManagerEdit = await healthServiceManager.findByIdAndUpdate(
            req.params.Id,
            req.body,
            {new: true}
        );
        res.json(healthServiceManagerEdit);
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error'});
    }
});

router.delete('/delete/:Id', async (req, res) => {
    try {
        const healthServiceManager = await healthServiceManager.findByIdAndDelete(req.params.Id);
        res.json(healthServiceManager);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

router.get('/show/:Id', async (req, res) => {
    try {
        const healthServiceManager = await healthServiceManager.findById(req.params.Id);
        res.json(healthServiceManager);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
});

module.exports = router;