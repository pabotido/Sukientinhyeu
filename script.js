var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal() {
    modal.classList.toggle('hide');
}

// Mở modal khi nhấn nút mở
btnOpen.addEventListener('click', toggleModal);

// Đóng modal khi nhấn nút đóng hoặc icon đóng
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);

// Đóng modal khi nhấn vào bên ngoài modal
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
});

// Ngăn việc nhấn vào bên trong modal đóng modal
modal.querySelector('.modal__content').addEventListener('click', function(event) {
    event.stopPropagation();
});
