const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementsByTagName("button")[0];
const resultEl = document.getElementById("results");

// const bmi = (weight / ((height * height) / 10000)).toFixed(2);

btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event, "event");
  console.log(event.target, "This is click");

  console.log(heightEl.value);
  console.log(weightEl.value);
  const bmi = parseInt(
    weightEl.value /
      ((parseInt(heightEl.value) * parseInt(heightEl.value)) / 10000)
  ).toFixed(2);
  // const resultText = document.createTextNode(`${bmi}`);
  // resultEl.append(resultText);
  resultEl.innerHTML = bmi;
});
