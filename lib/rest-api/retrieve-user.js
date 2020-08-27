const axios = require('axios');


export const getUser = () =>
    axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        });