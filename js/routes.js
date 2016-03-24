page('/project', projectController.index);

page('/work', workController.index);

page('/school/',
schoolController.index,
schoolController.loadAll,
console.log('test'));

page('/', aboutController.index);

page();



// page('/:id', someMethod, anotherMethod);
//   Obj.someMethod = function(ctx, next) {
//      var id = ctx.params.id;
//   }

//id can be w/e, its arbitray

// function load(ctx, next){
//   var id = ctx.params.id;
//   $.getJSON('/user/' + id + '.json', function(user){
//     ctx.user = user;
//     next();
//   })
// }

// function show(ctx){
//   displayImages(ctx.state.images)
// } else {
//   $.getJSON('/photos', function(images){
//     ctx.state.images = images;
//     ctx.save();
//     displayImages(images);
//   })
// }
