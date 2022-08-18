const{Router}=require('express');
const router =Router();
const {getUsers, createUser,updateUser,authLogin}=require('../../controllers/user/user-controller');
//const {logIn}=require('../../controller/user/login.js')


//user 
router.get('/api/users/',getUsers);
router.post('/api/users/',createUser);
router.put('/api/users/:id',updateUser);

//Login 
router.post('/api/logIn/',authLogin);



module.exports=router; 