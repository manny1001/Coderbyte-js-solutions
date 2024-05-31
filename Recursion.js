const takeOff = (val) => {

    if (val === 0) {
        console.log('liftOff');
        return;
    }

    else {
        console.log(val)
        takeOff(val - 1)
    }
};

takeOff(10)