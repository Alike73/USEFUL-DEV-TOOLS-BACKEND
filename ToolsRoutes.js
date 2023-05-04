
const { Router } = require('express');
const { getTools, saveTool, deleteTool, editTool } = require('./ToolsController');
const router = Router();

router.get('/', getTools)
router.post('/saveTool', saveTool)
router.put('/editTool', editTool)
router.post('/deleteTool', deleteTool)

module.exports = router