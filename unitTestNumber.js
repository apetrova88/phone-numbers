/**
 * Created by IT PROSTIR on 29.09.2015.
 */
QUnit.test( "Phone Numbers", function( ) {
    equal( detectOperator(80931111111),"Life:)","Passed! it's Life:)" );
    equal( detectOperator(80961111111),"Kyivstar","Passed! it's Kyivstar" );
    equal( detectOperator(80671111111),"Kyivstar","Passed! it's Kyivstar" );
    equal( detectOperator(80661111111),"MTS","Passed! it's MTS" );
    equal( detectOperator(80631111111),"Life:)","Passed! it's Life:)" );
    equal( detectOperator(80391111111),"Golden Telecom","Passed! it's Golden Telecom" );
    equal( detectOperator(80981111111),"Kyivstar","Passed! it's Kyivstar" );
    equal( detectOperator(80991111111),"MTS","Passed! it's MTS" );
    equal( detectOperator(80681111111),"Beeline","Passed! it's Beeline" );
    equal( detectOperator(""),"no info","Passed! it's no info" );
});
