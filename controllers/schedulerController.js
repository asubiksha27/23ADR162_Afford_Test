const optimizeSchedule = require("../utils/optimizer");

const schedulerController = (req, res) => {

 
    const data = (req.body && req.body.vehicles) ? req.body.vehicles : [
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

    if (!data || data.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No vehicle data found"
        });
    }

    const scheduled = optimizeSchedule(data);

    const highPriority = scheduled.filter(v => v.maintenancePriority === "High");
    const mediumPriority = scheduled.filter(v => v.maintenancePriority === "Medium");
    const lowPriority = scheduled.filter(v => v.maintenancePriority === "Low");

    return res.json({
        success: true,
        totalVehicles: scheduled.length,
        highPriority: highPriority.length,
        mediumPriority: mediumPriority.length,
        lowPriority: lowPriority.length,
        schedule: scheduled
    });
};

module.exports = { schedulerController };
