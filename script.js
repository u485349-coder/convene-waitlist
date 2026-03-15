const forms = document.querySelectorAll("[data-waitlist-form]");
const revealItems = document.querySelectorAll("[data-reveal]");
const showSuccessState =
  new URLSearchParams(window.location.search).get("submitted") === "1";

function getMessagePanel(form) {
  return document.querySelector(
    `[data-form-message-panel="${form.dataset.formMessage}"]`
  );
}

function showMessage(panel, message) {
  if (!panel) {
    return;
  }

  panel.textContent = message;
  panel.hidden = false;
}

function revealSuccessPanels() {
  document.querySelectorAll("[data-success-panel]").forEach((panel) => {
    panel.hidden = false;
  });
}

if (showSuccessState) {
  revealSuccessPanels();
}

forms.forEach((form) => {
  const panel = getMessagePanel(form);
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (event) => {
    const action = (form.getAttribute("action") || "").trim();

    if (panel) {
      panel.hidden = true;
      panel.textContent = "";
    }

    if (!action || action.includes("ACTION_URL_HERE")) {
      event.preventDefault();
      showMessage(
        panel,
        "Add your real form endpoint in place of ACTION_URL_HERE before launching the waitlist."
      );
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
    }
  });
});

window.addEventListener("pageshow", () => {
  forms.forEach((form) => {
    const submitButton = form.querySelector('button[type="submit"]');

    if (!submitButton || !submitButton.dataset.originalText) {
      return;
    }

    submitButton.disabled = false;
    submitButton.textContent = submitButton.dataset.originalText;
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
