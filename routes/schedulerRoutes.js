const express = require("express");
const router = express.Router();

const { schedulerController } = require("../controllers/schedulerController");
const optimizeSchedule = require("../utils/optimizer");


router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Maintenance Scheduler API Working"
    });
});

router.get("/schedule", schedulerController);


router.get("/test", (req, res) => {
    const sampleVehicles = [
        {
            vehicleId: "V102",
            mileage: 18000,
            lastServiceDays: 220
        },
        {
            vehicleId: "V103",
            mileage: 9000,
            lastServiceDays: 100
        }
    ];

    const result = optimizeSchedule(sampleVehicles);

    res.json({
        success: true,
        totalVehicles: result.length,
        schedule: result
    });
});

module.exports = router;
