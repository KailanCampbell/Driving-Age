document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultTextDiv = document.getElementById("resultText");
  let resultImg = document.getElementById("resultImage");

  if (age < 16) {
    resultTextDiv.innerText = "You cannot drive or rent a car";
    resultTextDiv.style.color = "red"; // change color
    resultImg.src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg";
  } else if (age >= 16 && age < 25) {
    resultTextDiv.innerText = "You can drive but can't rent";
    resultTextDiv.style.color = "green";
    resultImg.src = "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg";
  } else if (age >=25) {
    resultTextDiv.innerText = "You can drive and rent";
    resultTextDiv.style.color = "green";
    resultImg.src = "https://resources.turo.com/f/253489/768x511/f5ff1d0688/luxury-1-768px.png/m/";
  }
});
