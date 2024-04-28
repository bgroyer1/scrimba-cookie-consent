const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

closeModalBtn.addEventListener("click", () => {
    closeModalBtn.style.display = 'none'
})
