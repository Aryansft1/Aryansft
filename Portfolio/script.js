document.addEventListener("DOMContentLoaded", () => {
    // افکت پارالکس بسیار نرم برای حرکت مجسمه با حرکت ماوس
    const heroVisual = document.querySelector('.hero-visual');
    const statue = document.querySelector('.statue-img');

    if (heroVisual && statue) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            
            statue.style.transform = `translate(${x}px, ${10 + y}px)`;
        });
    }

    // اضافه کردن افکت کلیک نرم به لینک‌های منو
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // ایجاد یک تاخیر کوتاه برای اجرای انیمیشن خروج (اختیاری)
            // در صورت تمایل به استفاده از فریمورک‌ها، این بخش توسعه می‌یابد.
        });
    });
});
