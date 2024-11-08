<?php
/*
Plugin Name: Custom WooCommerce Cart Update alert
Description: Custom script for displaying alert box in the WooCommerce cart.
Version: 1.3.4
Author: Griffin Kilroy
*/

// Prevent direct access : automatically defined by WordPress, indicating that the file is being accessed through the WordPress environment. 
//If this constant is not defined, the script will exit
// If this constant is not defined, the script will exit
if (!defined('ABSPATH')) 
exit;

function enqueue_custom_alert_scripts() {
    // Enqueue the CSS file
    wp_enqueue_style('custom-alerts-css', get_template_directory_uri() . '/css/custom-alerts.css');
    
    // Enqueue the JavaScript file
    wp_enqueue_script('quantity-alert-js', get_template_directory_uri() . '/js/quantity-alert.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_alert_scripts');

