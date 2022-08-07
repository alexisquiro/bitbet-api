const pool=require('../../database/database.js');


const getTicketBet=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM Bet ');
        res.json(response.rows);

 };


 const getTicketBetGame=async  (req,res)=>{
    const {id_game}= req.body;
    const response= await pool.query(`SELECT * FROM Bet Where id_game= ${id_game} `);
        res.json(response.rows);

 };

const createTicketBet=async(req,res)=>{
        const {id_user, id_game, team, email_pay, hash_pay, amount, confirm}=req.body;                        
        const response= await pool.query(`INSERT INTO public.ticket_bet(
            id_user, id_game, team, email_pay, hash_pay, amount, confirm)
            VALUES ( ${id_user}, ${id_game}, ${team},${email_pay},${hash_pay} , ${amount},${1} );`);                     
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