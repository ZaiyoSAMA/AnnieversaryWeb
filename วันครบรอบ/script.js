// คำนวณวันคบกัน
const startDate = new Date("2024-11-03");
const today = new Date();
const timeDiff = today - startDate;
const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById("daysCounter").textContent = `${daysTogether} วันแล้วน้า 💞`;

// แสดงข้อความ + หัวใจลอย
function showMessage() {
  document.getElementById("specialMessage").classList.remove("hidden");

  // ปล่อยหัวใจ 20 ดวง
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

// ซ่อนข้อความพิเศษ
function hideMessage() {
  document.getElementById("specialMessage").classList.add("hidden");
}

// สร้างหัวใจลอย
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 2 + "s";
  document.getElementById("heartContainer").appendChild(heart);

  // ลบหัวใจหลังจากลอยเสร็จ
  setTimeout(() => {
    heart.remove();
  }, 4000);
}
// รายชื่อรูปภาพ
const imagePaths = [
  "images/yuki.jpg",
  "images/yakk.jpg",
  "images/yukk.jpg",
  "images/yikk.jpg" // เพิ่มกี่รูปก็ได้
];

let currentIndex = 0;
const slideshowImg = document.getElementById("slideshowImage");

// เปลี่ยนรูปภาพทุก 4 วินาที
setInterval(() => {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  slideshowImg.style.opacity = 0;
  setTimeout(() => {
    slideshowImg.src = imagePaths[currentIndex];
    slideshowImg.style.opacity = 1;
  }, 500);
}, 4000);
