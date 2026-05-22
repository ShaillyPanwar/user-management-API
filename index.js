const express = require('express');
const app = express();
const PORT = 8000;

const users=require('./MOCK_DATA.json'); //imports users data from the JSON file
app.get('/api/users' ,(req,res)=>{
    return res.json(users); //sends the users data as a JSON response
});

app.get('/users',(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
     return res.send(html);
});

app.get("/api/users/:id",(req,res)=>{
    const userid=Number(req.params.id); // Extracts the user ID from the request parameters and converts it to a number
    const user=users.find((user)=>user.id===userid); // Searches for the user with the matching ID in the users array
    return res.json(user);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 