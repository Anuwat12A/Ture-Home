// --- Active Page Highlight Logic ---
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navbar .nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// --- Swiper Slider Initialization ---
const sliders = document.querySelectorAll('.campaign-slider');

sliders.forEach(slider => {
    const slideCount = parseInt(slider.getAttribute('data-slides'), 10);
    let slidesPerViewDesktop;

    // ตั้งค่า slidesPerView สำหรับเดสก์ท็อปตามจำนวน slide
    if (slideCount >= 8) slidesPerViewDesktop = 4;
    else if (slideCount === 6) slidesPerViewDesktop = 3;
    else if (slideCount === 5) slidesPerViewDesktop = 4;
    else if (slideCount === 4) slidesPerViewDesktop = 4;
    else if (slideCount === 3) slidesPerViewDesktop = 3;
    else if (slideCount === 2) slidesPerViewDesktop = 2;
    else slidesPerViewDesktop = 1;

    // ถ้าจำนวนสไลด์น้อยกว่าหรือเท่ากับ slidesPerView ให้ปิด loop และซ่อนปุ่ม
    const loopMode = slideCount > slidesPerViewDesktop;
    const nextBtn = slider.querySelector('.swiper-button-next');
    const prevBtn = slider.querySelector('.swiper-button-prev');
    if (!loopMode) {
        if(nextBtn) nextBtn.style.display = 'none';
        if(prevBtn) prevBtn.style.display = 'none';
    }

    new Swiper(slider, {
        loop: loopMode,
        slidesPerView: 1, // สำหรับมือถือเริ่มต้น
        spaceBetween: 15,

        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },

        // Responsive breakpoints
        breakpoints: {
            480: {   // small mobile
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {   // large mobile
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {   // tablet
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {  // desktop
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 30,
            },
        },
    });
});
