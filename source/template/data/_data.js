let dataNames = [
    'common', 
    'about',
    'blog',
    'works',
    'welcome'
];

let data = (function (dataNames) {
    let result = {};
    dataNames.forEach((item) => {
        let data = require(`./${item}.json`);
        result[item] = data;
    })
    return result;
})(dataNames);

module.exports = data;