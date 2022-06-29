<script>
     import View1 from "/src/components/view1.svelte";
    import View2 from "/src/components/view2.svelte";
    import { viewStore } from "/src/store/view.js";
</script>
<div class="row flex-center-end">

    <div class="col-7">
        <button on:click={() => ($viewStore = View1)} class="button button-outline mb-1">Whale Tracker</button>
        <button on:click={() => ($viewStore = View2)} class="button button-outline mb-1">You and Them</button>
    </div>

</div>