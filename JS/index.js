const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const modalDeclineBtn = document.querySelector("#dmodal-decline-btn")
const modalForm = document.querySelector("#modal-form")
const modalText = document.querySelector("#modal-text")
const modalChoiceBtns = document.querySelector("#modal-choice-btns")



setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

closeModalBtn.addEventListener("click", () => {
    modal.style.display = 'none'
})

modalDeclineBtn.addEventListener("click", () => {
    modalChoiceBtns.classList.toggle("reverse")
})

modalForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const userData = new FormData(modalForm)
    const name = userData.get("username")
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="IMG/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function() {
        document.querySelector("#uploadText").innerText = `
        Making the sale...` 
    }, 1500)
    setTimeout(function() {
        closeModalBtn.disabled = false
        document.querySelector("#modal-inner").innerHTML = `
        <h2>Thanks, <span id="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        ` 
    }, 3000)
})

