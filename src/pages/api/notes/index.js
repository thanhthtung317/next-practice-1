import nc from "next-connect";
import notes from "../../../data/data";

const handler = nc()
                    .get((req, res)=>{
                        res.send({
                            data: notes
                        })
                    })
                    .post((req, res)=>{
                        const note = {
                            ...req.body,
                            id: Date.now()
                        }

                        notes.push(note)

                        res.status(200).send({
                            data: notes
                        })
                    })

export default handler