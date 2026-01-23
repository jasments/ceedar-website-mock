document.addEventListener("DOMContentLoaded", () => {

  const faders = document.querySelectorAll(".fade-in");

  function handleScroll() {
    const trigger = window.innerHeight * 0.85;
    faders.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const searchInput = document.getElementById("search-input");
  const topicFilter = document.getElementById("topic-filter");

  if (searchInput && topicFilter) {
    const cards = document.querySelectorAll(".card");

    function filterCards() {
      const text = searchInput.value.toLowerCase();
      const topic = topicFilter.value;

      cards.forEach(card => {
        const matchText = card.textContent.toLowerCase().includes(text);
        const matchTopic = topic === "all" || card.dataset.topic === topic;
        card.style.display = (matchText && matchTopic) ? "block" : "none";
      });
    }

    searchInput.addEventListener("input", filterCards);
    topicFilter.addEventListener("change", filterCards);
  }
});
