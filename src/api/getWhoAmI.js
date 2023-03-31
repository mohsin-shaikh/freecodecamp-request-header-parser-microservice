const { uniqueId } = require('../utils/helper');
const logger = require('../utils/logger')


const getWhoAmI = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    logger.info('getWhoAmI Start')
    return res.status(200).json({
        ipaddress: ip,
        language: 'en',
        software: uniqueId()
    })
}

module.exports = getWhoAmI;
