const router = require('express').Router()
const ElectricCar = require('../models/ElectricCar')

//CREATE ElectricCar
router.post('/', async (req, res) => {
  const newElectricCar = new ElectricCar(req.body)
  try {
    const savedElectricCar = await newElectricCar.save()
    res.status(200).json(savedElectricCar)
  } catch (err) {
    res.status(500).json(err)
  }
})

//UPDATE ElectricCar
router.put('/:id', async (req, res) => {
  try {
    const ecar = await ElectricCar.findById(req.params.id)
    if (ecar.username === req.body.username) {
      try {
        const updateecar = await ElectricCar.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updateecar)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can update only your e-car!')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE ElectricCar
router.delete('/:id', async (req, res) => {
  try {
    const electricCar = await ElectricCar.findById(req.params.id)
    if (electricCar.username === req.body.username) {
      try {
        await electricCar.delete()
        res.status(200).json('electricCar has been deleted...')
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can delete only your electricCar!')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ElectricCar
router.get('/:id', async (req, res) => {
  try {
    const electricCar = await ElectricCar.findById(req.params.id)
    res.status(200).json(electricCar)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ALL ElectricCar
router.get('/', async (req, res) => {
  const username = req.query.user
  const catName = req.query.cat
  try {
    let electricCar
    if (username) {
      electricCar = await ElectricCar.find({ username })
    } else if (catName) {
      electricCar = await ElectricCar.find({
        categories: {
          $in: [catName],
        },
      })
    } else {
      electricCar = await ElectricCar.find()
    }
    res.status(200).json(electricCar)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
