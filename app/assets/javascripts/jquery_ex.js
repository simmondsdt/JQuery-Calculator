$(document).ready(function () {

  function getName() {
    var name = prompt('What is your name?').trim();
    if (name ===  null || name === '') {
      getName();
    } else {
      $('#main-header').text('Welcome ' + name);
    }
  }

  getName();
});
