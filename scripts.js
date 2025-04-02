$(document).ready(function() {
    $('.card-body').hide();

    $('.card').hover(
        function() {
            $(this).find('.card-body').stop(true, true).fadeIn();
        },
        function() {
            $(this).find('.card-body').stop(true, true).fadeOut();
        }
    );

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Check if all fields are filled
        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).is(':checkbox') && !$(this).is(':checked')) {
                isValid = false;
            } else if (!$(this).val()) {
                isValid = false;
            }
        });

        if (isValid) {
            $('#error-message').hide();
            $('#success-message').fadeIn();
            setTimeout(function() {
                $('#success-message').fadeOut();
            }, 3000);
            $('#contactForm')[0].reset(); // Reset the form
        } else {
            $('#error-message').html(`
                <div class="alert alert-warning">
                    <strong>Warning:</strong> Please fill/check the form.
                </div>
            `).show();
        }
    });
});
