function init() {
  const list = document.querySelector('ul');

  // Event delegation allows you to avoid adding event listeners to specific nodes.
  // Instead, the event listener is added to one parent.
  // That event listener analyzes bubbled events to find a match on child elements.
  // Here the event listener is added to the parent element 'ul'
  // but the click captures the current child clicked
  list.addEventListener('click', function(e) {
    // Here I'm just illustrating that you can check
    // if only the element that you want is clicked
    const isLi = e.target.matches('li');
    if (isLi) console.log(e.target); // logs the clicked 'li'
  });
}
