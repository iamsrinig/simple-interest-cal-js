function calculate_simple_interest() {
    p = document.getElementById("principal_bal").value;
    n = document.getElementById("no_of_years").value;
    r = document.getElementById("rate_of_interest").value;
    result = document.getElementById("result");
    result.innerHTML = "The interest is " + (p*n*r/100);
  }
