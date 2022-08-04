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



module.exports={
    getUsers,
    createUser,
    updateUser
}