import request from 'reqwest';
import when from 'when';

function getJSON(url) {
    return when(request({
        url: url,
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        data: {}
    }))
}

export default {
    getJSON: getJSON
}