cricketApp.controller('homeCtrl', function($scope, $http) {
    $scope.live = {};
    $scope.team = {};
    $scope.taste = 0;
    $scope.quality = 0;
    $scope.quantity = 0;
    $scope.service = 0;
    $scope.hygine = 0;
    $scope.veriety = 0;
    $scope.live.location = "select location";
    $scope.live.vendorName = "select vendor";
	$scope.getArray;
	$scope.separator = ",";
	$scope.decimalSeparator=".";
	$scope.showRadio = false;
	$scope.showTable = false;
	$scope.vendorNames = [];
	$scope.locationNames = ["Abhilash", "Dhara", "Global Axis","ITPL", 
        "Jal", "L Center", "Manyata","Pioneer","PSN","SJM Towers","Think campus","Vydehi"];
    //var ctx = document.getElementById("myChart");
	
	 $scope.canteenData = [{
	"Abhilash": {
		"location": [{
			"Amba Cool Corner": "Fast Food Services"
		}, {
			"Manoj Catering ": "Beverage services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"Coffee Day": "Fast Food services"
		}, {
			"Sai Sarvana Foods": "Fast Food services"
		}]
	},
	"Dhara": {
		"location": [{
			"Sri Sai Caterers": "Main Caterer"},
			{"Manoj Catering": "Beverage services"},
			{"Kitchen Bells": "Fast Food Services"}
		]
	},
	"Global Axis": {
		"location": [{
			"Sri Sai Caterers": "Main Caterer"
		}, {
			"Kitchen Bells  ": "Fast Food Services"
		}, {
			"Chai Point": "Beverage services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"SRI KANAN STORE  ": "Main Caterer"
		}, {
			"MDP COFFEE COUNTER": "Fast Food Services"
		}, {
			"Royal Star Services(Idli)  ": "Fast Food services"
		}, {
			"Fresh Makers  ": "Beverage services"
		}]
	},
	"ITPL": {
		"location": [{
			"S R Enterprises": "Beverage services"
		}]
	},
	"Jal": {
		"location": [{
			"Abus Hospitality Services  ": "Main Caterer"
		}, {
			"Chai Point": "Beverage services"
		}, {
			"Green Enterprises (Give Me 5)": "Fast Food services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"L Center": {
		"location": [{
			"Sai Sarvana Foods": "Fast Food Services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"S R Enterprises": "Beverage services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"Manyata": {
		"location": [{
			"Fresh Makers": "Beverage services"
		}]
	},
	"Pioneer": {
		"location": [{
			"S R Enterprises": "Beverage services"
		}, {
			"Abus Hospitality Services": "Main Caterer"
		}, {
			"Kitchen Bells": "Fast Food services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"PSN": {
		"location": [{
			"Abus Hospitality Services  ": "Main Caterer"
		}, {
			"Kitchen Bells": "Fast Food Services & Beverage services"
		}]
	},
	"SJM Towers": {
		"location": [{
			"Coffee day": "Fast Food services"},
            {
			"Heramba Refreshments": "Main Caterer & Beverages Counter"},
            {
			"Fresh Makers": "Beverage services"
		}]
	},
	"Think campus": {
		"location": [{
			"Kitchen Bells ": "Main Caterer"
		}, {
			"Fresh Makers ": "Beverage services"
		}, {
			"SS Caterers": "Main Caterer"
		}, {
			"Coffee Day": "Fast Food services"
		}, {
			"Green Enterprises (Give Me 5)": "Fast Food services"
		}, {
			"Chai Point": "Beverage services"
		}]
	},
	"Vydehi": {
		"location": [{
			"Poorva Hospitalities": "Main Caterer"
		}, {
			"Srivari Enterprises": "Beverage services"
		}]
	}
}];
	
	$scope.changeData = function() {
		 console.log($scope.live.location);
             console.log(Object.keys($scope.canteenData[0].Dhara.location[0]));
            switch($scope.live.location){
                case "Abhilash":
                    $scope.vendorNames =[];
                     for(var i=0;i<$scope.canteenData[0].Abhilash.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].Abhilash.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Dhara" :
                     $scope.vendorNames =[];
                     for(var i=0;i<$scope.canteenData[0].Dhara.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].Dhara.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Global Axis":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Global Axis'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Global Axis'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "ITPL":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0].ITPL.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].ITPL.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Jal":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0].Jal.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].Jal.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "L Center":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['L Center'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['L Center'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Manyata":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Manyata'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Manyata'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Pioneer":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Pioneer'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Pioneer'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "PSN":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['PSN'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['PSN'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "SJM Towers":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['SJM Towers'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['SJM Towers'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Think campus":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Think campus'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Think campus'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Vydehi":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Vydehi'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Vydehi'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                
            default :
                $scope.vendorNames = [];

            }
           // console.log(Object.keys($scope.canteenData[0]).length);
            
           // console.log($scope.canteenData[0].Abhilash.location);
	}
    var resetCanvas = function() {
        $('#myChart').remove(); // this is my <canvas> element
        $('#ccontainer').append('<canvas id="myChart" width="500" height="350" style="max-width:500px;margin:auto"></canvas>');
        ctx = document.getElementById("myChart");
    };
	$scope.Download = function() {
		$scope.live.from = $scope.from.toISOString();
        $scope.live.to = $scope.to.toISOString();
		$http.post('api/download',{
			data: $scope.live
		}).success(function(data){
			//alert('hello');
			console.log(data);
			$scope.getArray = data;
			alert('your data is ready please click on Export button');
			
		});
	}
	$scope.DownloadAll = function() {
		//$scope.live.from = $scope.from.toISOString();
       //$scope.live.to = $scope.to.toISOString();
		$http.get('api/posts').success(function(data){
			//alert('hello');
			console.log(data);
			$scope.getArray = data;
			alert('your data is ready please click on Export button');
			
		});
	}
	
	
    $scope.startLive = function(selectedGraph) {
        resetCanvas();
        $scope.live.from = $scope.from.toISOString();
        $scope.live.to = $scope.to.toISOString();
        console.log($scope.from.toISOString());
        console.log($scope.live);
        $http.post('api/request', {
            data: $scope.live

        }).success(function(data) {
            console.log(data);
			$scope.showTable = true;
			$scope.showRadio = true;
			$scope.getArray = data;
            var total = data.length;
            var taste = quality = quantity = service = hygine = veriety = 0;

            for (var i = 0; i < data.length; i++) {
                taste += parseInt(data[i].taste);
                quality += parseInt(data[i].quality);
                service += parseInt(data[i].quantity);
                hygine += parseInt(data[i].hygine);
                veriety += parseInt(data[i].veriety);
                quantity += parseInt(data[i].quantity);

            }
            $scope.taste = Math.round((taste/total)*100)/100;
            $scope.quality = Math.round((quality / total)*100)/100;
            $scope.quantity = Math.round((quantity / total)*100)/100;;
            $scope.service = Math.round((service / total)*100)/100;
            $scope.hygine = Math.round((hygine / total)*100)/100;
            $scope.veriety = Math.round((veriety / total)*100)/100;
            
            //$('#ccontainer').append(');

            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: String(selectedGraph),
                data: {
                    labels: ["Taste", "Quality", "Quantity", "Service", "Hygine", "Veriety"],
                    datasets: [{
                        label: '# Average Feedback',
                        data: [$scope.taste, $scope.quality, $scope.quantity, $scope.service, $scope.hygine, $scope.veriety],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        })

    }
});