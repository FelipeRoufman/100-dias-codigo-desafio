const themeSwitcher = document.querySelector('.theme-switcher input');

themeSwitcher.addEventListener('change', () => {
    document.body.setAttribute(
        'data-theme',
        themeSwitcher.checked ? 'dark' : 'light'
    );
});
