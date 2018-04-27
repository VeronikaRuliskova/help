let attributes = [];
let cols = 12;
["s", "m", "l"].forEach((dim) => {
    for(let i = 1; i <= cols; i++){
        let key = dim + i;
        attributes.push(key);
    }
});

export default attributes;
