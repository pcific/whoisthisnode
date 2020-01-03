const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hostip = require('./ip.js')

app.get('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ;

    const envVal = process.env.USER || process.env.HOME

    res.end(`hi! whoisthis
hostIp:    ${hostip().join(', ')}
clientIp:  ${clientIp}
envVal:   ${envVal}    
    
`)
})

app.listen(port, () => console.log(`Start ... on port ${port}!`))

