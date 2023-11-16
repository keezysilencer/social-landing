document.getElementById('getStartedBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents form submission
    document.getElementById('firstName').focus(); // Focus on the first name input

    var isSuccess = true; // Assume success
    if (isSuccess) {
        // Redirect to the current page with ?success=true appended to the URL
        window.location.href = window.location.href + '?success=true';
    }
});