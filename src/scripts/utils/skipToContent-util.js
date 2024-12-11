const ScrollToPosition = {
  init() {

  },

  addEventListenerScrollToPosition({ elements, target }) {
    const targetElement = target;

    if (!targetElement) {
      console.error('Target element is not defined or does not exist.');
      return;
    }

    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach((oldElement) => {
        const element = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(element, oldElement);
        element.addEventListener('click', () => {
          window.scrollTo({
            top: targetElement.offsetTop - 200,
            behavior: 'smooth'
          });
        });
      });
    } else if (elements instanceof HTMLElement) {
      const newElements = elements.cloneNode(true);
      elements.parentNode.replaceChild(newElements, elements);
      newElements.addEventListener('click', () => {
        window.scrollTo({
          top: targetElement.offsetTop - 200,
          behavior: 'smooth'
        });
      });
    } else {
      console.error('DEV_UTIL_LOG: Invalid elements input. It should be a single element or a NodeList.');
    }
  }
};

export default ScrollToPosition;