function editElement(el, matchStr, replaceStr) {
    const regex = new RegExp(matchStr, `g`);
    el.textContent = el.textContent.replace(regex, replaceStr);
  }