const express = require("express");
const app = express();

const mc = require("./controller/mainController")

app.use(express.json());

app.get('/api/home', mc.getVids)
app.post('/api/home', mc.addVid)
app.put('/api/home/:id', mc.updateVid)
app.delete('/api/home/:id', mc.deleteVid)

const port = 4000;
app.listen(port, () => {
    console.log(`server listening on port ${port}.`)
})  