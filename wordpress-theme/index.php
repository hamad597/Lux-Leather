<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *
 * @package LuxLeather
 */

get_header(); ?>

<main id="primary" class="site-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <?php
    if ( have_posts() ) :

        if ( is_home() && ! is_front_page() ) :
            ?>
            <header>
                <h1 class="page-title text-3xl font-bold mb-8"><?php single_post_title(); ?></h1>
            </header>
            <?php
        endif;

        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('mb-12 border-b pb-12'); ?>>
                <header class="entry-header mb-4">
                    <?php
                    if ( is_singular() ) :
                        the_title( '<h1 class="entry-title text-4xl font-extrabold">', '</h1>' );
                    else :
                        the_title( '<h2 class="entry-title text-3xl font-bold"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
                    endif;
                    ?>
                </header>

                <div class="entry-content prose prose-lg max-w-none text-gray-700">
                    <?php
                    the_content(
                        sprintf(
                            wp_kses(
                                /* translators: %s: Name of current post. Only visible to screen readers */
                                __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'luxleather' ),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            wp_kses_post( get_the_title() )
                        )
                    );

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'luxleather' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>
            </article>
            <?php
        endwhile;

        the_posts_navigation(
            array(
                'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'luxleather' ) . '</span> <span class="nav-title">%title</span>',
                'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'luxleather' ) . '</span> <span class="nav-title">%title</span>',
            )
        );

    else :

        ?>
        <section class="no-results not-found">
            <header class="page-header mb-8">
                <h1 class="page-title text-4xl font-bold"><?php esc_html_e( 'Nothing Found', 'luxleather' ); ?></h1>
            </header>

            <div class="page-content text-lg text-gray-700">
                <?php
                if ( is_search() ) :
                    ?>
                    <p class="mb-4"><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'luxleather' ); ?></p>
                    <?php
                    get_search_form();

                else :
                    ?>
                    <p class="mb-4"><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'luxleather' ); ?></p>
                    <?php
                    get_search_form();

                endif;
                ?>
            </div>
        </section>
        <?php

    endif;
    ?>

</main><!-- #main -->

<?php
get_footer();
