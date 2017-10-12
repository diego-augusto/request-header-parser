const express = require('express')
const app = express()

app.get('/api/whoami/', function (req, res) {

    const ip  = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

    res.json(
        {
            "ipaddress": ip.split(',')[0],
            "language": req.get("accept-language").split(',')[0],
            "software": req.get("user-agent").split('(')[1].split(')')[0]
        }
    );

});

app.listen(3000);