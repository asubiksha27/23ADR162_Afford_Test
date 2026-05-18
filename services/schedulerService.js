const fs = require("fs");
const path = require("path");

const optimizeSchedule = require("../utils/optimizer");

const generateSchedule = async () => {

    const filePath = path.join(__dirname, "../data/vehicles.json");

    const vehicleData = fs.readFileSync(filePath, "utf-8");

    const vehicles = JSON.parse(vehicleData);

    const result = optimizeSchedule(vehicles);

    return result;
};

module.exports = {
    generateSchedule
};