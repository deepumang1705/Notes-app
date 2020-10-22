const router = require("express").Router();
const Notes = require('../model/Notes')

router.get("/", function(req, res) {
    res.send('Hello')
})

router.get("/notes", async (req,res) => {
    try {
        const notes = await Notes.find({})
        res.send(notes)
    } catch (error) {
        res.status(500)
    }
})

router.get("/notes/:noteId", async (req,res) => {
  try {
      const notes = await Notes.findById({
        _id : req.params.noteId
      })
      res.send(notes)
  } catch (error) {
      res.status(500)
  }
})

router.post("/notes", async (req,res) => {
   try { const notes = new Notes();
    notes.title = req.body.title;
    notes.content = req.body.content;
    await notes.save();
    res.send(notes);
   } catch (error) {
       res.status(500)
   }
})

router.put('/notes/:noteId', async (req, res) => {
   try { const note = await Notes.findByIdAndUpdate({
        _id: req.params.noteId
    }, req.body, {
        new: true,
        runValidators: true
    });
    res.send(note)
    } catch (error) {
        res.status(500)
    }
});

router.delete('/notes/:noteId', async (req, res) => {
    try { const note = await Notes.findByIdAndRemove({
        _id: req.params.noteId
    });
    res.send(note);
    } catch (error) {
        res.status(500)
    }
})


module.exports = router;
