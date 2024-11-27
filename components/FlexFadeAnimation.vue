<template>
    <div ref="animationWrapper" class="scroll-animation-wrapper" v-intersection-observer="[
        handleIntersection,
        {
            threshold: threshold,
            rootMargin: rootMargin
        }
    ]">
        <div :class="[
            'scroll-animation-content',
            animationClasses,
            {
                'is-visible': isVisible,
                'is-hidden': !isVisible
            }
        ]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // Animation direction
        direction: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right', 'up', 'down'].includes(value)
        },

        // Animation type
        type: {
            type: String,
            default: 'fade',
            validator: (value) => ['fade', 'slide', 'zoom'].includes(value)
        },

        // Delay before animation
        delay: {
            type: Number,
            default: 0
        },

        // Duration of animation
        duration: {
            type: Number,
            default: 500
        },

        // Intersection observer threshold
        threshold: {
            type: Number,
            default: 0.1
        },

        // Intersection observer root margin
        rootMargin: {
            type: String,
            default: '-50px 0px'
        }
    },

    data() {
        return {
            isVisible: false
        }
    },

    computed: {
        animationClasses() {
            return [
                `animation-${this.type}`,
                `animation-${this.direction}`,
                `delay-${this.delay}`,
                `duration-${this.duration}`
            ]
        }
    },

    methods: {
        handleIntersection([{ isIntersecting }]) {
            this.isVisible = isIntersecting
        }
    },

    directives: {
        intersectionObserver: {
            mounted(el, binding) {
                const [callback, options] = binding.value

                const observer = new IntersectionObserver(callback, options)
                observer.observe(el)

                el._intersectionObserver = observer
            },
            unmounted(el) {
                el._intersectionObserver.disconnect()
            }
        }
    }
}
</script>

<style scoped>
.scroll-animation-wrapper {
    width: 100%;
}

.scroll-animation-content {
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
}

/* Fade Animations */
.animation-fade.is-visible {
    opacity: 1;
    transform: translate(0, 0);
}

.animation-fade.animation-left {
    transform: translateX(-0px);
}

.animation-fade.animation-right {
    transform: translateX(0px);
}

.animation-fade.animation-up {
    transform: translateY(0px);
}

.animation-fade.animation-down {
    transform: translateY(-0px);
}

/* Slide Animations */
.animation-slide.is-visible {
    opacity: 1;
    transform: translate(0, 0);
}

.animation-slide.animation-left {
    transform: translateX(-100%);
}

.animation-slide.animation-right {
    transform: translateX(100%);
}

.animation-slide.animation-up {
    transform: translateY(100%);
}

.animation-slide.animation-down {
    transform: translateY(-100%);
}

/* Zoom Animations */
.animation-zoom {
    transform: scale(0.8);
}

.animation-zoom.is-visible {
    opacity: 1;
    transform: scale(1);
}

/* Delay Classes */
.delay-100 {
    transition-delay: 100ms;
}

.delay-200 {
    transition-delay: 200ms;
}

.delay-300 {
    transition-delay: 300ms;
}

.delay-400 {
    transition-delay: 400ms;
}

.delay-500 {
    transition-delay: 500ms;
}

/* Duration Classes */
.duration-300 {
    transition-duration: 300ms;
}

.duration-500 {
    transition-duration: 500ms;
}

.duration-700 {
    transition-duration: 700ms;
}

.duration-1000 {
    transition-duration: 1000ms;
}
</style>