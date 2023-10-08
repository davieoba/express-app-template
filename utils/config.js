const { PORT } = process.env
const { MONGODB_URI } = process.env
const { MONGODB_USERNAME } = process.env
const { MONGODB_PASSWORD } = process.env

module.exports = {
  PORT,
  MONGODB_URI,
  MONGODB_USERNAME,
  MONGODB_PASSWORD
}