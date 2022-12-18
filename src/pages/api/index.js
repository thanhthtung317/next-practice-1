import nc from "next-connect";

const handler = nc()
                .get((req, res)=>{
                    res.send({
                        message: 'ok'
                    })
                })
                .post((req,res)=>{
                    res.send({
                        message: 'posted'
                    })
                })
                
export default handler