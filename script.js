const joinForm = document.getElementById("joinForm");
const message = document.getElementById("message");

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();

  if (!name || !subject) {
    message.textContent = "Please fill out your name and subject.";
    return;
  }

  message.textContent = `Nice, ${name}! Your ${subject} session is ready.`;
  joinForm.reset();
});
