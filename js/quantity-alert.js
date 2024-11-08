jQuery(document).ready(function ($) {
    // First, add the HTML for the custom alert box to the body
    $('body').append(`
        <div id="custom-alert" style="display: none;">
            <div class="alert-content">
                <div class="alert-message"></div>
                <button class="alert-close">OK</button>
            </div>
        </div>
    `);

    function showAlert() {
        // Get the quantity from the changed input field
        const quantity = $('.wc-block-components-quantity-selector__input').val();
        
        // Get the product name from cart item
        const sku = $('.wc-block-components-product-name').text();
        
        // Set the alert message
        $('#custom-alert .alert-message').text(
            "You just changed the quantity of " + sku + " to " + quantity
        );
        
        // Show the custom alert by changing display to flex
        $('#custom-alert').css('display', 'flex');
    }

    // Close alert when clicking the OK button
    $('#custom-alert').on('click', '.alert-close', function() {
        $('#custom-alert').css('display', 'none');
    });

    // Trigger showAlert when quantity changes
    $(document).on('change', '.wc-block-components-quantity-selector__input', showAlert);

    // Trigger showAlert when clicking the quantity selector button
    $(document).on('click', '.wc-block-components-quantity-selector__button', showAlert);
});
