const router = require('express').Router()
const Trending = require('../models/Trending')

//CREATE Trending
router.post('/', async (req, res) => {
  const newTrendingPost = new Trending(req.body)
  try {
    const saveTrending = await newTrendingPost.save()
    res.status(200).json(saveTrending)
  } catch (err) {
    res.status(500).json(err)
  }
})

//UPDATE QuickByte
router.put('/:id', async (req, res) => {
  try {
    const trending = await Trending.findById(req.params.id)
    if (trending.username === req.body.username) {
      try {
        const updatedTrending = await Trending.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updatedTrending)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can update only your Trending!')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    const trending = await Trending.findById(req.params.id)
    if (trending.username === req.body.username) {
      try {
        await trending.delete()
        res.status(200).json('Trending Post has been deleted...')
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can delete only your trending Post!')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET QuickByte
router.get('/:id', async (req, res) => {
  try {
    const trending = await Trending.findById(req.params.id)
    res.status(200).json(trending)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ALL QuickBytes
router.get('/', async (req, res) => {
  const username = req.query.user
  const catName = req.query.cat
  try {
    let trendings
    if (username) {
      trendings = await Trending.find({ username })
    } else if (catName) {
      trendings = await Trending.find({
        categories: {
          $in: [catName],
        },
      })
    } else {
      trendings = await Trending.find()
    }
    res.status(200).json(trendings)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
