const tenisService = require('../SERVICES/tenisrun.service');



const findAlltenisRunController = (req, res) => {
    const tenisrun = tenisService.findAlltenisRunService();
    res.send(tenisrun)
};

const findByIdtenisRunController = (req, res) => {
    const idPar = Number(req.params.id);
    const escolhaTenis = tenisService.findByIdtenisRunService(idPar);
    res.send(escolhaTenis);
};

const createtenisRunController = (req, res) =>{
    const tenis = req.body;
    const newTenis = tenisService.createtenisRunService(tenis);
    res.send(newTenis);
};

const updatetenisRunController = (req, res) => {
    const idPar = Number(req.params.id);
    const tenisEd = req.boby;
    const updatetenisEd = tenisService.updatetenisRunService(idPar, tenisEd);
    res.send(updatetenisEd);
};

const deletetenisRunController = (req, res) => {
    const idPar = req.params.id;
    tenisService.deletetenisRunService(idPar);
    res.send({message: 'Item deletado com sucesso!'});
};

module.exports = {

    findAlltenisRunController,
    findByIdtenisRunController,
    createtenisRunController,
    updatetenisRunController,
    deletetenisRunController,

};