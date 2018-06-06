const request = require('request-promise-native');

module.exports = async () => {
  const options = {
      method: 'POST',
      uri: 'https://sweetiq-dev.auth0.com/oauth/token',
      body: {
        "audience": "workforce",
        "client_id": "QyDn93EXF7NjGutoOgpmEgFAEcsUdxA5",
        "client_secret": "p1_9Q3SqQj02K5Fv1Bf5J5Jgnb96kWY47dGXwb1wUILAYcqIrcY66Xq09pUtAwSG",
        "grant_type": "client_credentials"
      },
      json: true
  };


  const resp = await request.post(options);
  return resp;
}
