const optimizeSchedule = (vehicles) => {

    const scheduledVehicles = vehicles
        .filter(
            vehicle =>
                vehicle.vehicleId &&
                vehicle.mileage &&
                vehicle.lastServiceDays
        )
        .map((vehicle) => {

            let priority = "Low";
            let nextServiceInDays = 90;

            if (
                vehicle.mileage > 15000 ||
                vehicle.lastServiceDays > 180
            ) {
                priority = "High";
                nextServiceInDays = 7;
            } else if (
                vehicle.mileage > 10000 ||
                vehicle.lastServiceDays > 120
            ) {
                priority = "Medium";
                nextServiceInDays = 30;
            }

            return {
                vehicleId: vehicle.vehicleId,
                mileage: vehicle.mileage,
                lastServiceDays: vehicle.lastServiceDays,
                maintenancePriority: priority,
                nextServiceInDays: nextServiceInDays,
                serviceStatus:
                    priority === "High"
                        ? "Immediate Service Required"
                        : priority === "Medium"
                        ? "Service Due Soon"
                        : "Vehicle Healthy"
            };
        });

    scheduledVehicles.sort((a, b) => {

        const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3
        };

        return (
            priorityOrder[a.maintenancePriority] -
            priorityOrder[b.maintenancePriority]
        );
    });

    return scheduledVehicles;
};

module.exports = optimizeSchedule;