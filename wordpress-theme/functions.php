<?php
/**
 * Lux Leather Theme functions and definitions
 *
 * @package LuxLeather
 */

if ( ! defined( 'LUXLEATHER_VERSION' ) ) {
    // Replace the version number of the theme on each release.
    define( 'LUXLEATHER_VERSION', '1.0.0' );
}

if ( ! function_exists( 'luxleather_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     */
    function luxleather_setup() {
        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        // Let WordPress manage the document title.
        add_theme_support( 'title-tag' );

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support( 'post-thumbnails' );

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary', 'luxleather' ),
                'footer' => esc_html__( 'Footer Menu', 'luxleather' ),
            )
        );

        // Switch default core markup for search form, comment form, and comments to output valid HTML5.
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support( 'customize-selective-refresh-widgets' );

        // Add support for core custom logo.
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 250,
                'width'       => 250,
                'flex-width'  => true,
                'flex-height' => true,
            )
        );

        // Add WooCommerce Support
        add_theme_support( 'woocommerce' );
        add_theme_support( 'wc-product-gallery-zoom' );
        add_theme_support( 'wc-product-gallery-lightbox' );
        add_theme_support( 'wc-product-gallery-slider' );
    }
endif;
add_action( 'after_setup_theme', 'luxleather_setup' );

/**
 * Enqueue scripts and styles.
 */
function luxleather_scripts() {
    // Main stylesheet
    wp_enqueue_style( 'luxleather-style', get_stylesheet_uri(), array(), LUXLEATHER_VERSION );
    
    // Tailwind Compiled CSS (we'll assume the built file lives in assets/css/tailwind.css)
    if ( file_exists( get_template_directory() . '/assets/css/tailwind.css' ) ) {
        wp_enqueue_style( 'luxleather-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), filemtime( get_template_directory() . '/assets/css/tailwind.css' ) );
    }

    // Example of enqueuing JS if needed
    // wp_enqueue_script( 'luxleather-navigation', get_template_directory_uri() . '/js/navigation.js', array(), LUXLEATHER_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'luxleather_scripts' );

/**
 * Implement Customizer Additions.
 */
// require get_template_directory() . '/inc/customizer.php';
