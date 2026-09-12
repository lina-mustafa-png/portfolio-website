const envelope = document.querySelector("#about-env");
const envelopeButton = envelope.querySelector(".env-button");

function openEnvelope() {
    envelope.classList.add("is-open");
}

function toggleEnvelope() {
    const isOpen = envelope.classList.toggle("is-open");
}

envelopeButton.addEventListener("click", toggleEnvelope);

window.setTimeout(openEnvelope, 500);