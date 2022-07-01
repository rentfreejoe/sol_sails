<script>
     import View1 from "/src/components/view1.svelte";
    import View2 from "/src/components/view2.svelte";
    import { viewStore } from "/src/store/view.js";
</script>
<div class="row flex-center-end">

    <div class="col-7">
        <button class="button button-outline mb-1"
         class:active={$viewStore == View1}
         on:click={() => ($viewStore = View1)}>Whale Tracker</button>

        <button class="button button-outline mb-1"
         class:active={$viewStore == View2}
         on:click={() => ($viewStore = View2)}>You and Them</button>
    </div>

</div>