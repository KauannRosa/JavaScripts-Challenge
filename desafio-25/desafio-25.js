(function () {
  "use strict";

  function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
  }

  on("[data-js='seletor']", "change", function (event) {
    //console.log(this.value);
    document.querySelector('[data-js="input"]').value = this.value;
  });
})();
