



let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName("ContentBlock");
let frames = Array.from($frames);
let zVals = [];


window.onscroll = function() {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach( (data, index) => {
        zVals.push((index * zSpacing) + zSpacing);
        zVals[index] += delta * -5.5;
        let frame = frames[index];
            let transform = `translateZ(${zVals[index]}px)`;
            let opacity = zVals[index] < Math.abs(zSpacing) / 0.9 ? 1 : 0;
        frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
    })
}

window.scrollTo(0, 1);