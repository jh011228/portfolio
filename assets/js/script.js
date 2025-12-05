// 현재는 섹션 타이틀 애니메이션만 적용됨.
// 향후 Trace Animation 확장 가능.

document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".line-trace");
    titles.forEach(title => {
        title.classList.add("active");
    });
});
