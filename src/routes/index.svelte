<script>
    import { viewStore } from "/src/store/view.js";
    import Nav from "/src/components/nav.svelte";
    import View1 from "/src/components/view1.svelte";
    import View2 from "/src/components/view2.svelte";
    let currentView;
    if ($viewStore === 1) {
        currentView = View1;
    } else {
        currentView = View2;
    }
    
    $: console.log($viewStore)
</script>
<main class="container">
    <Nav/>
    <div class="row flex-center">
        <div class="col-12">
            <h3>auto-deploy?</h3>
            <p>place holder text.</p>
        </div>
    </div>
    <div>
        <svelte:component this = {$viewStore} />
       
    </div>
</main>
