const fontGlob = import.meta.globEager('assets/font/*.woff2');
const fonts = [
  {
    name: 'jinbuti',
    url: fontGlob['../assets/font/DingTalk_JinBuTi_Regular.woff2'].default,
  },
  {
    name: 'JetBrainsMono',
    url: fontGlob['../assets/font/JetBrainsMono-Medium.woff2'].default,
  },
];
export default Promise.all(fonts.map((obj) => new FontFace(obj.name, `url(${obj.url})`).load())).then((res) => {
  res.forEach((font) => {
    document.fonts.add(font);
  });
});
