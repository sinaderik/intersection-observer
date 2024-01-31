const box = document.querySelector(".box")

const observer = new IntersectionObserver(entries => {
    const boxElement = entries[0]
    const isIntersrcting = boxElement.isIntersecting;
    boxElement.target.style.backgroundColor = isIntersrcting ? "blue" : "red"
}, {
    threshold: 1
})

observer.observe(box)