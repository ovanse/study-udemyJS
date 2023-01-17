export function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

export function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

export default function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTriggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
            clearInterval(modalTimerId);
        }
    }

    modalTriggers.forEach((btn) => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener(
        'click',
        (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal(modalSelector);
            }
        },
        false
    );

    document.addEventListener(
        'keyup',
        (event) => {
            if (event.code === 'Escape' && modal.classList.contains('show')) {
                closeModal(modalSelector);
            }
        },
        false
    );

    window.addEventListener('scroll', showModalByScroll);
}
