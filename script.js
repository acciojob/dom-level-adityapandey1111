//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const levelElement = document.getElementById("level");
  let level = 0;

  while (levelElement.parentElement) {
    levelElement = levelElement.parentElement;
    level++;
  }

  alert("The level of the element is: " + level);
});
