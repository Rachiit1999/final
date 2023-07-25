import Pass from "./Pass.js";

class DailyPass extends Pass {
  constructor(vehicle) {
    super(vehicle);
    this.type = "daily";
    this.price = vehicle.getPriceOptions()["daily"];
  }
}

export default DailyPass;
