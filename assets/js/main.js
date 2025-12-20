// ============================================
// Main.js - 主程式
// 包含：多語系功能、渲染邏輯、其他功能模組
// ============================================

// ==================== 語言偵測與切換功能 ====================

// 偵測瀏覽器語言
function detectDefaultLanguage() {
    // 優先使用用戶選擇的語言
    const saved = localStorage.getItem('site_lang');
    if (saved && uiTranslations[saved]) {
        return saved;
    }

    // 偵測瀏覽器語言
    const browserLang = navigator.language || navigator.userLanguage;

    // 偵測語言
    if (uiTranslations[browserLang]) {
        return browserLang;
    }

    // 較廣的偵測語言
    if (browserLang.startsWith('zh')) return 'zh-TW';
    if (browserLang.startsWith('ja')) return 'ja-JP';
    if (browserLang.startsWith('en')) return 'en-US';

    return 'zh-TW';
}

// 預設語言
let currentLang = detectDefaultLanguage();

// 切換語言
function changeLanguage(lang) {
    // 防止重複渲染
    if (lang === currentLang)
        return;

    // 檢查語言是否存在
    if (!uiTranslations[lang]) {
        console.error(`Language '${lang}' not found`);
        return;
    }

    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    // 更新 HTML lang 屬性
    document.documentElement.lang = lang;

    // 1. 更新按鈕狀態
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 2. 更新靜態文字 (使用 data-i18n 屬性)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[lang][key]) {
            el.textContent = uiTranslations[lang][key];
        }
    });

    // 3. 更新自我介紹 HTML (因為含有 <br> 標籤 所以需特別拆分開來)
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        aboutText.innerHTML = uiTranslations[lang]['about_text'];
    }

    // 4. 重新渲染 Grid
    renderCards(projects, 'project-list', true);
    renderCards(blogs, 'blogs-list', false);
}

// ==================== 渲染邏輯 ====================

function renderCards(data, containerId, isProject) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    data.forEach((item) => {
        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // 根據當前語言取得文字，如果沒有該語言則 fallback 到 zh-TW
        const title = item.title[currentLang] || item.title['zh-TW'];
        const desc = item.desc[currentLang] || item.desc['zh-TW'];

        const btnTextKey = isProject ? "btn_view_project" : "btn_read_article";
        const btnText = uiTranslations[currentLang][btnTextKey];

        const dateHtml = !isProject && item.date ? `<div class="card-date">${item.date}</div>` : '';

        // 處理圖片/影片
        let imgHtml = '';
        if (item.videoId) {
            const thumbnail = item.image || `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
            imgHtml = `
                <div class="video-thumbnail" data-video-id="${item.videoId}" onclick="openVideoModal('${item.videoId}')">
                    <img src="${thumbnail}" alt="${title}" class="card-img" loading="lazy">
                    <div class="play-button">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.7)"/>
                            <path d="M32 25L55 40L32 55V25Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            `;
        } else if (item.image) {
            imgHtml = `<img src="${item.image}" alt="${title}" class="card-img" loading="lazy">`;
        }

        html += `
            <div class="card">
                ${imgHtml}
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <div class="tags">${tagsHtml}</div>
                    <p class="card-desc">${desc}</p>
                    <div class="card-footer">
                        <a href="${item.link}" target="_blank" class="btn">${btnText}</a>
                        ${dateHtml}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ==================== 導航列 Active 狀態 ====================

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== 回到頂部按鈕 ====================

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== YouTube Modal 功能 ====================

function openVideoModal(videoId) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');

    if (!modal || !iframe) {
        console.error('Modal elements not found');
        return;
    }

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');

    if (!modal || !iframe) return;

    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initVideoModal() {
    const videoModal = document.getElementById('video-modal');
    if (!videoModal) return;

    // 點擊 Modal 外部關閉
    videoModal.addEventListener('click', function (e) {
        if (e.target === this) closeVideoModal();
    });

    // ESC 鍵關閉
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeVideoModal();
    });
}

// ==================== 初始化 ====================

// DOMContentLoaded 確保 DOM 完全載入後才執行
document.addEventListener('DOMContentLoaded', function () {
    // 1. 載入語言
    changeLanguage(currentLang);

    // 2. 初始化導航列狀態
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // 3. 初始化回到頂部按鈕
    initBackToTop();

    // 4. 初始化 Video Modal
    initVideoModal();
});