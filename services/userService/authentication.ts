import userdb from './userdb.json';
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(userdb.GOOGLE_CLIENT_ID);

// app.post('/api/google-auth', async (req, res) => {
//     const { token } = req.body;
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: userdb.GOOGLE_CLIENT_ID,
//     });
//     const { name, email, picture } = ticket.getPayload();
//   });
