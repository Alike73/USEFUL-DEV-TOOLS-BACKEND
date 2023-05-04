
const ToolsModel = require('./ToolsModel');

// GET
module.exports.getTools = async(req, res) => {
    const myTools = await ToolsModel.find();
    res.send(myTools)
}

// POST
module.exports.saveTool = async(req, res) => {
    const { image, title, text, toolLink, toolType } = req.body;
    ToolsModel.create({ image, title, text, toolLink, toolType})
    .then((data) => {console.log('TOOL IS ADDED!')
    res.send(data)
    })
}

// EDIT
module.exports.editTool = async(req, res) => {
    const { _id, image, title, text, toolLink, toolType } = req.body;
    ToolsModel.findByIdAndUpdate(_id, {image, title, text, toolLink, toolType})
    .then(() => res.send('TOOL IS UPDATED!'))
}

// DELETE
module.exports.deleteTool = async(req, res) => {
    const { _id } = req.body;
    ToolsModel.findByIdAndDelete(_id)
    .then(() => res.send('TOOL IS DELETED!'))
}