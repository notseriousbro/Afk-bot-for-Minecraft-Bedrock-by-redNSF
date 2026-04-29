const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'DOMIN4TORSMP.aternos.me',   
  port: 52442,         
  username: 'SERVERTERMINAL',   
  offline: true  
}) // ← Missing closing parenthesis and bracket

client.on('error', (err) => {
  console.error('Connection error:', err.message)
  setTimeout(connectToServer, 5000)
})   
