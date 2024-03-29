
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
        pages: `${buildFolder}/`,
          },
    src: {
        js: `${srcFolder}/js/main.js`,
        scss: [`${srcFolder}/scss/**/*-page.scss`, `${srcFolder}/scss/**/main.scss`,`${srcFolder}/scss/**/reset.scss` ],
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        fonts: `${srcFolder}/fonts/**/*.*`,
        pages: [`${srcFolder}/**/*-page.html`, `${srcFolder}/index.html`],
        modules: `${srcFolder}/js/modules/`,
        ts: `${srcFolder}/ts`,
       },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        ts: `${srcFolder}/ts/**/*.ts`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}