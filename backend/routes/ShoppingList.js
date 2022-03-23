const express = require('express');
const router = express.Router();

const CreateService = require('../services/Create')
const ReadService = require('../services/Read');
const UpdateService = require('../services/Update');
const DeleteService = require('../services/Delete');

router.get('/read', async (req, res) => {
    const results = await ReadService()
    
    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: 'Displaying Shopping List...'
            })
    }
});

router.post('/add', async (req, res) => {
    const { item, quantity } = req.body

    const results = await CreateService({ item, quantity })

    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: 'New item added to Shopping List!'
            })
    } else {
        res 
            .status(200)
            .send({
                status: results,
                message: 'Item not added to Shopping List!'
            })
    }
});

router.put("/update", async (req, res) => {
    const { _id, set } = req.body

    const results = await UpdateService(_id, set)

    if (results) {
        res
            .status(200)
            .send({
                status: results,
                message: 'Shopping List Updated!'
            })
    } else {
        res
            .status(500)
            .send({
                status: results,
                message: 'Update Failed!'
            })
    }
});

router.delete("/delete", async (req, res) => {
    const { _id } = req.body

    const results = await DeleteService(_id)

    if (results) {
        res 
            .status(200)
            .send({
                status: results,
                message: 'Item Deleted!'
            })
    } else {
        res
            .status(500)
            .send({
                status: results,
                message: 'Item not Deleted!'
            })
    }
});

module.exports = router