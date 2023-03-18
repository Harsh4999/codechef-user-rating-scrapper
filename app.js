const express = require('express');
const app = express();
const port = 3000;
const fetchCodechefRatings = require('./fetchCodechefRatings');
app.use(express.json());
app.get('/codechef/:username',async (req,res)=>{
    const username = req.params.username;
    let rating  = await fetchCodechefRatings.fetchUserRating(username);
    res.send({rating:rating});
})

app.listen(port,'0.0.0.0', () => {
console.log(`Scrapper app listening at http://localhost:${port}`)

});