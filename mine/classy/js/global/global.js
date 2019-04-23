function createGlobal() {

    const properties = [];
    const private = {};

    function get(name) {
        if (properties.includes(name)){
            return private[name];
        }
    }
    function set(name, value) {
        properties.push(name);
        return private[name] = value;
    }

    function list() {
        return properties.slice(-1);
    }

    return {
        get,
        set,
        list,
    }
}

const global = createGlobal();
