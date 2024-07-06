// const verifyJWT =(req, res, next)=>{
//     const authorizatnHeader = req.headers.authorizatn;
//     if(!authorizatnHeader){
//        return res.status(401).send({error : true, message: 'UnAothorized access'})
//     }
  
//     const token = authorizatnHeader.split(" ")[1]
//     // console.log(token);
//     jwt.verify(token, process.env.DB_ACCESS_TOKEN_SECREAT, (error, decoded)=>{
//         if(error){
//             return  res.status(403).send({error : true, message: 'UnAothorized token'})
//         }
//         req.decoded = decoded;
//         next()
//     })
//   }