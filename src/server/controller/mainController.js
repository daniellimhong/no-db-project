const data = require("../data/data.json");
let id = 5 // amount of dummy data id's

module.exports = {
    getVids: (req, res, next) => {
        res.status(200).send(data)
    },

    addVid: (req, res, next) => {
        const { title, vidId } = req.body;
        data.push({ 
            id: id, 
            title, 
            vidId 
        });
        id++;
        res.status(200).send(data);
    },

    updateVid: (req, res, next) => {
        const { title, vidId } = req.body;
        const updateId = req.params.id;


        const index = data.findIndex(data => data.id == updateId);
        if (index == -1){
            return res.status(500).send("Video not found")
        } 
        data[index] = {
            id: updateId,
            title: title,
            vidId: vidId
        };
        res.status(200).send(data);
        
    },

    deleteVid: ( req, res, next ) => {
        const {id} = req.params;
        // index = data.findIndex(data => data.id == id);
        console.log(id)
        data.splice(id, 1)
        res.status(200).send(data);
    }
};