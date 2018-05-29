const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/workforce_mock_location').then(
    () => {console.log('connected') },
    err => { console.log('error' +err)
});
