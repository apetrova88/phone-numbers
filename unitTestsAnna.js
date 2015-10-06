/**
 * Created by dtv on 05.10.2015.
 */
test("test detectOperator()", function() {
    strictEqual(detectOperator(80391111111) , "Golden Telecom", 'checking Golden Telecom');
    strictEqual(detectOperator(80631111111) , "Life:)", 'checking Life:) 063');
    strictEqual(detectOperator(80931111111) , "Life:)", 'checking Life:) 093');
    strictEqual(detectOperator(80661111111) , "MTS", 'checking MTS 066');
    strictEqual(detectOperator(80951111111) , "MTS", 'checking MTS 095');
    strictEqual(detectOperator(80991111111) , "MTS", 'checking MTS 099');
    strictEqual(detectOperator(80671111111) , "Kyivstar", 'checking Kyivstar 067');
    strictEqual(detectOperator(80961111111) , "Kyivstar", 'checking Kyivstar 096');
    strictEqual(detectOperator(80971111111) , "Kyivstar", 'checking Kyivstar 097');
    strictEqual(detectOperator(80981111111) , "Kyivstar", 'checking Kyivstar 098');
    strictEqual(detectOperator(80681111111) , "Beeline", 'checking Beeline');
    strictEqual(detectOperator(80441111111) , "no info", 'checking "no info": 044');
    strictEqual(detectOperator(80001111111) , "no info", 'checking "no info": 000');
    strictEqual(detectOperator(81111111) , "no info", 'checking "no info": empty operator');
    strictEqual(detectOperator() , "no info", 'checking "no info": empty number');
    strictEqual(detectOperator("testNumber") , "no info", 'checking "no info": string');
    strictEqual(detectOperator("8+@#1111111") , "no info", 'checking "no info": special chars');
    strictEqual(detectOperator("8AAA1111111") , "no info", 'checking "no info": mix');

});
//test1