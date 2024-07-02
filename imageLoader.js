const normalizeSrc = (src) => {
  return src.startsWith("/") ? src.slice(1) : src;
};
export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, "format=auto"];
  return `https://pub-31971714d5324882b00b0345130560dd.r2.dev/cdn-cgi/image/${params}/${normalizeSrc(
    src
  )}`;
}
