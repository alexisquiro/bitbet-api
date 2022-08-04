const pool=require('../../database/database.js');


const getGames=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM  Usuario');
        res.json(response.rows);

 };

const createGame=async(req,res)=>{
        const {name,email,password }=req.body;                        
        const response= await pool.query(`INSERT INTO public.usuario(nombre_usuario, email, pass)VALUES (${name},${email},${email})`);                     
        console.log();   
        res.send(response.rows);                    
}


const updateGame=async(req,res)=>{
    const {name,email}=req.body;  
    const id=req.params.id;
const response= await pool.query();                           
}



module.exports={
    getGames,
    createGame,
    updateGame
}