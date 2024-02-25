export const errorHandler=(error,request,response,next)=>{
    if(error.status)
    response.status(Number(error.status)).send(error.message)
    else
    response.status(503).send(error.message)
}