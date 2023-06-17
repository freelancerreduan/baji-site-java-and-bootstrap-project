(function($) {

    /**
     * Counter Clock Face
     *
     * This class will generate a generice flip counter. The timer has been
     * disabled. clock.increment() and clock.decrement() have been added.
     *
     * @param  object  The parent FlipClock.Factory object
     * @param  object  An object of properties to override the default
     */

    FlipClock.CashFace = FlipClock.Face.extend({

        /**
         * Tells the counter clock face if it should auto-increment
         */

        shouldAutoIncrement: false,

        /**
         * Constructor
         *
         * @param  object  The parent FlipClock.Factory object
         * @param  object  An object of properties to override the default
         */

        constructor: function(factory, options) {

            if(typeof options != "object") {
                options = {};
            }

            factory.autoStart = options.autoStart ? true : false;

            if(options.autoStart) {
                this.shouldAutoIncrement = true;
            }

            factory.increment = function() {
                factory.countdown = false;
                factory.setTime(factory.getTime().getTimeSeconds() + 1);
            };

            factory.decrement = function() {
                factory.countdown = true;
                var time = factory.getTime().getTimeSeconds();
                if(time > 0) {
                    factory.setTime(time - 1);
                }
            };

            factory.setValue = function(digits) {
                factory.setTime(digits);
            };

            factory.setCounter = function(digits) {
                factory.setTime(digits);
            };

            this.base(factory, options);
        },

        /**
         * Build the clock face
         */

        build: function() {
            var t        = this;
            var children = this.factory.$el.find('ul');
            var time     = this.factory.getTime().digitize([this.factory.getTime().time]);

            if(time.length > children.length) {
                $.each(time, function(i, digit) {
                    var list = t.createList(digit);

                    list.select(digit);
                });

            }

            $.each(this.lists, function(i, list) {
                list.play();
            });


            if ( time.length > 3 ) {
                this.createDivider();
                $(this.dividers[0]).insertBefore(this.lists[this.lists.length - 3].$el);

                if ( time.length > 6 ) {
                    this.createDivider();
                    $(this.dividers[1]).insertBefore(this.lists[this.lists.length - 6].$el);

                    if ( time.length > 9 ) {
                        this.createDivider();
                        $(this.dividers[2]).insertBefore(this.lists[this.lists.length - 9].$el);

                        if ( time.length > 12 ) {
                            this.createDivider();
                            $(this.dividers[3]).insertBefore(this.lists[this.lists.length - 12].$el);
                        }
                    }
                }
            }

            this.base();
        },

        createDivider: function(label, css, excludeDots) {
            if(typeof css == "boolean" || !css) {
                excludeDots = css;
                css = label;
            }

            var dots = [
                '<span class="'+this.factory.classes.dot+' comma">,</span>'
            ].join('');

            if(excludeDots) {
                dots = '';
            }

            label = this.factory.localize(label);

            var html = [
                '<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
                    '<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
                    dots,
                '</span>'
            ];

            var $html = $(html.join(''));

            this.dividers.push($html);

            return $html;
        },

        /**
         * Flip the clock face
         */

        flip: function(time, doNotAddPlayClass) {
            if(this.shouldAutoIncrement) {
                this.autoIncrement();
            }

            if(!time) {
                time = this.factory.getTime().digitize([this.factory.getTime().time]);
            }

            this.base(time, doNotAddPlayClass);
        },

        /**
         * Reset the clock face
         */

        reset: function() {
            this.factory.time = new FlipClock.Time(
                this.factory,
                this.factory.original ? Math.round(this.factory.original) : 0
            );

            this.flip();
        }
    });

}(jQuery));
