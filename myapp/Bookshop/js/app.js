var myApp = angular.module('myApp',[]);

myApp.controller('ShopController', function($scope){
		$scope.purchases=0;
		$scope.overall=0;
			$scope.books=[
			{
				title:"Little Women",
				author:"Louisa M Alcott",
				price: "39.99",
				images:["img/rsz_littlewomen.jpg"],
				total: 0,
				info:"blah blah"
				},
				{
				title:"Famous Five",
				author:"Enid Blyton",
				price: "24.99",
				images:["img/rsz_famousfive.jpg"],
				total:0,
				info:"more blah"
				},
				{
				title:"The Belgariad",
				author:"David Eddings",
				price: "36.99",
				images: ["img/belgariad.jpg"],
				total:0,
				info:"even more blah"
				},
				{
				title:"Quilt in a Day",
				author:"Eleanor Burns",
				price: "22.49",
				images:["img/quiltinaday.jpg"],
				total:0,
				info:"Quilting blah"
				},
				{
				title:"Free Motion Quilting",
				author:"Leah Day",
				price: "24.99",
				images:["img/fmq.jpg"],
				total:0,
				info:"more quilting blah"
				},
				{
				title:"World of Cross Stitch",
				author:"Jo Verso",
				price: "36.99",
				images:["img/joverso.jpg"],
				total:0
				}
				];

				for(i=0;i<$scope.books.length;i++)
				{
					if(Cookies.get($scope.books[i].title)==0||Cookies.get($scope.books[i].title)==null)
					{
						//do nowt

					}
					else {
						//increment the purchases variable
						$scope.purchases++;
						//put the total in the total field
						$scope.books[i].total=Cookies.get($scope.books[i].title);
						$scope.books[i].subtotal=(Cookies.get($scope.books[i].title)*$scope.books[i].price);
						$scope.books[i].subtotal=$scope.books[i].subtotal.toFixed(2);
						$scope.overall=$scope.overall+(Cookies.get($scope.books[i].title)*$scope.books[i].price);

					}

				}
				$scope.overall=$scope.overall.toFixed(2);

				console.log($scope.overall);	



			//Method to purchase instantly one item
			$scope.buyStuff=function(index){

				//get it to add one every time its clicked
			  $scope.books[index].total++;
				Cookies.set($scope.books[index].title,$scope.books[index].total);

				//confirmation message for testing
				console.log($scope.books[index].title + " " + $scope.books[index].total);


			};

			$scope.removeStuff=function(index){
				//get it to add one every time its clicked
				$scope.books[index].total--;
				Cookies.set($scope.books[index].title,$scope.books[index].total);

				//confirmation message for testing
				console.log($scope.books[index].title + " " + $scope.books[index].total);
			};






});
//now a controller to pull the values from cookies
myApp.controller('BasketController', function($scope){

	$scope.purchases=0;
	$scope.overall=0;
	$scope.books=[
	{
		title:"Little Women",
		author:"Louisa M Alcott",
		price: "39.99",
		images:["img/rsz_littlewomen.jpg"],
		total: 0,
		info:"blah blah"
		},
		{
		title:"Famous Five",
		author:"Enid Blyton",
		price: "24.99",
		images:["img/rsz_famousfive.jpg"],
		total:0,
		info:"more blah"
		},
		{
		title:"The Belgariad",
		author:"David Eddings",
		price: "36.99",
		images: ["img/belgariad.jpg"],
		total:0,
		info:"even more blah"
		},
		{
		title:"Quilt in a Day",
		author:"Eleanor Burns",
		price: "22.49",
		images:["img/quiltinaday.jpg"],
		total:0,
		info:"Quilting blah"
		},
		{
		title:"Free Motion Quilting",
		author:"Leah Day",
		price: "24.99",
		images:["img/fmq.jpg"],
		total:0,
		info:"more quilting blah"
		},
		{
		title:"World of Cross Stitch",
		author:"Jo Verso",
		price: "36.99",
		images:["img/joverso.jpg"],
		total:0
		}
		];


	for(i=0;i<$scope.books.length;i++)
	{
		if(Cookies.get($scope.books[i].title)==0||Cookies.get($scope.books[i].title)==null)
		{
			//do nowt

		}
		else {
			//increment the purchases variable
			$scope.purchases++;
			//put the total in the total field
			$scope.books[i].total=Cookies.get($scope.books[i].title);
			$scope.books[i].subtotal=(Cookies.get($scope.books[i].title)*$scope.books[i].price);
			$scope.books[i].subtotal=$scope.books[i].subtotal.toFixed(2);
			$scope.overall=$scope.overall+(Cookies.get($scope.books[i].title)*$scope.books[i].price);

		}

	}
	$scope.overall=$scope.overall.toFixed(2);

	console.log($scope.overall);

	$scope.removeAll=function(index){
		console.log("in the remove function");
		Cookies.remove($scope.books[index].title);
		console.log("You have " + Cookies.get($scope.books[index].title) + $scope.books[index].title);
		location.reload();
	}

});
