app.service('dataService', function($http) {

    var dataUrl = 'http://private-anon-a2d918e49-aquentuxsociety.apiary-mock.com/members';

    this.getMembers = function() {
        return $http.get(dataUrl);
    };
});
