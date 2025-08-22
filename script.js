
        $(document).ready(function(){
            // Initialize First Carousel
            $('.product-carousel').owlCarousel({
                items: 4,
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 3000
                    },
                    576: {
                        items: 2,
                        autoplay: true,
                        autoplayTimeout: 3000
                    },
                    768: {
                        items: 3,
                        autoplay: false
                    },
                    992: {
                        items: 4,
                        autoplay: false
                    }
                }
            });

            // Initialize Second Carousel
            $('.product-carousel-2').owlCarousel({
                items: 4,
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3500, // Slightly different timing
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 3500
                    },
                    576: {
                        items: 2,
                        autoplay: true,
                        autoplayTimeout: 3500
                    },
                    768: {
                        items: 3,
                        autoplay: false
                    },
                    992: {
                        items: 4,
                        autoplay: false
                    }
                }
            });

            // Handle menu click events for both mobile and desktop
            $('.nav-link').click(function(e) {
                e.preventDefault();
                
                // Remove active class and blue color from all nav links (both mobile and desktop)
                $('.nav-link').removeClass('active').removeClass('text-primary').addClass('text-secondary');
                
                // Add active class and blue color to clicked nav link
                $(this).addClass('active').removeClass('text-secondary').addClass('text-primary');
                
                // Get the filter value
                var filter = $(this).data('filter');
                
                // Update the corresponding menu item in the other navigation (mobile/desktop)
                $('[data-filter="' + filter + '"]').removeClass('text-secondary').addClass('active text-primary');
                
                // Close mobile menu after selection
                $('#mobileNav').collapse('hide');
            });
        });
   