window.onload = function () {
  let grid = document.querySelectorAll(".grid_items");

  for (const item of grid) {
    item.onclick = function () {
      item.innerHTML = +item.innerHTML + 1;
      item.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    };
  }
};
