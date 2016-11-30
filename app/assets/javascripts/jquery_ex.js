$(document).ready(function () {
  if(window.location.pathname === '/userlist') {

    function getName() {
      var name = prompt('What is your name?');
      if (name ===  null || name === '') {
        getName();
      } else {
        $('#main-header').text('Welcome ' + name);
      }
    }

    var $userInput = $('#user-input');
    var $userAdd = $('#add-user');
    var $userList = $('#users-list');
    var $toggleUserList = $('#toggle-user-list');

    $toggleUserList.click(function () {
      $userList.slideToggle();
    });

    function addUser () {
      $userInput.removeClass('red-border');
      var userInputValue = $userInput.val().trim();
      if(userInputValue === '') {
        alert('You need to input a user name!');
        $userInput.addClass('red-border').focus();
      } else {
        $userList.append('<li>' + userInputValue + '</li>')
        $userInput.val('').focus();
      }
    }

    $userInput.keyup(function(e) {
      if(e.keyCode === 13) {
        addUser();
      }
    });

    $userAdd.click(function() {
      addUser();
    });

    getName();
  }
});
