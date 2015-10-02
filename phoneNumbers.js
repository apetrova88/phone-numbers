function detectOperator(a){
    a = 80931111111;
    console.log(String(a).substr(1, 3));
    var op="no info";
    if (String(a).substr(1,3) === "039") return "Golden Telecom";
    if (String(a).substr(1,3) === "063" || String(a).substr(1,3) === "093") return "Life:)";
    if (String(a).substr(1,3) === "066" || String(a).substr(1,3) === "095" || String(a).substr(1,3) === "099") return "MTS";
    if (String(a).substr(1,3) === "067" || String(a).substr(1,3) === "096" || String(a).substr(1,3) === "097" || String(a).substr(1,3) === "098") return "Kyivstar";
    if (String(a).substr(1,3) === "068") return "Beeline";
    else return op;
}