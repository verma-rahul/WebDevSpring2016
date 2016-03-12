(function(){
    angular
        .module("FinalProject")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl:"views/home/home.view.html",
                controller:"HomeControler",
                controllerAs:"vm"
            })
            .when("/search/:title",{
                templateUrl:"views/search/search.view.html",
                controller:"SearchControler",
                controllerAs:"vm"
            })
            .when("/details",{
                templateUrl:"views/details/details.view.html",
                controller:"DetailsControler",
                controllerAs:"vm"
            })
            .when("/register",{
                templateUrl:"views/users/register.view.html",
                controller:"RegisterController"
            })
            .when("/profile",{
                templateUrl:"views/users/profile.view.html",
                controller:"ProfileController"
            })

            .when("/login",{
                templateUrl:"views/users/login.view.html",
                controller:"LoginController"
            })
            .otherwise({
                redirectTo: '/home'

            });

    }
})();
