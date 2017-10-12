const express = require('express')
const app = express()

app.get('/', function (req, res) {

    res.json(
        {
            "ipaddress": req.connection.remoteAddress || request.get("x-forwarded-for"),
            "language": req.get("accept-language").split(',')[0],
            "software": req.get("user-agent").split('(')[1].split(')')[0]
        }
    );

});

app.listen(3000);