// build an iterable from an object
export const buildMap = (obj) => {
    let map = new Map();
    Object.keys(obj).forEach(key => {
        map.set(key, obj[key]);
    });
    return map;
};

export const onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
};