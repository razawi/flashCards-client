app.controller('CurriculaCtrl', ['$scope', function($scope) {
   debugger;

   // show all categories

   // later - only per curricyula

   // link to category

   function catMapper(card){
        dispData={};
        dispData = _.pick(card, 'symbol', '', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // $.getJSON( 'http://127.0.0.1:8888/api/categoriesList', function( data ) {
    //     var displayData = _.map(data, catMapper)

    //     var headTempl =  '<table id="curiculaTable" class="table table-striped"> <thead> <tr>';
    //     var seperator =  '</thead>  <tbody> '; 
    //     var footer = '</tbody>  </table>';
    //     var titles = '<th>Name</th> ';
    //     var lines =  ''; 

    //    $.each( displayData[0].facess, function( key, val ) {
    //         titles += ' <th> ' + val.symbol + ' </th> '
    //    });

    //    $.each( displayData, function( key, card ) { 
    //        lines += '<tr> <td> ' + card.symbol + '</td>';
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
    // });


}]);