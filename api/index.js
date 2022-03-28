const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const blogRoute = require('./routes/blog')
const newsRoute = require('./routes/news')
const postRoute = require('./routes/posts')
const quickByteRoute = require('./routes/quickByte')
const trendingRoute = require('./routes/trending')
const videosRoute = require('./routes/ourVideos')
const categoryRoute = require('./routes/categories')
const freeCourseRoute = require('./routes/freeCourse')
const electricCarRoute = require('./routes/electricCar')
const electricBikeRoute = require('./routes/electricBike')
const PORT = process.env.PORT || 5000

const cloudinary = require('./Utils/cloudinary')
const upload = require('./Utils/multer')
const path = require('path')
dotenv.config()
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    res.status(200).json(result)
  } catch (error) {
    console.log('Cannot upload the Photo BAckend')
  }
})

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/blog', blogRoute)
app.use('/api/news', newsRoute)
app.use('/api/post', postRoute)
app.use('/api/video', videosRoute)
app.use('/api/trending', trendingRoute)
app.use('/api/quickbyte', quickByteRoute)
app.use('/api/categorie', categoryRoute)
app.use('/api/freecourse', freeCourseRoute)
app.use('/api/ecar', electricCarRoute)
app.use('/api/ebike', electricBikeRoute)

app.get('/', (req, res) => {
  res.send('Hello to Blog API')
})

app.listen(PORT, () => {
  console.log('Backend is running.')
})
