const pool=require('../../database/database.js');


const getGames=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM Games ');
        res.json(response.rows);

 };

const createGame=async(req,res)=>{
        const {team1,team2,game_date,winner}=req.body;                        
        const response= await pool.query(`INSERT INTO public.game(
            team1, team2, game_date, winner)
            VALUES (${team1},${team2},${game_date}, null);`);                     
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