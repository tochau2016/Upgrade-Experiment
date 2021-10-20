// =============== SHOW MODAL =============
const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)

    if (openButton && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
        })
    }
}

showModal('open-modal', 'modal-container');

// ============= HIDE MODAL ==============
// const hideModal = () => {
//     const closeBtn = document.getElementById('close-modal'),
//         modalContainer = document.getElementById('modal-container');

//     closeBtn.addEventListener('click', () => {
//         modalContainer.classList.remove('show-modal');
//     })
// }

// hideModal()

const closeBtn = document.querySelectorAll('.close-modal')

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('show-modal');
}

closeBtn.forEach(c => c.addEventListener('click', closeModal))