const express = require('express')
const router = express.Router();
const MenRanking = require("../models/mens");

// Handle Post request ----->
router.post("/mens", async (req, res) => {
    try {
      const addingRanking = new MenRanking(req.body);
  
      const insertMan = await addingRanking.save();
      res.status(201).send(insertMan);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  });

  // -----GET ALL ---->
router.get("/mens", async (req, res) => {
    try {
      const findMens = await MenRanking.find({}).sort({"ranking":1});
  
      res.send(findMens);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  });

  //   --------------------GET BY ID --------------->>

router.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const findMen = await MenRanking.findById({ _id});
      res.send(findMen);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  });

  // ------DELETE SPECIFIC----------->>
router.patch("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const findMen = await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});
      res.send(findMen);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });
  // ------Delete SPECIFIC DOCUMENT------->

router.delete("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const findMen = await MenRanking.findByIdAndDelete(_id);
      res.send(findMen);

    } catch (error) {
      res.status(500).send({ message: error });
    }
  });

  module.exports= router;