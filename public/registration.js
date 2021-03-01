async function registerWorker() {
  console.log("in the reg")
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js')
    } catch (e) {
      console.log('CLIENT: service worker registration failure.');
    }
  }
}