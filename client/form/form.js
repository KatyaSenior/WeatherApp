const form = document.getElementById("comments-form");

async function commentsHandler(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const location = event.target.location.value;
  const comment = event.target.comment.value;
  const response = await fetch("http://localhost:8080/comments", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      location: location,
      message: comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await response.json());
  form.reset();
  // you can put a redirect here to your home page (location something something)
}

form.addEventListener("submit", commentsHandler);