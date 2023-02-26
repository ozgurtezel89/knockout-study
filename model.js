$(document).ready(function () {
    class ViewModel {
        constructor() {
            this.firstName = ko.observable("");
            this.lastName = ko.observable("");

            this.fullName = ko.pureComputed(function () {
                return this.firstName() + " " + this.lastName();
            }, this);
        }
    }

    const viewModel1 = new ViewModel();
    ko.applyBindings(viewModel1, document.getElementById('viewModel1'));

    // click Counter
    class ClickCounter {
        constructor(){
            this.tooManyClicks = ko.observable(false);
            this.counter = ko.observable(0);
            this.showMessage = ko.observable(false)
            this.clickEvent = function() {
                this.counter(this.counter()+1);
                if(this.counter() >= 3){
                    this.tooManyClicks(true);
                    this.showMessage(true);
                }
            };
            this.reset = function(){
                this.tooManyClicks(false);
                this.counter(0);
                this.showMessage(false);
            }
        }
        
    }

    ko.applyBindings(new ClickCounter(), document.getElementById('clickCounter'))
    
});

