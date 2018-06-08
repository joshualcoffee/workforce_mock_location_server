const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.WORKFORCE_FAKE_SERVICE_MONGO_SERVICE_SERVICE_HOST}:${process.env.WORKFORCE_FAKE_SERVICE_MONGO_SERVICE_SERVICE_PORT}/workforce_mock_location`).then(
    () => {console.log('connected') },
    err => { console.log('error' + " " + err )
});
