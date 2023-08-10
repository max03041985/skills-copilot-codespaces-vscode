function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SlikksMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
        };
    }



    }
}