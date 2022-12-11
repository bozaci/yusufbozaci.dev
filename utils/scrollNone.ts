export default function scrollNone(isScrollNone: boolean) {
  const body = document.body;

  if (isScrollNone) {
    body.classList.add('is-scroll-none');
  } else {
    body.classList.remove('is-scroll-none');
  }
}
