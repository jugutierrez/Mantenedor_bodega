

        


app.controller('modals', ['$scope', 'mantenedor_total', 'modal_control', function ($scope, mantenedor_total, modal_control) {

    $scope.abremodal = function (url, id) {
        mantenedor_total.modal(url, id, $scope);
    };

    $scope.open = function (size, url) {
       
        modal_control.modal_ui(size,url);
    }
}]);
app.controller('login', ['$scope', 'mantenedor_total', function ($scope, mantenedor_total) {

    $scope.login = function () {

        var personas = { 'correo_electronico_persona': $scope.logins.correo_electronico_persona, 'clave_persona': $scope.logins.clave_persona };
        var add_emp = mantenedor_total.agregar_datos('/login/login', personas);
        add_emp.then(function (successResponse) {
            if (successResponse.data.success == true) {
                window.location.pathname = successResponse.data.respuesta; 


            } else {
                $scope.respuesta = successResponse.data.respuesta;
            }
        
           
        },
        function (errorResponse) {
            console.log("error login")
        });
    };


}]);

      
         app.controller('ExampleController', ['$scope', function ($scope) {
           
             $scope.loading = false;
             $scope.templates =
               [{ name: 'Panel de Inicio', url: '../menu/vista1' },
                { name: 'Mis Bodegas', url: '../menu/vista2' },
                 { name: 'Estadisticas', url: '../menu/vista3' },
               { name: 'Contacto', url: '../menu/vista4' }];
             
             $scope.template = $scope.templates[0];
             $scope.boton = function (url) {
                 $scope.loading = true;
                 $scope.template = $scope.templates[url];
                
                 $scope.loading = false;
             };
         }]);

       app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
           $scope.toggleLeft = buildDelayedToggler('left');
           $scope.toggleRight = buildToggler('right');
           $scope.isOpenRight = function () {
               return $mdSidenav('right').isOpen();
           };

           /**
            * Supplies a function that will continue to operate until the
            * time is up.
            */
           function debounce(func, wait, context) {
               var timer;

               return function debounced() {
                   var context = $scope,
                       args = Array.prototype.slice.call(arguments);
                   $timeout.cancel(timer);
                   timer = $timeout(function () {
                       timer = undefined;
                       func.apply(context, args);
                   }, wait || 10);
               };
           }

           /**
            * Build handler to open/close a SideNav; when animation finishes
            * report completion in console
            */
           function buildDelayedToggler(navID) {
               return debounce(function () {
                   // Component lookup should always be available since we are not using `ng-if`
                   $mdSidenav(navID)
                     .toggle()
                     .then(function () {
                         $log.debug("toggle " + navID + " is done");
                     });
               }, 200);
           }

           function buildToggler(navID) {
               return function () {
                   // Component lookup should always be available since we are not using `ng-if`
                   $mdSidenav(navID)
                     .toggle()
                     .then(function () {
                         $log.debug("toggle " + navID + " is done");
                     });
               };
           }
       })
       .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
           $scope.close = function () {
               // Component lookup should always be available since we are not using `ng-if`
               $mdSidenav('left').close()
                 .then(function () {
                     $log.debug("close LEFT is done");
                 });

           };
       })
       .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
           $scope.close = function () {
               // Component lookup should always be available since we are not using `ng-if`
               $mdSidenav('right').close()
                 .then(function () {
                     $log.debug("close RIGHT is done");
                 });
           };
       });

       app.controller('TabsDemoCtrl', function ($scope, $window) {
           $scope.tabs = [
             { title:'Dynamic Title 1', content:'Dynamic content 1' },
             { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
             { title: 'Dynamic Title 3', content: 'Dynamic content 3', disabled: true },
             { title: 'Dynamic Title 4', content: 'Dynamic content 4', disabled: true },
             { title: 'Dynamic Title 5', content: 'Dynamic content 5', disabled: true }
           ];

           $scope.siguiente = function (i) {
               $scope.tabs[i].disabled = true;
               $scope.tabs[i + 1].disabled = false;
               $scope.tabs.active = i + 1;
           };
           $scope.atras = function (i) {
               $scope.tabs[i].disabled = true;
               $scope.tabs[i - 1].disabled = false;
               $scope.tabs.active = i-1;
           };
       });
       
       
    app.controller('customerCtrl', ['$scope', '$filter', function ($scope, $filter) {

       
            var customers = [{ "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Bridger Brecken Broderick", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Crew Coen", "City": "Berlin", "Country": "Germany" }, { "Name": "Cayson Camilo Cortez", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Demarcus Darryl Donte  ", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Devan Damari Davon", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Deon Dimitri Dangelo", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Elian Eliseo", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Freddy Flynn Franco", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Gaige Gibson Graysen", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Houston Hugh Howard Haiden Hendrix", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "Jaylon Jabari Jakobe", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }, { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Blaise Brice", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Braylin", "City": "Bern", "Country": "Switzerland" }, { "Name": "Agustin Mineiro", "City": "São Paulo", "Country": "Brazil" }];


        


        $scope.criteria = {
            searchtext: '',
            page: 1,
            pagesize: 5,
            sort: 'Name',
            desc: false
        };
        $scope.paging = {
            total: 0,
            totalpages: 0,
            showing: 0,
            pagearray: [],
            pagingOptions: [5, 10, 20, 30, 40, 50]
        };

        $scope.search = function () {
            $scope.customers = ($filter('filter')(customers, { Name: $scope.criteria.searchtext }));
            $scope.paging.total = $scope.customers.length;
            var a = ($scope.criteria.page - 1) * $scope.criteria.pagesize;
            var b = $scope.criteria.page * $scope.criteria.pagesize;

            $scope.customers = $scope.customers.slice(a, b);
            $scope.paging.showing = $scope.customers.length;
            paging($scope.criteria.page, $scope.criteria.pagesize,
                   $scope.paging.total);
        }

        function paging(current, pagesize, total) {
            var totalpages = Math.ceil(total / pagesize);
            $scope.paging.totalpages = totalpages;
            // clear it before playing
            $scope.paging.pagearray = [];
            if (totalpages <= 1) return;


            if (totalpages <= 5) {
                for (var i = 1; i <= totalpages; i++)
                    $scope.paging.pagearray.push(i);
            }

            if (totalpages > 5) {
                if (current <= 3) {
                    for (var i = 1; i <= 5; i++)
                        $scope.paging.pagearray.push(i);

                    $scope.paging.pagearray.push('...');
                    $scope.paging.pagearray.push(totalpages);
                    $scope.paging.pagearray.push('Next');
                }
                else if (totalpages - current <= 3) {
                    $scope.paging.pagearray.push('Prev');
                    $scope.paging.pagearray.push(1);
                    $scope.paging.pagearray.push('..');
                    for (var i = totalpages - 4; i <= totalpages; i++)
                        $scope.paging.pagearray.push(i);
                }
                else {
                    $scope.paging.pagearray.push('Prev');
                    $scope.paging.pagearray.push(1);
                    $scope.paging.pagearray.push('..');

                    for (var i = current - 2; i <= current + 2; i++)
                        $scope.paging.pagearray.push(i);

                    $scope.paging.pagearray.push('...');
                    $scope.paging.pagearray.push(totalpages);
                    $scope.paging.pagearray.push('Next');
                }
            }
        }

        $scope.$watch('criteria', function (newValue, oldValue) {

            if (!angular.equals(newValue, oldValue)) {
                $scope.search();
            }
        }, true);

        $scope.Prev = function () {
            if ($scope.criteria.page >= 1)
                $scope.criteria.page--;
        }

        $scope.Next = function () {
            if ($scope.criteria.page < $scope.paging.totalpages)
                $scope.criteria.page++;
        }

    }]);






       
       
        