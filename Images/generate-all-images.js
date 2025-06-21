const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "images/original";
const outputDir = "images/output";
const sizes = [480, 768, 1280, 1920];
const formats = ["jpg", "webp"];

// 🧹 Supprimer le dossier de sortie s'il existe
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

// 🔁 Parcourir toutes les images
fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const isImage = [".jpg", ".jpeg", ".png"].includes(ext);
  if (!isImage) return;

  const fileNameWithoutExt = path.basename(file, ext);

  sizes.forEach((size) => {
    formats.forEach((format) => {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${fileNameWithoutExt}-${size}.${format}`);

      sharp(inputPath)
        .resize({ width: size })
        .toFormat(format)
        .toFile(outputPath)
        .then(() => console.log("✅", outputPath))
        .catch((err) => console.error("❌", err));
    });
  });
});
