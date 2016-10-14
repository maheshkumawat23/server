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
    //var ctx = document.getElementById("myChart");
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
    $scope.startLive = function() {
        resetCanvas();
        $scope.live.from = $scope.from.toISOString();
        $scope.live.to = $scope.to.toISOString();
        console.log($scope.from.toISOString());
        console.log($scope.live);
        $http.post('api/request', {
            data: $scope.live

        }).success(function(data) {
            console.log(data);
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
            $scope.taste = taste / total;
            $scope.quality = quality / total;
            $scope.quantity = quantity / total;
            $scope.service = service / total;
            $scope.hygine = hygine / total;
            $scope.veriety = veriety / total;
            console.log();
            //$('#ccontainer').append(');

            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: 'bar',
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