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

    return {
        addItem: function(type, desc, val) {
            let newItem, ID;

            if (data.allItems[type] > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            

            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
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
       let input, newItem;
       
       input = UICtrl.getInput();
       
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    }

    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();