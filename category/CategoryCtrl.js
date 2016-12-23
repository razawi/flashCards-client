app.controller('CategoryCtrl', ['$scope', '$http', function($scope, $http) {

   // show all cards per Category 

   // link to them

    function mapper(card){
        dispData={};
        dispData = _.pick(card, 'name', '', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    $http.get('http://127.0.0.1:8888/api/cardsList').success(function(response){
         $scope.cards = _.map(response, mapper)
          debugger;
    });

    //    $.each( displayData[0].facess, function( key, val ) {
    //         titles += ' <th> ' + val.symbol + ' </th> '
    //    });

    //    $.each( displayData, function( key, card ) { 
    //        lines += '<tr> <td> ' + card.name + '</td>';
    //        $.each( card.facess, function( num, face ) { 
    //             lines += '<td> ' + face.text + '</td>'; 
    //        });
    //        lines+="</tr>";
    //    });

    //    var table = headTempl + titles + seperator + lines + footer;
    //    $( "<table/>", {
    //        id : "curiculaTable",
    //        class: "table table-striped",
    //        html: table
    //    }).appendTo( "body" );
    //  });

}]);