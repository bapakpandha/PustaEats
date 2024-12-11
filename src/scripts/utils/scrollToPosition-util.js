function scrollToPosition(target) {
  const targetElement = target;
  window.scrollTo({
    top: (targetElement.offsetTop - 200),
    behavior: 'smooth'
  });
}
export default scrollToPosition;