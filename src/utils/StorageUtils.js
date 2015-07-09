let storage = sessionStorage;

export default {
    setStorage: function(key, value){
        if("string" !== typeof value){
            value = JSON.stringify(value);
        } 

        storage.setItem(key, value);
    },
    getStorage: function(key){
        if(key){
           return JSON.parse(storage.getItem(key));
        } else {
            return;
        }
    },
    removeStorage: function(key){
        storage.removeItem(key);
    }
}