const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')
const bcrypt = require('bcrypt')

require('dotenv').config(); 
const crypto = require('crypto')

router.post('/signup',async(request,response) =>{
   
    
    const {email} = request.body
    const saltPassword1 = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password,saltPassword1)
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:securePassword,
        
    })
    const existingUser = await signUpTemplateCopy.findOne({email});
    if(existingUser) { 
        response.status(400).json({status:"error", error:'An account with this email already exists.'});
        console.log("An account with this email already exists.");
}
    else{
    const result = await signedUpUser.save()
    const {password, ...data} = await result.toJSON()
    response.send(data)
    console.log(data);
}
})

router.post('/login', async (request, response) => {
	const { email,password } = request.body
	const user = await signUpTemplateCopy.findOne({ email }).lean()

	if (!user) {
     response.json({ status: 'error', error: 'User not found' })
     
	}

	if (!await bcrypt.compare(password, user.password)) {
        // the username, password combination is successful
        return response.json({ status: 'error', error: 'Invalid credentials' })
    }

  console.log(user._id,user.username)
  response.send({Name:user.username})
  response.send({message:"Success"})
    
})


module.exports = router