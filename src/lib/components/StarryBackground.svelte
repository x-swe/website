<script lang="ts">
  import { onMount } from 'svelte';

  // Define interface for star object
  interface Star {
    id: number;
    x: number;
    y: number;
  }

  // Initialize stars array
  let stars: Star[] = [];

  // Function to create stars
  function createStars(numStars: number) {
    const starArray: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    return starArray;
  }

  // Initialize stars on mount
  onMount(() => {
    stars = createStars(50);
  });
</script>

<style>
  .star-field {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .star {
    position: absolute;
    border-radius: 50%;
    width: 2px; /* Adjust star size */
    height: 2px; /* Adjust star size */
    animation: twinkle 5s infinite, move 120s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(100vw - 2px), calc(100vh - 2px));
    }
  }
</style>



<div class="star-field">
  {#each stars as star}
    <div
      class="star dark:bg-white"
      style="
        top: {star.y}%;
        left: {star.x}%;
        animation-delay: {Math.random() * 60}s; /* Randomize delay */
      "
    ></div>
  {/each}
</div>