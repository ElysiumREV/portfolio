document.addEventListener("DOMContentLoaded", function () {
  const contacts = document.querySelector(".contacts");
  const toggleBtn = document.getElementById("contactsToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
      contacts.classList.toggle("open");
    });
  }

  const copyEmailButton = document.getElementById("copyEmail");
  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", function () {
      const email = "justomelone@gmail.com"; // Substitua pelo seu e-mail
      navigator.clipboard.writeText(email).then(() => {
        showNotification("Email copied to clipboard!");
      });
    });
  }

  function showNotification(message) {
    const notification = document.getElementById("notification");
    if (notification) {
      notification.textContent = message; // Define o texto da notificação
      notification.classList.add("show"); // Mostra a notificação

      // Remove a notificação após 3 segundos
      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000); // 3000ms = 3 segundos
    }
  }
});