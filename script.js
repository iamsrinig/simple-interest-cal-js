
var slider = document.getElementById("myRange");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function calculate_simple_interest() {
  p = document.getElementById("principal_bal").value;
  n = document.getElementById("no_of_years").value;
  r = document.getElementById("myRange").value;
  result = document.getElementById("results");
  result.innerHTML = "The interest is " + (p*n*r/100);
}
