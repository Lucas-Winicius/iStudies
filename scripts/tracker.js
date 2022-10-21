const tracker = document.querySelector("[caneta]");

addEventListener('mousemove', e => {
    tracker.style.left = `${e.clientX}px`
    tracker.style.top = `${e.clientY}px`
})