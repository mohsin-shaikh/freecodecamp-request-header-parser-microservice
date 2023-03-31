const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const ping = require('./api/ping')
const { port } = require('./config/vars')
const logger = require('./utils/logger')
const getWhoAmI = require('./api/getWhoAmI')


// Initialize express
const app = express()
const PORT = port

// Common Middleware
app.use(cors())
app.use(express.json()) // JSON parsing
app.use(helmet()) // secure apps by setting various HTTP headers

// -----------------------------------------------------------------------------
// API's
// -----------------------------------------------------------------------------
// Health Check
app.get('/', ping)
// Create Payment Link
app.get('/api/whoami', getWhoAmI)

// Start express on the defined port
app.listen(
    PORT,
    () => {
        console.log(`🚀 Server running on port ${PORT}`)
        logger.info(`Server started and running on ${PORT}`)
    }
)
