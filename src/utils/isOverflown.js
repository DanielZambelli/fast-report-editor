export const isOverflown = (el) => {
  var curOverflow = el.style.overflow;
  if ( !curOverflow || curOverflow === "visible" ) el.style.overflow = "hidden";
  var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow;
  return isOverflowing;
}
