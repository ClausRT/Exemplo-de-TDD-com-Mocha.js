var fatorial = function(num) {
    return num < 2 ? 1 : num * fatorial(num - 1);
};

module.exports = fatorial;