/* Store gems store data in store-products.json and pass a variable here
   Use web service $http to fetch data from json file */



(function () {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http',
    function ($http) {
      var store = this;
      store.products = [];
      $http.get('store-products.json').success(function (data) {
        store.products = data;
      });
   }]);
  app.controller('ReviewController', function () {
    this.review = {};

    this.addReview = function (product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
