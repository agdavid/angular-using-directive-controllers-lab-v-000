function LowerCaseController() {
  this.username = this.username.toLowerCase();
}


angular
  .module('app')
  .controller('LowerCaseController', LowerCaseController);