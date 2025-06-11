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