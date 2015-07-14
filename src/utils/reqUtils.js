import request from 'reqwest';
import when from 'when';

function getJSON(url, params) {
    return when(request({
        url: url,
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        data: params
    }))
}

export default {
    getJSON: getJSON
}