const express = requie ('express');
const app = express();

app.listen(80);

app.get('/*',function(req, res) {
    console.log(req);
    res.send(req.url + 'asdf');
})