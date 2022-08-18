const pool=require('../../database/database.js');
const Binance = require('binance-api-node').default

const api_binance ="tItrNWd7lnFflfZ1x2knUHpiOczypID7QxBanFATkmAy2qH5vhwwP9qUPKIwC6MT";
const api_private= "OorKgPbwd1TonWmo31mxSNwQXVV3ycPJaUA1iN0AUrj6A65y9X0dKAw8TINZWD7o";

const binance = Binance({
	apiKey: api_binance,
	apiSecret: api_private,
  })

const getTicketBet=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM Bet ');
        res.json(response.rows);

 };


 const getTrans=async  (req,res)=>{
    //const response= await pool.query('SELECT * FROM Bet ');
    res.json (await binance.withdrawHistory());


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

 




module.exports={
    createTicketBet,
    getTicketBetGame,
    getTicketBet,
    getTrans
}