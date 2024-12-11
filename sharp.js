const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist_test_/images');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach(image => {
        // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
        sharp(`${target}/${image}`)
            .resize(800)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image}-large.jpg`),
            );

        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${target}/${image}`)
            .resize(540)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image}-medium.jpg`),
            );

        sharp(`${target}/${image}`)
            .resize(360)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image}-small.jpg`),
            );
    });