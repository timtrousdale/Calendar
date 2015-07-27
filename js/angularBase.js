/**
 * Created by LABUSER on 6/22/2015.
 */
//Placeholders names:
    //$homePage, Navigation, .info, webPage, template/home.html, controllerNameCtrl

angular
    .module('app', [ +
        'ui.router'
    ])
    .config(['$homePage', '$navigation', function($homePage, $navigation){
        $homePage.otherwise('/');

        $navigation
            .info('info2', {
                url: '/',
                templateUrl: 'templates/home.html'
                controller: 'controllerNameCtrl'
            })
    }

    ])