const logger = (req, res, next) => {
    console.log("=========");
    console.log(`[LOG] ${new Date().toISOString()}`);
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    console.log(`[IP] ${req.ip}`);
    console.log("=========");

    next();
};

module.exports = logger;
