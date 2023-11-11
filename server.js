const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const countries = {
    'mexico': {
        'continent': 'North America',
        'language': 'Spanish',
        'currency': 'Mexican Peso'
    },
    'thailand':{
        'continent': 'Asia',
        'language': 'Thai',
        'currency': 'Thai Baht'
    },
    'brazil':{
        'continent': 'South America',
        'language': 'Portugese',
        'currency': 'Brazilian Real'
    }, 
    'unknown': {
        'continent': 'unknown',
        'language': 'unknown',
        'currency': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const country = request.params.name.toLowerCase()

    if( countries[country] ){
        response.json(countries[country])
    }else{
        response.json(countries['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

