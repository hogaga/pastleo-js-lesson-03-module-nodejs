function removeGreetingIfExists() {
  const greetingDiv = document.getElementById('greeting');
  if (greetingDiv) {
    greetingDiv.remove();
  }
}

export default removeGreetingIfExists;
