import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YO73fWwQWO99hCToTv1JNug-43TRcas9ddnx_y_TOmZAbiV4hPb8i49Br2XVjVI2C7-WS5uwID3XbgI4oDPD31EU-gD3QmPDdK3EJuEAQNmOlngzkXk1tfjFFzRfXnYx'
    }
});

