let submitted = false;

const form = document.querySelector("form");

const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error-message");
const firstNameLabel = document.querySelector(".first-name > label");

const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error-message");
const lastNameLabel = document.querySelector(".last-name > label")

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error-message");
const emailLabel = document.querySelector(".email > label");

const phone = document.getElementById("phone-number");
const phoneError = document.querySelector("#phone-number + span.error-message");
const phoneLabel = document.querySelector(".phone > label");

const password = document.getElementById("password");
const passwordError = document.querySelector(".password1 > span");
const passwordLabel = document.querySelector(".password1 > label");

const password2 = document.getElementById("confirm-password");
const password2Error = document.querySelector(".password2 > span");
const passwordLabel2 = document.querySelector(".password2 > label");


form.addEventListener("submit", (event) => {
    submitted = true;
    validateForMissingValue(firstName, firstNameError, firstNameLabel, event);
    validateForMissingValue(lastName, lastNameError, lastNameLabel, event);
    validateForMissingValue(email, emailError, emailLabel, event);
    validateForMissingValue(phone, phoneError, phoneLabel, event);
    validateForMissingValue(password, passwordError, passwordLabel, event);
    validateForMissingValue(password2, password2Error, passwordLabel, event);
});

firstName.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(firstName, firstNameError, firstNameLabel);
    }
});

lastName.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(lastName, lastNameError, lastNameLabel);
    }
});

email.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(email, emailError, emailLabel);
    }
});

phone.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(phone, phoneError, phoneLabel);
    }
});

password.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(password, passwordError, passwordLabel);
    }
});

password2.addEventListener("input", () => {
    if (submitted) {
        validateForMissingValue(password2, password2Error, passwordLabel);
    }
});

function validateForMissingValue(element, elementError, elementLabel, event = null) {
    const formattedElementName = capitalize(elementLabel.textContent);
    if (!element.value) {
        elementError.innerHTML = `<i class="bi bi-patch-exclamation"></i> ${formattedElementName} is required`;
        element.classList.add("active-error");
        if (event) {
            event.preventDefault();
        }
    } else {
        elementError.textContent = "";
        element.classList.remove("active-error");
    }
}

function capitalize(str) {
    return str.charAt(1) + str.slice(2).toLowerCase();
}