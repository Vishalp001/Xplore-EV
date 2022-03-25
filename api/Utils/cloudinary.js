const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'vishalp001',
  api_key: '673756243698718',
  api_secret: 'iv6un3AJ4PHRRiLkkqA6UBcbmt0',
})

module.exports = cloudinary
