var resHeader = {
    "Access-Control-Allow-Origin": "*"
};

function createMessage(resultCode, message, data) {
    return {
        resultCode: resultCode,
        message: message || "",
        data: data || null
    }
};

exports.success = function(res, message) {
    res.set(resHeader);
    return res.json(createMessage(0, message));
}

exports.fail = function(res, resultCode, message) {
    res.set(resHeader);
    return res.json(createMessage(resultCode, message));
}

exports.returnData = function(res, params) {
    var resultCode = 0, message = "", data = {};
    if("string" === typeof params){
        message = params;
    } else if("object" === typeof params){
        resultCode = params.resultCode || 0;
        message = params.message || "";
        data = params.data || null;
    }
    res.set(resHeader);
    return res.json(createMessage(resultCode, message, data));
}