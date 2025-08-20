// FAQ Toggle
const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Tutup semua yang lain
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) ans.style.display = "none";
    });

    // Toggle yang dipilih
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
