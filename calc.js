$(document).ready(

    function () {

        $("Button").click(bacCalc)
    }

);

function bacCalc() {

    let beerIn = parseFloat( $("input#numBeer").val() );

    let wineIn = parseFloat( $("input#numWine").val() );

    let shotIn = parseFloat( $("input#numShots").val() );

    let weightIn = parseFloat( $("input#weight").val() );

    let hoursIn = parseFloat( $("input#hours").val() );

    let beerCt = beerIn * 0.54;

    let wineCt = wineIn * 0.6;

    let shotCt = shotIn * 0.6;

    let totalAlc = beerCt + wineCt + shotCt;

    let alcAbsorb = totalAlc * 7.5;

    let BAC = alcAbsorb/weightIn;

    let hrdrop = hoursIn * 0.015;

    let holderBAC = BAC - hrdrop;

    let displayBAC = holderBAC.toFixed(3);


    $("p#outputMessage").text(`Your Blood Alcohol Content is  ${displayBAC}`);



}

