const modal = document.getElementById("modal-overlay");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.querySelector(".close-modal");
const form = document.getElementById("contact-form");
const responseDiv = document.getElementById("form-response");

const savedData = [];

openBtn.addEventListener("click", () => { 
    modal.style.display = "flex";
    form.style.display = "flex";
});

closeBtn.addEventListener("click", () => { 
    modal.style.display = "none";
    form.style.display = "none";
});

modal.addEventListener("click", e => { 
    if (e.target === modal) {
        modal.style.display = "none";
        form.style.display = "none";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        firstName: form["first-name"].value,
        lastName: form["last-name"].value,
        email: form["email"].value,
        message: form["message"].value
    };

    savedData.push(data);

    console.log("Збережено:", savedData);

    responseDiv.style.display = "flex";
    responseDiv.textContent = `Дякуємо, ${data.firstName} ${data.lastName}! Ваше повідомлення отримано.`;

    form.reset();
});

