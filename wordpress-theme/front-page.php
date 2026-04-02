<?php
/**
 * The template for displaying the front page
 *
 * @package LuxLeather
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white pb-32 pt-40 md:pb-48 md:pt-56 flex items-center justify-center min-h-[90vh] overflow-hidden">
        <div class="absolute inset-0 w-full h-full">
            <!-- Simulated background image with overlay -->
            <div class="absolute inset-0 bg-slate-900/60 z-10"></div>
        </div>
        
        <div class="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="inline-block px-4 py-1.5 rounded-full bg-amber-800/90 text-amber-100 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-amber-700">
                <?php esc_html_e( 'Welcome to', 'luxleather' ); ?> <?php bloginfo( 'name' ); ?>
            </span>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                <?php esc_html_e( 'Premium Handcrafted Leather Goods', 'luxleather' ); ?>
            </h1>
            <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                <?php echo esc_html( get_bloginfo( 'description', 'display' ) ); ?>
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="<?php echo esc_url( home_url( '/shop' ) ); ?>" class="btn-primary w-full sm:w-auto bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold transition-colors shadow-lg">
                    <?php esc_html_e( 'Shop Collection', 'luxleather' ); ?> 
                </a>
            </div>
        </div>
    </section>

    <!-- Featured Products Loop Placeholder -->
    <section class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900 tracking-tight mb-4"><?php esc_html_e( 'Featured Collection', 'luxleather' ); ?></h2>
                <div class="w-24 h-1 bg-amber-800 mx-auto"></div>
            </div>

            <?php
            // If WooCommerce is active, we can run a quick shortcode or custom loop
            if ( class_exists( 'WooCommerce' ) ) {
                echo do_shortcode( '[products limit="4" columns="4" visibility="featured"]' );
            } else {
                echo '<p class="text-center text-slate-500">' . esc_html__( 'Please install and activate WooCommerce to view products.', 'luxleather' ) . '</p>';
            }
            ?>
        </div>
    </section>

    <!-- Page Content (From Editor) -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <?php
            while ( have_posts() ) :
                the_post();
                ?>
                <div class="entry-content prose prose-lg max-w-none text-slate-700 text-center">
                    <?php the_content(); ?>
                </div>
                <?php
            endwhile;
            ?>
        </div>
    </section>

</main><!-- #main -->

<?php
get_footer();
