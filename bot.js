const bedrock = require('bedrock-protocol')

function connectToServer() {
  const client = bedrock.createClient({
    host: 'DOMIN4TORSMP.aternos.me',
    port: 52442,
    username: 'SERVERTERMINAL',
    offline: false
  })

  client.on('error', (err) => {
    console.error('Connection error:', err.message)
    setTimeout(connectToServer, 5000) // Reconnect
  })

  client.on('end', () => {
    console.log('Disconnected. Reconnecting...')
    setTimeout(connectToServer, 5000)
  })
}

connectToServer()   
