(function () {
    var theForm = document.getElementById("the-form");
    if ("oninput" in theForm) {
        theForm.addEventListener("input", function () {
            output.value = range.value;
        }, false);
    }
})();