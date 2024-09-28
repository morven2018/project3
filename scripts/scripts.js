function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    const btn = document.getElementById('theme-toggle-btn');

    if (theme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        btn.innerHTML = `࣪☾.`;
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        btn.innerHTML = `☼`;
    }
}
