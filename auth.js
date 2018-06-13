const request = require('request-promise-native');

module.exports = async () => {
  const options = {
      method: 'POST',
      uri: 'https://sweetiq-dev.auth0.com/oauth/token',
      body: {
        "audience": "workforce",
        "client_id": process.env.AUTH0_TOKEN,
        "client_secret": process.env.AUTH0_SECRET,
        "grant_type": "client_credentials"
      },
      json: true
  };


  const resp = await request.post(options);
  return resp;
}
