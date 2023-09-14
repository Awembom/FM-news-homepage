const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector(".navigation");

toggleBtn.addEventListener("click", function () {
  if (navigation.classList.contains("change")) {
    navigation.classList.remove("change");
  } else {
    navigation.classList.add("change");
  }
//   navigation.classList.toggle("change");
});

closeBtn.addEventListener("click", function () {
  navigation.classList.remove("change");
});
