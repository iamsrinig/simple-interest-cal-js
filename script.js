
var slider = document.getElementById("myRange");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function calculate_simple_interest() {
  var p = document.getElementById("principal_bal").value;
  console.log(p)
  if(p === 0 || p === null || p === "") {
    document.getElementById("principal_bal").focus();
    return
  }
  var n = document.getElementById("no_of_years").value;
  var r = document.getElementById("myRange").value;
  var y = new Date().getFullYear()+parseInt(n);
  var result = document.getElementById("results");
  var total = (p*n*r/100);
  result.innerHTML = `If you deposit ${p}, <br> at an interest rate of ${r}, <br> you will receive an amount of ${total}, in the year ${y}`
}
