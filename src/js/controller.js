// ========== controller =========== // 
const controller = {
    init: function(){
        // sets current cat to first in array
        catsModel.currentCat = catsModel.cats[0];
        catListViewer.init();
        catViewer.init();
    },
    // inits views
    getCurrent: function(){
        return catsModel.currentCat;
    },
    getCats: function(){
        return catsModel.cats;
    },
    // sets currently viewed cat to obj
    setCurrent: function(obj){
        catsModel.currentCat = obj;
    },
    // click counter
    clickCount: function(){
        catsModel.currentCat.clicks++;
        catViewer.render();
    }
};

controller.init();
// function controllerInit(){
//     modelInit();
//     viewInit();
// }
// function getCats(){
//     return getAllCats();
// }

// function setCurrent(cat){
//     catsModel.currentCat = cat;
// }
// function clickCount(){
//     catsModel.currentCat.clicks++;
//     clickRender();
// }
