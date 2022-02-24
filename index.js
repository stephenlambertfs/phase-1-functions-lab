// Code your solution in this file!
function distanceFromHqInBlocks(passenger){
    let blocks = passenger - 42;
    if(passenger < 42){
        let blocks = 42-passenger;
        return blocks;
    }
    return blocks;

}

function distanceFromHqInFeet(feet){
    let feets = distanceFromHqInBlocks(feet) * 264;
    return feets;
}

function distanceTravelledInFeet(start, end){
    let dists = (end-start) * 264;
    if(dists < 264){
        let dist = (start - end) * 264;
        return dist;

    }
    return dists;
}

function calculatesFarePrice(start, destination){
    let dist = (start - destination) * 264;
    if (dist < 400) {
        return 0;
    }if (dist > 400 && dist < 2000) {
        return ((dist - 400) * .02);
    }if (dist > 2000) {
        return 25;
    }else {
        return ('cannot travel that far')
    }
    if(true){

    }
}

