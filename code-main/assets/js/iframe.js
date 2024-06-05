function showIframe(iframeId) {
  var iframe = document.getElementById(iframeId);
  if (iframe.style.display === "block") {
    iframe.style.display = "none"; // Sembunyikan iframe
  } else {
    iframe.style.display = "block";
  }
}
