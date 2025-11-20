const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        header.addEventListener("click", () => {

            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });