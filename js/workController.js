(function(module){
  var workController = {};

  workController.index = function() {
    $('.tab-content').hide();
    $('#work').fadeIn();
  };

  module.workController = workController;
})(window);
