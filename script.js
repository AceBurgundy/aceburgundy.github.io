document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
        if (card.children[0].getAttribute("src") == "./images/default.png") {
            e.preventDefault()
        } else {
            window.location.href = card.getAttribute("data-href");
        }
    })

    if (card.children[0].getAttribute("src") == "") {
        card.children[0].setAttribute("src", "./images/default.png")
    }
})

if (window.screen.availHeight > window.screen.availWidth) {
    document.querySelectorAll(".subject").forEach(subject => {
        subject.classList.add("phone")
    })

    document.querySelectorAll(".card-title").forEach(title => {
        title.classList.add("phone")
    })

    document.querySelectorAll(".section").forEach(section => {
        section.classList.add("phone")
        section.children[0].classList.add("phone")
    })

    document.querySelector("body").style.fontSize = '14px';

}