const express = require('express');
const app = express();
const PORT = 8000;

const users=require('./MOCK_DATA.json'); //imports users data from the JSON file
app.get('/users' ,(req,res)=>{
    return res.json(users); //sends the users data as a JSON response
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});