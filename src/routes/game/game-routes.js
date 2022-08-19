const{Router}=require('express');
const router =Router();
const {getGames,
    createGame,
    updateGame,
    getGamesId
}=require('../../controllers/game/game-controller');
//const {logIn}=require('../../controller/user/login.js')


//user 
router.get('/api/getGames/',getGames);
router.get('/api/getGamesId/',getGamesId);
router.post('/api/createGames/',createGame);
router.put('/api/updatesGame/',updateGame);




module.exports=router; 