export default function modal() {
    // Modal

    const modalTriggers = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
            clearInterval(modalTimerId);
        }
    }

    modalTriggers.forEach((btn) => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener(
        'click',
        (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal();
            }
        },
        false
    );

    document.addEventListener(
        'keyup',
        (event) => {
            if (event.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        },
        false
    );

    const modalTimerId = setTimeout(openModal, 50000);

    window.addEventListener('scroll', showModalByScroll);
}
