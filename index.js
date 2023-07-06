document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('toggle');
    const basic_price = document.getElementById('1');
    const pro_price = document.getElementById('2');
    const master_price = document.getElementById('3');

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        basic_price.textContent = '$19.99';
        pro_price.textContent = '$24.99';
        master_price.textContent = '$39.99';
      } else {
        basic_price.textContent = '$199.99';
        pro_price.textContent = '$249.99';
        master_price.textContent = '$399.99';
      }
    });
  });