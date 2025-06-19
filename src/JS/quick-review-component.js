const reader = document.querySelector(
  "body main > div.fixed.top-0.z-40.hidden.h-full.w-full"
);
const readerMask = document.querySelector(
  "body main > div.fixed.top-0.z-40.h-full.w-full > div.h-full.w-full.bg-black.opacity-80"
);
const readerImagesContainer = document.querySelector(
  "body main > div.fixed > div.manga-reader"
);
const closeBtnInReaderContainer = document.querySelector("#closeReader");

readerMask.addEventListener("click", closeReader);
closeBtnInReaderContainer.addEventListener("click", closeReader);

function closeReader() {
  reader.classList.add("hidden");
  document.querySelector("body").classList.remove("overflow-hidden");
  readerImagesContainer.innerHTML = "";
  observer.disconnect();
  currentImage = 0;
  currentFolder = "";
  totalImages = 0;
}

let currentImage = 0;
let currentFolder = "";
let totalImages = 0;
const batchSize = 10;

async function getImagePath(index) {
  const padded = index.toString().padStart(3, "0");
  const extensions = ["jpg", "jpeg", "webp", "png"];
  for (let ext of extensions) {
    const path = `./assets/manga/${currentFolder}/${padded}.${ext}`;
    try {
      const response = await fetch(path, { method: "HEAD" });
      if (response.ok) return path;
    } catch (err) {

    }
  }
  return null; 
}

async function loadNextImages() {
  const end = Math.min(currentImage + batchSize, totalImages);
  for (let i = currentImage + 1; i <= end; i++) {
    const imgPath = await getImagePath(i);
    if (imgPath) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.classList.add("w-full");
      img.loading = "lazy";
      readerImagesContainer.appendChild(img);
    }
  }

  currentImage += batchSize;

  if (currentImage < totalImages) {
    observer.observe(readerImagesContainer.lastChild);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadNextImages();
    }
  },
  {
    root: reader,
    rootMargin: "100px",
  }
);

function openReader(folder, count) {
  reader.classList.remove("hidden");
  document.querySelector("body").classList.add("overflow-hidden");
  readerImagesContainer.innerHTML = "";

  currentFolder = folder;
  totalImages = count;
  currentImage = 0;

  loadNextImages();
}

// Circles
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(2) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Circles", 1142);
  });
  
// Bunk Beds
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(3) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Bunk-Beds", 5250);
  });

  // Keep This a Secret From Mom
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(4) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Keep-This-a-Secret-From-Mom", 2599);
  });

  // Solo Leveling
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(5) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Solo-Leveling", 8264);
  });

  // Sensei Wa Koi o Oshie Rarenai
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(6) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Sensei-Wa-Koi-o-Oshie-Rarenai", 982);
  });

  // Fuufu Ijou Koibito Miman
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(7) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Fuufu-Ijou-Koibito-Miman", 2421);
  });

  // Bad Thinking Diary
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(8) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Bad-Thinking-Diary", 2068);
  });

// Shouxing Laogong Ye Ye Liao
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(9) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Shouxing-Laogong-Ye-Ye-Liao", 2474);
  });

// Sono Bisque Doll wa Koi wo Suru
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(10) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Sono-Bisque-Doll-wa-Koi-wo-Suru", 2579);
  });

// Class de 2 Banme ni Kawaii Onna no Ko to Tomodachi ni Natta
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(11) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Class-de-2-Banme-ni-Kawaii-Onna-no-Ko-to-Tomodachi-ni-Natta", 996);
  });

// Amagami san Chi no Enmusubi
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(12) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Amagami-san-Chi-no-Enmusubi", 3914);
  });

// Tensei Shitara Slime Datte Ken
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(13) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Tensei-Shitara-Slime-Datte-Ken", 4819);
  });

// My Office Noona Story
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(14) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("My-Office-Noona-Story", 1114);
  });

  // Kono Kaisha ni Suki na Hito ga Imasu
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(15) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Kono-Kaisha-ni-Suki-na-Hito-ga-Imasu", 1669);
  });

  // Kawaii dake ja Nai Shikimori-san
document
  .querySelector("#mangaComponentMainContainer > div:nth-child(16) > div.quick-preview")
  .addEventListener("click", () => {
    openReader("Kawaii-dake-ja-Nai-Shikimori-san", 2622);
  });