const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalForm = document.querySelector(".modal-form");
const modalText = document.querySelector("#modal-text");
const modalChoiceBtnsDiv = document.querySelector("#modal-choice-btns")
const declineBtn = document.querySelector("#decline-btn")

setTimeout(() => {
  modal.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
    modalChoiceBtnsDiv.classList.toggle("reverse")
})

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modalFormData = new FormData(modalForm);
  const username = modalFormData.get("username");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="/IMG/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`;
  setTimeout(() => {
    document.querySelector("#upload-text").innerText = `Making the sale...`;
  }, 1500);
  setTimeout(() => {
    document.querySelector("#modal-inner").innerHTML = `
    <h2>Thanks you <span class="modal-display-name">${username}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="/IMG/bugatti.jpg">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});
