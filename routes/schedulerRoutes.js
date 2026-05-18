const express = require("express");
const router = express.Router();

const { schedulerController } = require("../controllers/schedulerController");
const optimizeSchedule = require("../utils/optimizer");

// ✅ Health check
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Maintenance Scheduler API Working"
    });
});

// ✅ MAIN API (browser friendly)
router.get("/schedule", schedulerController);

// ✅ TEST API (safe demo)
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
