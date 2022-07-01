<script>
    import View1 from "/src/routes/influencers.svelte";
    import View2 from "/src/routes/network.svelte";
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"
</script>
<div class="row flex-center-end">

    <div class="col-7">
        <button class="button button-outline mb-1"
        class:active={$page.url.pathname === "/influencers"}
        on:click={() => goto("/influencers")}>Whale Tracker</button>

        <button class="button button-outline mb-1"
        class:active={$page.url.pathname === "/network"}
        on:click={() => goto("/network")}>You and Them</button>
    </div>

</div>