/**
 * Created by albert on 15.05.17.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    $http.get('oscars.json')
        .then(function (response) {
            $scope.nagrody = [
                {
                    "year": response.data.academyAwards[0].year,
                    "bestPicture" : response.data.academyAwards[0].bestPicture,
                        "bestActor": response.data.academyAwards[0].bestActor,
                    "bestActress": response.data.academyAwards[0].bestActress

        },
                {
                    "year": response.data.academyAwards[1].year,
                    "bestPicture" : response.data.academyAwards[1].bestPicture,
                    "bestActor": response.data.academyAwards[1].bestActor,
                    "bestActress": response.data.academyAwards[1].bestActress

                },
                {
                    "year": response.data.academyAwards[2].year,
                    "bestPicture" : response.data.academyAwards[2].bestPicture,
                    "bestActor": response.data.academyAwards[2].bestActor,
                    "bestActress": response.data.academyAwards[2].bestActress

                },
                {
                    "year": response.data.academyAwards[3].year,
                    "bestPicture" : response.data.academyAwards[3].bestPicture,
                    "bestActor": response.data.academyAwards[3].bestActor,
                    "bestActress": response.data.academyAwards[3].bestActress

                }
            ];
            console.log(response.data.academyAwards[0]);
        });

    $scope.awards = [
        {
            "year": 2015,
            "bestPicture": "Spotlight",
            "bestActor": "Leonardo DiCaprio",
            "bestActress": "Brie Larson"
        },
        {
            "year": 2014,
            "bestPicture": "Birdman",
            "bestActor": "Eddie Redmayne",
            "bestActress": "Julianne Moore"
        },
        {
            "year": 2013,
            "bestPicture": "12 Years a Slave",
            "bestActor": "Matthew McConaughey",
            "bestActress": "Cate Blanchett"
        },
        {
            "year": 2012,
            "bestPicture": "Argo",
            "bestActor": "Daniel Day-Lewis",
            "bestActress": "Jennifer Lawrence"
        }
    ]


});

