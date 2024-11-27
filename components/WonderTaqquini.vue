<template>

    <div ref="targetDiv" id="target-div" @mousemove="spawnImage"
        style="width: 50%; height: 100%; background-color: transparent;  z-index: 9999;">
    </div>
</template>

<script>
import { useMouse } from '@vueuse/core';

export default {
    data() {
        return {
            mouse: useMouse(),
            images: [],  // Store spawned images
            lastPosition: { x: 0, y: 0 },  // Track last mouse position
        };
    },
    methods: {
        spawnImage(event) {
            const mouse = this.mouse;
            const distance = Math.sqrt(
                Math.pow(mouse.x - this.lastPosition.x, 2) + Math.pow(mouse.y - this.lastPosition.y, 2)
            );

            // Only spawn an image if the mouse moved more than 50px
            if (distance >= 50) {
                console.log('Image spawned at:', mouse.x, mouse.y);

                // Generate a random number between 1 and 80
                const randomImageIndex = Math.floor(Math.random() * 79) + 1;
                const imagePath = `/taqquini/${randomImageIndex}.png`; // Reference image path in static folder

                // Create the image element
                const img = document.createElement('img');
                img.src = imagePath;  // Set the random image path
                img.style.position = 'absolute';
                img.style.left = `${mouse.x - 70}px`;
                img.style.top = `${mouse.y - 70}px`;
                img.style.height = '300px';  // Set the height of the image
                img.style.width = 'auto';  // Maintain the aspect ratio
                img.style.pointerEvents = 'none';  // Prevent blocking other interactions
                img.style.zIndex = '9999';  // Ensure image appears above other elements

                // Append the image to the target div
                this.$refs.targetDiv.appendChild(img);

                // Store the image in the array to track it
                this.images.push(img);

                // If there are more than 6 images, remove the oldest
                if (this.images.length > 6) {
                    const firstImage = this.images.shift();  // Remove the first image
                    firstImage.remove();  // Remove it from the DOM
                }

                // Optional: Remove the image after a set time (e.g., 2 seconds)
                setTimeout(() => {
                    img.remove();
                    const index = this.images.indexOf(img);
                    if (index > -1) {
                        this.images.splice(index, 1);  // Remove from the tracking array
                    }
                }, 2000);

                // Update the last position to the current position
                this.lastPosition = { x: mouse.x, y: mouse.y };
            }
        },
    },
};
</script>

<style scoped>
.spawned-image {
    position: absolute;
    pointer-events: none;
    height: 30px;
    width: auto;
    z-index: 9999;
}
</style>
