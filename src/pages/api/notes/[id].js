import nc from 'next-connect';
import notes from '../../../data/data';

const handler = nc()
  .get((req, res) => {
    const id = req.query.id;
    const note = notes.find(note=>note.id === +id)
//     console.log(notes);
//     console.table({'id': +id,
// 'note':note.title});
    if(!note){
        return res.status(404).send()
    }
    res.send({
      note,
    });
  })
  .patch((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };

    notes.push(note);

    res.status(200).send({
      data: notes,
    });
  });

export default handler;
