document.getElementById("generateNoteButton").addEventListener("click", function () {
    const title = document.getElementById("noteTitle").value;
    const text = document.getElementById("noteText").value;
    const color = document.getElementById("noteColor").value;
  
    if (!title || !text) {
      alert("Please fill in both title and text fields.");
      return;
    }
  
    const postIt = document.createElement("div");
    postIt.classList.add("post-it");
    postIt.style.backgroundColor = color;
    postIt.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
  
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.appendChild(postIt);
  
    document.getElementById("noteTitle").value = '';
    document.getElementById("noteText").value = '';
  });