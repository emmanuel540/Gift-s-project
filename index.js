<script>
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    var card = document.getElementById("card").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;

    if (name === "" || email === "" || amount === "" || card === "" || expiry === "" || cvv === "") {
      alert("All fields are required");
      return false;
    }
    if (isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid donation amount");
        return false;
      }
  
      if (!/^\d{4}-\d{2}$/.test(expiry)) {
        alert("Please enter a valid expiration date (MM/YY)");
        return false;
      }
  
      if (!/^\d{3,4}$/.test(cvv)) {
        alert("Please enter a valid CVV");
        return false;
      }
  
      return true;
    }
  </script>