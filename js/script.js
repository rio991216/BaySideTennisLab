// --------------------------------
// スクロールで要素フェードイン表示
// --------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const animateFade = (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 要素が画面に入ったらアニメーションを実行
                entry.target.animate(
                    {
                        opacity: [0, 1],
                        filter: ['blur(0.4rem)', 'blur(0)'],
                        transform: ['translateY(4rem)', 'translateY(0)'] // 互換性の高いtransformプロパティを使用
                    },
                    {
                        duration: 2000,
                        easing: 'ease',
                        fill: 'forwards'
                    }
                );
                // 一度アニメーションした要素は監視を解除
                obs.unobserve(entry.target);
            }
        });
    };

    const fadeObserver = new IntersectionObserver(animateFade);
    const fadeElements = document.querySelectorAll('.js-fadein');

    fadeElements.forEach((fadeElement) => {
        fadeObserver.observe(fadeElement);
    });

    // --------------------------------
    // ハンバーガーメニュー：リンククリックでメニューを閉じる
    // --------------------------------
    const menuToggle = document.getElementById('menu-toggle');

    document.querySelectorAll('.l-header__nav-item a').forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });
});