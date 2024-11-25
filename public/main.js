//  MENU HEADER MOBILE
const menuHamberger = document.querySelector("#menu-hamberger");
const menuNav = document.querySelector("#menu-nav");

document.addEventListener("click", (e) => {
    const activeMenuHeader = () => {
        if (!menuHamberger) return;
        if (menuHamberger.contains(e.target)) {
            console.log(1);
            // click in menu hamberger
            menuNav?.classList.toggle("ct-header-menu-active");
        } else {
            // click outside
            menuNav?.classList.remove("ct-header-menu-active");
        }
    };
    activeMenuHeader?.();
});
const handleActionWidth = () => {
    if (window.innerWidth < 1024) {
        // mobile
        menuNav?.classList.add("ct-transition-duration");
    } else {
        // pc
        menuNav?.classList.remove("ct-transition-duration");
        menuNav?.classList.remove("ct-header-menu-active");
    }
};
window.addEventListener("load", (e) => {
    handleActionWidth();
});
window.addEventListener("resize", (e) => {
    handleActionWidth();
});

// VALIDATE EMAIL
const validateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const result = regex.test(email);
    return result;
};

// FORM SUBSCRIDE
const formSubscride = document.querySelector("#formsubscride");
const errorFormSubscride = document.querySelector("#errorFormSubscride");
const inputSubscride = document.querySelector("#inputSubscride");

const validateFormSubscride = () => {
    if (!formSubscride) return;
    formSubscride.addEventListener("submit", (e) => {
        e.preventDefault();
        const valueInput = inputSubscride?.value || "";
        if (validateEmail(valueInput)) {
            console.log(1);
            errorFormSubscride.style.display = "none";
        } else {
            errorFormSubscride.style.display = "block";
        }
    });
};
window.addEventListener("load", (e) => {
    validateFormSubscride();
});
