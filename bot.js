const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'DOMIN4TORSMP.aternos.me',   
  port: 52442,         // optional, default 19132
  username: 'SERVERTERMINAL',   // the username you want to join as, optional if online mode
  offline: true  // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
  client.on('error', (err) => {
  console.error('Connection error:', err.message);
  setTimeout(connectToServer, 5000); // Retry after 5 seconds
});   
