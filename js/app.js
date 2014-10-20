/* Store gems store data in store-products.json and pass a variable here
   Use web service $http to fetch data from json file */



(function () {
  var app = angular.module('gemStore', ['store-directives']); // give gemStore module access to the directives by adding a dependency to its definition.
    app.controller('StoreController', ['$http',              // built in $http Service to make requests to a server(or in our case a json file).
    function ($http) {
      var store = this;
      store.products = [];
      $http.get('store-products.json').success(function (data) {  //Give our StoreController access to the products by setting products equal to the data given to us with the http service's success promise.
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
