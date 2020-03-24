// BUDGET CONTROLLER

let budgetController = (function(){

})();


// UI CONTROLLER

let UIController = (function(){

})();

// GLOBAL APP CONTROLLER

let controller = (function(budgetCtrl,UICtrl){

    let ctrlAddItem = function() {

    }

   document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

   document.addEventListener('keypress', function(event){
     if (event.keyCode === 13 || event.which === 13) {

        ctrlAddItem();
     }
   });

})(budgetController, UIController);