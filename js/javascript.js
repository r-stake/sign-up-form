const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error-message");
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error-message");
let submitted = false;

form.addEventListener("submit", (event) => {
    submitted = true;
    if (!firstName.value) {
        firstNameError.innerHTML = `<i class="bi bi-patch-exclamation"></i> First name is required`;
        firstName.classList.add("active-error");
        event.preventDefault();
    } else {
        firstNameError.textContent = "";
        firstName.classList.remove("active-error");
    }

    if (!lastName.value) {
        lastNameError.innerHTML = `<i class="bi bi-patch-exclamation"></i> Last name is required`;
        lastName.classList.add("active-error");
        event.preventDefault();
    }
});

firstName.addEventListener("input", () => {
    if (submitted) {
        if (!firstName.value) {
            firstNameError.innerHTML = `<i class="bi bi-patch-exclamation"></i> First name is required`;
            firstName.classList.add("active-error");
        } else {
            firstNameError.textContent = "";
            firstName.classList.remove("active-error");
        }
    }
});

lastName.addEventListener("input", () => {
    if (submitted) {
        if (!lastName.value) {
            lastNameError.innerHTML = `<i class="bi bi-patch-exclamation"></i> First name is required`;
            lastName.classList.add("active-error");
        } else {
            lastNameError.textContent = "";
            lastName.classList.remove("active-error");
        }
    }
});