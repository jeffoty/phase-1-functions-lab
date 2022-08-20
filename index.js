
const headquater = 42
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation<42) {
        return 42 - pickupLocation;
    }
    else {
        return pickupLocation - 42;
    }
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)



function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(downtown=43, uptown=48) {
    if (downtown>uptown) {
        return ((downtown-uptown) * 264);
    }
    else  { 
        return ((uptown-downtown) * 264);
    }
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    }

    else if (distance >= 400 && distance <= 2000) {
        return (distance-400) * 0.02;
    }
    else if (distance >= 2000 && distance <=2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}