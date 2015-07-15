var resHeader = {
    "Access-Control-Allow-Origin": "*"
};
function createMsg(status, msg, data) {
    return {
        status: status,
        message: msg || "",
        data: data || null
    }
};

function createMessage(success, message, data) {
    return {
        success: success,
        message: message || "",
        data: data || null
    }
};

exports.success = function(res, message) {
    res.set(resHeader);
    return res.jsonp(createMessage(true, message, null));
}

exports.failure = function(res, message) {
    res.set(resHeader);
    return res.jsonp(createMessage(false, message, null));
}

exports.returnData = function(res, params) {
    var success = true, message = "", data = {};
    if("string" === typeof params){
        message = params;
    } else if("object" === typeof params){
        success = params.status || true;
        message = params.message || "";
        data = params.data || null;
    }
    res.set(resHeader);
    return res.jsonp(createMessage(success, message, data));
}