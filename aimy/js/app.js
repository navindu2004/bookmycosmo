var $ = Dom7;


var app = new Framework7({
  name: 'aimycosmo', // App name
  theme: 'auto', // Automatic theme detection
  colors: {
    primary: '#5D41DE',
  },

  el: '#app', // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
});
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});

// Signup Screen Demo
$('#my-signup-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-signup-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});
