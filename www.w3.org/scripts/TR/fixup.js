/******************************************************************************
 * This code handles:                                                         *
 * - the obsolete warning on outdated specs                                   *
 ******************************************************************************/
(function() {
  "use strict";
  /* Deprecation warning */
  if (document.location.hostname === "www.w3.org") {
    var request = new XMLHttpRequest();

    request.open('GET', '//www.w3.org/TR/tr-outdated-spec');
    request.onload = function() {
      if (request.status < 200 || request.status >= 400) {
        return;
      }
      try {
        var currentSpec = JSON.parse(request.responseText);
      } catch (err) {
        console.error(err);
        return;
      }
      document.body.classList.add("outdated-spec");
      var node = document.createElement("p");
      node.classList.add("outdated-warning");
      if (currentSpec.style) {
          node.classList.add(currentSpec.style);
      }

      var frag = document.createDocumentFragment();
      var heading = document.createElement("strong");
      heading.innerHTML = currentSpec.header;
      frag.appendChild(heading);

      var anchor = document.createElement("a");
      anchor.id = "outdated-note";
      anchor.href = currentSpec.latestUrl;
      anchor.innerText = currentSpec.latestUrl + ".";

      var warning = document.createElement("span");
      warning.innerText = currentSpec.warning;
      warning.appendChild(anchor);
      frag.appendChild(warning);

      var button = document.createElement("button");
      var handler = makeClickHandler(node);
      button.addEventListener("click", handler);
      button.innerHTML = "&#9662; collapse";
      frag.appendChild(button);
      node.appendChild(frag);

      function makeClickHandler(node) {
        var isOpen = true;
        return function collapseWarning(event) {
          var button = event.target;
          isOpen = !isOpen;
          node.classList.toggle("outdated-collapsed");
          document.body.classList.toggle("outdated-spec");
          button.innerText = (isOpen) ? '\u25BE collapse' : '\u25B4 expand';
        }
      }
      document.body.appendChild(node);
    };

    request.onerror = function() {
      console.error("Request to https://www.w3.org/TR/tr-outdated-spec failed.");
    };

    request.send();
  }
})();
