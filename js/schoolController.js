(function(module){
  var schoolController = {};

  schoolController.index = function() {
    $('.tab-content').hide();
    $('#school').fadeIn();
    console.log('test4');
  };

  //WIP, not working will return

schoolController.loadAll = function(ctx, next) {
  var schoolData = function(allPortfolios) {
    ctx.school = Portfolio.schoolArray;
    next();
    console.log('test1');
  };

  if (Portfolio.schoolArray.length) {
    ctx.school = Portfolio.schoolArray;
    next();
    console.log('test2');
  } else {
    console.log('test3');
    Portfolio.makeFetchContent(schoolData);
  }
};


  module.schoolController = schoolController;
})(window);
