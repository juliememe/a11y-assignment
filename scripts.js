window.addEventListener("DOMContentLoaded", () => {
  const inputsColor = document.querySelectorAll("input[name=product_color]");
  const formColorLabel = document.getElementById("productColorValue");
  inputsColor.forEach((input) => {
    input.addEventListener("change", (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
  });

  const inputsQuantity = document.querySelectorAll(".input-quantity");
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector(".input-quantity__field");
    const inputBtnIncrease = input.querySelector(
      ".input-quantity__btn[data-action=increase]",
    );
    const inputBtnDecrease = input.querySelector(
      ".input-quantity__btn[data-action=decrease]",
    );
    inputBtnIncrease.addEventListener("click", () => {
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1;
    });
    inputBtnDecrease.addEventListener("click", () => {
      const initialValue = inputField.value * 1;
      if (initialValue > 1) inputField.value = initialValue - 1;
    });
  });

  const accordions = document.querySelectorAll(".accordion__item");
  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector(".accordion__item-title");
    accordionTitle.addEventListener("click", () => {
      accordion.classList.toggle("accordion__item_active");
      const title = accordion.querySelector(".accordion__item-title");
      if (accordion.classList.contains("accordion__item_active")) {
        title.setAttribute("aria-expanded", "true");
      } else {
        title.setAttribute("aria-expanded", "false");
      }
    });
  });

  const modalButton = document.querySelector(".size-guide-link");
  const modal = document.querySelector(".modal");
  const closeButton = document.getElementById("close-modal");
  const firstTableCell = document.querySelector(".size-guide__table td");

  function openModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("tabindex", "-1");
    closeButton.focus();
  }

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("tabindex");
    modalButton.focus();
  }

  modalButton.addEventListener("click", function () {
    openModal();
  });

  closeButton.addEventListener("click", function () {
    closeModal();
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  modal.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
  });

  // Set focus on the first table cell when modal opens
  modal.addEventListener("transitionend", function (event) {
    if (event.target === modal && modal.style.display === "block") {
      firstTableCell.focus();
    }
  });
});
