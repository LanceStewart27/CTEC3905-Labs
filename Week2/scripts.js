let clickCount = 0;


function incrementclickCount() {
    clickCount++;
    target.textContent = clickCount
  }

  myTrigger.addEventListener('click', incrementclickCount);