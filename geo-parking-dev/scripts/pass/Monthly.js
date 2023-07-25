import Pass from "./Pass.js";

class MonthyPass extends Pass {
  constructor(vehicle) {
    super(vehicle);
    this.type = "monthy";
    this.price = vehicle.getPriceOptions()["monthy"];
  }
}

export default MonthyPass;
