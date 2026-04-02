    <!-- Footer logic translated from React to PHP/Tailwind -->
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <!-- Brand Info -->
                <div class="col-span-1 lg:col-span-1">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 mb-6" rel="home">
                        <div class="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center text-amber-100 font-bold text-xl shadow-md border border-amber-900/20">
                            <?php echo substr(get_bloginfo('name'), 0, 1); ?>
                        </div>
                        <span class="text-xl font-bold tracking-tight text-white"><?php bloginfo( 'name' ); ?></span>
                    </a>
                    <p class="text-sm text-slate-400 mb-6 leading-relaxed">
                        <?php echo esc_html( get_bloginfo( 'description', 'display' ) ); ?>
                    </p>
                </div>

                <!-- Footer Menu 1 -->
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                        <?php esc_html_e( 'Shop', 'luxleather' ); ?>
                    </h3>
                    <ul class="space-y-4">
                        <li><a href="<?php echo esc_url( home_url( '/shop' ) ); ?>" class="text-sm hover:text-amber-400 transition-colors"><?php esc_html_e( 'All Products', 'luxleather' ); ?></a></li>
                        <!-- Add more dynamic or static links here -->
                    </ul>
                </div>

                <!-- Footer Menu 2 -->
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                        <?php esc_html_e( 'Support', 'luxleather' ); ?>
                    </h3>
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer',
                            'container'      => false,
                            'menu_class'     => 'space-y-4 text-sm',
                            'fallback_cb'    => false,
                        )
                    );
                    ?>
                </div>

                <!-- Newsletter -->
                <div>
                    <h3 class="text-white font-semibold mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                        <?php esc_html_e( 'Newsletter', 'luxleather' ); ?>
                    </h3>
                    <p class="text-sm text-slate-400 mb-4 leading-relaxed">
                        <?php esc_html_e( 'Subscribe to receive updates, access to exclusive deals, and more.', 'luxleather' ); ?>
                    </p>
                    <form class="flex" action="">
                        <input type="email" placeholder="<?php esc_attr_e( 'Enter your email', 'luxleather' ); ?>" class="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-amber-800 placeholder:text-slate-500 text-sm border border-slate-700" />
                        <button type="submit" class="bg-amber-800 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-medium">
                            <?php esc_html_e( 'Subscribe', 'luxleather' ); ?>
                        </button>
                    </form>
                </div>
            </div>

            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-sm text-slate-500">
                    &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'luxleather' ); ?>
                </p>
                <div class="flex items-center gap-4 text-slate-500 text-sm">
                    <a href="<?php echo esc_url( home_url( '/privacy' ) ); ?>" class="hover:text-amber-400 transition-colors"><?php esc_html_e( 'Privacy Policy', 'luxleather' ); ?></a>
                    <a href="<?php echo esc_url( home_url( '/terms' ) ); ?>" class="hover:text-amber-400 transition-colors"><?php esc_html_e( 'Terms of Service', 'luxleather' ); ?></a>
                </div>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<!-- Simple JS for Mobile Menu Toggle -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('primary-menu');
    if (toggle && menu) {
        // Simple toggle for the standard wp_nav_menu layout
        toggle.addEventListener('click', function() {
            if (menu.parentElement.classList.contains('hidden')) {
                menu.parentElement.classList.remove('hidden');
                menu.parentElement.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'p-4', 'shadow-md', 'border-t');
            } else {
                menu.parentElement.classList.add('hidden');
                menu.parentElement.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'p-4', 'shadow-md', 'border-t');
            }
        });
    }
});
</script>

</body>
</html>
