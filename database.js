const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_SERVICE_HOST}:${process.env.MONGO_SERVICE_PORT}/workforce_mock_location`).then(
    () => {console.log('connected') },
    err => { console.log('error' + " " + err )
});
