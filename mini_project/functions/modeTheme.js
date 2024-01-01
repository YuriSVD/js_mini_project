export const modeTheme = () => {
    const mode = localStorage.getItem("themeMode");
    if (mode) {
        document.body.classList.add(mode);
        const ball = document.getElementById("ball");
        ball.style.transform = "translateX(1.25vw)";
    }
}


