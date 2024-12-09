window.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    return;
  }
  if (event.key === "r") {
    const link = document.createElement("a");
    link.href = "https://github.com/vdegenne?tab=repositories";
    link.click();
  }
});
