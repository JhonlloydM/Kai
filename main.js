const noButton = document.getElementById("noButton");
const noContainer = document.getElementById("noButtonContainer");
const container = document.getElementById("container");

noButton.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Subtract button size to keep it fully inside
  const maxX = container.clientWidth - buttonRect.width;
  const maxY = container.clientHeight - buttonRect.height;

  // Generate random position within bounds
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noContainer.style.left = `${randomX}px`;
  noContainer.style.top = `${randomY}px`;
});
