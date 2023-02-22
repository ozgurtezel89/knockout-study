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
    
});

