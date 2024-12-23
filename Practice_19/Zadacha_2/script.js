class Delivery {
    constructor(name, address, distance) {
      this.name = name;
      this.address = address;
      this.distance = distance;
      this.status = "delivery";
    }
  }
  
  class EditDelivery extends Delivery {
    constructor(name, address, distance, status = "delivery") {
      super(name, address, distance);
      this.status = status;
    }
  
    updateDelivery(name, address, distance, status) {
      this.name = name;
      this.address = address;
      this.distance = distance;
      this.status = status;
    }
  }
  
  const deliveries = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
  ];
  
  function renderDeliveries() {
    document.querySelectorAll(".delivery-container").forEach(container => container.innerHTML = "");
  
    deliveries.forEach((delivery, index) => {
      const card = document.createElement("div");
      card.className = `delivery-card ${delivery.status}`;
      card.innerHTML = `
        <h3>${delivery.name}</h3>
        <p>${delivery.address}</p>
        <p>${delivery.distance} км</p>
        <button class="edit-btn" onclick="openEditModal(${index})">Изменить</button>
      `;
  
      const container = document.getElementById(`${delivery.status}-section`).querySelector(".delivery-container");
      container.appendChild(card);
    });
  }
  
  function openEditModal(index) {
    currentEditIndex = index;
    const delivery = deliveries[index];
    editName.value = delivery.name;
    editAddress.value = delivery.address;
    editDistance.value = delivery.distance;
    editStatus.value = delivery.status;
    modal.classList.remove("hidden");
  }
  
  function saveChanges() {
    const updatedName = editName.value;
    const updatedAddress = editAddress.value;
    const updatedDistance = parseInt(editDistance.value);
    const updatedStatus = editStatus.value;
  
    deliveries[currentEditIndex].updateDelivery(updatedName, updatedAddress, updatedDistance, updatedStatus);
    renderDeliveries();
    modal.classList.add("hidden");
  }
  
  function calculateTotalDistance() {
    const total = deliveries.reduce((sum, delivery) => sum + delivery.distance, 0);
    totalDistanceElement.textContent = `Общее расстояние: ${total} км`;
  }
  
  document.getElementById("calculate-distance").addEventListener("click", calculateTotalDistance);
  document.getElementById("save-edit").addEventListener("click", saveChanges);
  document.getElementById("close-modal").addEventListener("click", () => modal.classList.add("hidden"));
  
  let currentEditIndex = null;
  renderDeliveries();