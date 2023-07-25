class Pass {
  constructor(vehicle) {
    this.id = "pass-" + new Date().getTime();
    this.vehicle = vehicle;
  }

  print() {
    let passCreationTimeObject = new Date(parseInt(this.id.split("-")[1]));
    passCreationTimeObject.setDate(
      passCreationTimeObject.getDate() +
        (this.type === "daily" ? 1 : (this.type = "monthy" ? 30 : 365))
    );

    let passElement = document.getElementById("pass");
    passElement.innerHTML = `
        <div class="row">
            <div class="col">Pass Id :</div>
            <div class="col">${this.id}</div>
        </div>

        <div class="row">
            <div class="col">Vehicle Id:</div>
            <div class="col">${this.vehicle.name}</div>
        </div>

        <div class="row">
            <div class="col">Owner Name :</div>
            <div class="col">${this.vehicle.owner.name}</div>
        </div>

        <div class="row">
            <div class="col">Expiry :</div>
            <div class="col">${passCreationTimeObject}</div>
        </div>
    `;

    passElement.style.display = "block";
  }
}

export default Pass;
