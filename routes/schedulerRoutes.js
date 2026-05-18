const express = require("express");
const router = express.Router();

const schedulerController = require("../controllers/schedulerController");
const optimizeSchedule = require("../utils/optimizer");

// 🔵 API health check
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Maintenance Scheduler API Working"
    });
});

// 🔵 REAL API (POST)
router.post("/schedule", schedulerController);

// 🔵 TEST API (browser check - NO POSTMAN needed)
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