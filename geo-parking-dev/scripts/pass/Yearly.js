import Pass from "./Pass.js";

class YearlyPass extends Pass {
  constructor(vehicle) {
    super(vehicle);
    this.type = "yearly";
    this.price = vehicle.getPriceOptions()["yearly"];
  }
}

export default YearlyPass;
