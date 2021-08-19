export function findParent(element) {
  while (!element.id) {
    element = element.parentNode;
  }
  if (element) {
    return element;
  } else return;
}
