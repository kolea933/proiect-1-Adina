document.addEventListener("DOMContentLoaded", () => {
    console.log("Portofelul este gata de utilizare ✅");

    let sold = 100; // sold inițial
    const content = document.getElementById("content");
    const actionsDiv = document.getElementById("actions");
    const sumaInput = document.getElementById("suma");
    const executaBtn = document.getElementById("executa");

    let actiuneCurenta = "";

    // Bara de navigare
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            actiuneCurenta = link.dataset.section;

            if (actiuneCurenta === "sold") {
                actionsDiv.style.display = "none";
                content.textContent = `Soldul tău actual este: ${sold} RON.`;
            } 
            else if (actiuneCurenta === "adaugare") {
                actionsDiv.style.display = "block";
                content.textContent = "Introdu suma pe care vrei să o adaugi:";
            } 
            else if (actiuneCurenta === "cheltuiala") {
                actionsDiv.style.display = "block";
                content.textContent = "Introdu suma pe care vrei să o cheltuiești:";
            }
        });
    });

    // Butonul execută
    executaBtn.addEventListener("click", () => {
        const suma = parseFloat(sumaInput.value);

        if (isNaN(suma) || suma <= 0) {
            content.textContent = "Te rog introdu o sumă validă.";
            return;
        }

        if (actiuneCurenta === "adaugare") {
            sold += suma;
            content.textContent = `Ai adăugat ${suma} RON. Soldul actual: ${sold} RON.`;
        } 
        else if (actiuneCurenta === "cheltuiala") {
            if (suma > sold) {
                content.textContent = "Nu ai suficienți bani în portofel!";
            } else {
                sold -= suma;
                content.textContent = `Ai cheltuit ${suma} RON. Soldul actual: ${sold} RON.`;
            }
        }

        sumaInput.value = ""; // resetăm inputul
    });
});
