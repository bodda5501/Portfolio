const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu ul li a:not(.nav-cv-btn)");

function updateActiveLink() {
  let current = "hero"; // القيمة الافتراضية

  sections.forEach((section) => {
    // نطرح 100 بكسل لتعويض مساحة الناف بار الثابت في الأعلى
    const sectionTop = section.offsetTop - 100;
    
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // إزالة الخط من الجميع وإضافته للقسم الحالي
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// تشغيل الوظيفة أثناء التمرير
window.addEventListener("scroll", updateActiveLink);

// تشغيل الوظيفة أول ما الصفحة تحمل (لحل مشكلة التحديث)
window.addEventListener("load", updateActiveLink);