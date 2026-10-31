const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(
  ".nav-menu ul li a:not(.nav-cv-btn)"
);

function updateActiveLink() {
  // تعيين قسم الهيرو (Home) كافتراضي دائماً
  let current = "hero";

  sections.forEach((section) => {
    // طرح 150 بكسل كمسافة تعويضية لضمان انتقال الخط للقسم الجديد بمجرد ظهوره على الشاشة
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // إزالة الخط الأخضر من جميع الروابط وإضافته للرابط المطابق للقسم الحالي
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// 1. تشغيل الكود فور فتح الموقع لضمان وجود الخط تحت Home تلقائياً
window.addEventListener("load", updateActiveLink);

// 2. تشغيل الكود في كل مرة يقوم فيها المستخدم بالتمرير بالماوس
window.addEventListener("scroll", updateActiveLink);

const mobileMenu = document.getElementById("mobile-menu");
const navMenuElement = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  navMenuElement.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenuElement.classList.remove("active");
  });
});

const progressBar = document.getElementById("scrollProgress");

function updateProgressBar() {
  // حساب إجمالي المساحة المتاحة للتمرير في الصفحة
  const totalScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // حساب النسبة المئوية للمكان الحالي
  const scrollPercentage = (window.scrollY / totalScrollHeight) * 100;

  // تطبيق النسبة المئوية على عرض الشريط
  if (progressBar) {
    progressBar.style.width = `${scrollPercentage}%`;
  }
}

// تشغيل الدالة مع كل تمرير بالماوس
window.addEventListener("scroll", updateProgressBar);

// تشغيلها فور التحميل لضبط الشريط إذا قام المستخدم بتحديث الصفحة وهو بالأسفل
window.addEventListener("load", updateProgressBar);
