const mybutton = document.getElementById("mybutton");
const para = document.getElementById("para");

function convert(length, includelowercase, includeuppercase, includenumber, includesymbol) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+=";

    let allowed = "";
    let password = "";

    allowed += includelowercase ? lower : "";
    allowed += includeuppercase ? upper : "";
    allowed += includenumber ? number : "";
    allowed += includesymbol ? symbol : "";

    if (length <= 0) {
        para.textContent = "Enter at least one character";
        return;
    }
    if (allowed.length === 0) {
        para.textContent = "Choose at least one character type";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowed.length);
        password += allowed[randomindex];
    }

    return password;
}

function handleGenerate() {
    const passwordlength = 8;
    const includelowercase = true;
    const includeuppercase = true;
    const includenumber = true;
    const includesymbol = true;

    const password = convert(passwordlength, includelowercase, includeuppercase, includenumber, includesymbol);
    para.textContent = `Generated password: ${password}`;
}
