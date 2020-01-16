function init() {
  const divs = document.querySelectorAll('div');
  const button = document.querySelector('button');

  // The code below will start the Event Capture propagation, whitch will
  // capture from the outer most element to the most nested child element,
  // registering the listeners attached to them. Then at the target,
  // the Bubbling phase starts propagating from the inner most to
  // the outer parents triggering listeners
  divs.forEach(div =>
    div.addEventListener(
      'click',
      function(e) {
        // Will bubble and trigger all parents listeners
        // BUT will log only the targeted className.
        // console.log(e.target.className); // logs: 1x teal | 2x cornflowerblue | 3x snow

        // Will bubble and trigger all parents listeners
        // AND will log the target and its parents className.
        // logs: 1x teal | 2x cornflowerblue | 3x snow
        console.log(this.className); // logs: teal | cornflowerblue teal | snow cornflowerblue teal
      },
      // when capture is set to true, triggers listeners on Capture Phase
      // logs: teal cornflowerblue snow
      // defaults to false
      { capture: false }
    )
  );

  button.addEventListener(
    'click',
    function(e) {
      console.log(this.className);
      e.preventDefault();
    },
    // when once is set to true, triggers listeners just once and then
    // removes the listener. It's great to ecommerce checkouts, for instace.
    // logs: button just once
    // when passive is set to true, preventDefault() will never be called,
    // generating a console warning
    // defaults to false
    { once: true, passive: false }
  );
}

// moreinfo about passive
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
