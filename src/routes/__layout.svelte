<script>
  import Nav from "/src/components/nav.svelte";
  import Index from "/src/routes/index.svelte";
  import View1 from "/src/routes/influencers.svelte";
  import View2 from "/src/routes/network.svelte";
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
</script>
<Nav/>
<slot>
<Index/>
<View1/>
<View2/>
</slot>
<style lang="scss" global>
    @import "../styles/main.scss";
</style>
