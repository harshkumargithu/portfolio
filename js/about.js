var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const text = document.querySelector(".sec-text");
    const textload = () => {
        setTimeout(() => {
            text.textContent = "Web Designer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Frontend Developer";
        }, 4000);
    }

    textload();

    setInterval(textload, 12000);