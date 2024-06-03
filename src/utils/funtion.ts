export function getImageUrl(url) {
  console.log(new URL(url, import.meta.url).href);
  
  return new URL(url, import.meta.url).href;
}