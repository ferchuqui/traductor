'use strict';

(function () {
  const selectOrigin = document.querySelector('.selectOrigin');
  const selectTarget = document.querySelector('.selectTarget');
  const original = document.querySelector('#original');
  const button = document.querySelector('.button');

  const validate = function(event){

    if ((original.value ==="") || (selectOrigin.value === selectTarget.value)) {
      button.disabled = true

    } else {
      button.disabled = false
    }
  }
  original.addEventListener('keyup', validate )
  selectOrigin.addEventListener('change', validate)
  selectTarget.addEventListener('change', validate)
  validate()

})()




