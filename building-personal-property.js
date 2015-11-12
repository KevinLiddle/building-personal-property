document.onkeyup = function(e) {
  if (e.target.value && e.target.value.match(/building personal property/i)) {
    alert("You typed \"Building Personal Property\". Did you mean \"Business Personal Property\"");
  }
};
