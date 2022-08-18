const pool=require('../../database/database.js');


const getUsers=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM  Usuario');
        res.json(response.rows);

 };

const createUser=async(req,res)=>{
        const {name,email,password }=req.body;                        
        const response= await pool.query(`INSERT INTO public.usuario(nombre_usuario, email, pass)VALUES (${name},${email},${email})`);                     
        console.log();   
        res.send(response.rows);                    
}


const updateUser=async(req,res)=>{
    const {name,email}=req.body;  
    const id=req.params.id;
const response= await pool.query();                           
}




const  authLogin=async(req,res)=>{
    const {nombre_usuario,pass}=req.body;  
    const id=req.params.id;
const response= await pool.query(`SELECT * FROM Usuario WHERE nombre_usuario = ${nombre_usuario} AND pass = ${pass}`); 
if (response.length > 0) {
    // Authenticate the use
    // Redirect to home page
    res.send(response.rows)
} else {
    res.send('Incorrect Username and/or Password!');
}		


}
module.exports={
    getUsers,
    createUser,
    updateUser,
    authLogin
}