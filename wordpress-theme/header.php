<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site min-h-screen flex flex-col bg-white font-sans antialiased">
    <a class="skip-link screen-reader-text sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50" href="#primary"><?php esc_html_e( 'Skip to content', 'luxleather' ); ?></a>

    <!-- The header logic translated from React to PHP/Tailwind -->
    <header id="masthead" class="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            <!-- Logo area -->
            <div class="site-branding flex items-center gap-2">
                <?php if ( has_custom_logo() ) : ?>
                    <div class="site-logo"><?php the_custom_logo(); ?></div>
                <?php else: ?>
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2" rel="home">
                        <div class="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center text-amber-100 font-bold text-xl shadow-md border border-amber-900/20">
                            <?php echo substr(get_bloginfo('name'), 0, 1); ?>
                        </div>
                        <span class="text-xl font-bold tracking-tight transition-colors hidden sm:block text-slate-900">
                            <?php bloginfo( 'name' ); ?>
                        </span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-8">
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'menu-1',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-slate-700',
                        'fallback_cb'    => false, // Do not fallback to wp_page_menu
                    )
                );
                ?>
            </div>

            <!-- Icons (Search, Account, Cart) -->
            <div class="flex items-center gap-4 text-slate-700">
                <button class="p-2 transition-colors hover:text-amber-800" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </button>
                <a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="p-2 transition-colors hover:text-amber-800" aria-label="Account">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </a>
                
                <?php if ( class_exists( 'WooCommerce' ) ) : ?>
                    <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="p-2 transition-colors hover:text-amber-800 relative" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        <?php if ( WC()->cart->get_cart_contents_count() > 0 ) : ?>
                            <span class="absolute top-0 right-0 w-4 h-4 bg-amber-800 text-amber-100 text-[10px] flex items-center justify-center rounded-full">
                                <?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
                            </span>
                        <?php endif; ?>
                    </a>
                <?php endif; ?>

                <!-- Mobile menu toggle (requires JS to function ideally, simple version here) -->
                <button class="md:hidden p-2 transition-colors text-slate-600" aria-label="Toggle Menu" id="mobile-menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
            </div>
        </nav>
    </header>

    <!-- Basic JS for fixed header offset -->
    <div class="h-20"></div>
