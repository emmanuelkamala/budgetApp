// BUDGET CONTROLLER

let budgetController = (function(){
   
    let Expense = function(id, value, description){
            this.id = id;
            this.value = value;
            this.description = description;
    }

    let Income = function(id, value, description){
            this.id = id;
            this.value = value;
            this.description = description;
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        }
    }
})();


// UI CONTROLLER

let UIController = (function(){

    let DOMstrings = {
       inputType: '.add__type',
       inputDescription: '.add__description',
       inputValue: '.add__value',
       inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER

let controller = (function(budgetCtrl, UICtrl){

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();
            }
        });
    };

    let ctrlAddItem = function() {
       let input = UICtrl.getInput();
       console.log(input);
    }

    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();