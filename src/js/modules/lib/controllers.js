app.controller('membersController', function($scope, dataService) {


    getMembers();
    
    function getMembers() {
        dataService.getMembers()
            .success(function(members) {
                $scope.members = members;
            })
            .error(function(error){
               $scope.status = 'Unable to load members data: ' + error.message; 
            });
    };

});

app.controller('profileController', function($scope, $routeParams, dataService) {
    getMembers();
    
    function getMembers() {
        dataService.getMembers()
            .success(function(members) {
                for (var i = 0; i < members.length; i++) {
                    if (members[i].id === parseInt($routeParams.memberId)) {
                        $scope.member = members[i];
                    }
                }
            })
            .error(function(error){
               $scope.status = 'Unable to load members data: ' + error.message; 
            });
    }

});
