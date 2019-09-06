(function () {
    'use strict';

    angular.module('shoppingApp', [])
        .controller('BoughtListController', BoughtListController)
        .controller('ToBuyListController', ToBuyListController)
        .service('ShoppingListService', ShoppingListService);

    ToBuyListController.$inject = ['ShoppingListService'];
    function ToBuyListController(ShoppingListService) {
        var tobuy = this;
        tobuy.items = ShoppingListService.getTobuyItems();
        tobuy.buyItem = function (itemIndex) {
            ShoppingListService.buyItem(itemIndex);
        }
    }
    BoughtListController.$inject = ['ShoppingListService'];
    function BoughtListController(ShoppingListService) {
        var bought = this;
        bought.items = ShoppingListService.getBoughtItems();
    }
    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var tobuyItems = [{ name: 'cookies', quantity: 10 },
        { name: 'cake', quantity: 2 },
        { name: 'bananas', quantity: 12 },
        { name: 'bread', quantity: 13 },
        { name: 'pen', quantity: 14 }];
        var boughtItems = [];

        service.getTobuyItems = function () {
            return tobuyItems;
        };

        service.buyItem = function (itemIndex) {
            var item = tobuyItems[itemIndex];
            boughtItems.push(item);
            tobuyItems.splice(itemIndex, 1);
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

})();
