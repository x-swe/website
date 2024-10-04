<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<div>

  <Navbar />

  <div class="mx-auto my-10 w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <slot />
  </div>

  <Footer />

</div>
