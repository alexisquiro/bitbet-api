const{Router}=require('express');
const router =Router();
const {    createTicketBet, getTicketBetGame,getTicketBet,getTrans}=require('../../controllers/bet/bet-controller');
//const {logIn}=require('../../controller/user/login.js')


//user 
router.post('/api/createTicketBet/',createTicketBet);
router.get('/api/getTicketBetGame/',getTicketBetGame);
router.get('/api/transHis/',getTrans);




module.exports=router; 