let storage = sessionStorage;

export default {
    set: function(key, value){
        if("string" !== typeof value){
            value = JSON.stringify(value);
        } 

        storage.setItem(key, value);
    },
    get: function(key){
        if(key){
            let data = storage.getItem(key);
            if(data && "undefined" !== data){
                return JSON.parse(data);
            } else {
                return;
            }
        } else {
            return;
        }
    },
    removeStorage: function(key){
        storage.removeItem(key);
    }
}