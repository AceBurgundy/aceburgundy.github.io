document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.getAttribute("data-href");
    })

    if (card.children[0].getAttribute("src") == "") {
        card.children[0].setAttribute("src", "./images/default.png")
    }
})