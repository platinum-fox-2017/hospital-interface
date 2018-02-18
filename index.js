"uses strict"
// const hospitalName       = 'RS. HealtyHacktiv8'
// const hospitalLocation   = 'Jl. Semoga Sehat No. 66, Jakarta Selatan'

const Controller  = require('./controllers/controller')

Controller.listMenu(process.argv.slice(2))
