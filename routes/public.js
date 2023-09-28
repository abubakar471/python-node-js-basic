const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

router.get("/", (req, res) => {
    res.json({
        message: "welcome to node js server"
    })
})

router.get("/secret", (req, res) => {
    var dataToSend;
    var python = spawn('python', ['./python-models/py-mod.py']);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.json({
            message: "this is secret site",
            data: dataToSend
        })
    });


})

module.exports = router