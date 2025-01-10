const { emit } = window.__TAURI__.event;

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    emit("test", "hello world");
    window.location = "index.html";
  }, 500)
});
