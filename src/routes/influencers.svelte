<script>
    import whaleName from '/src/store/whaleNames.js';
    import Nfts from "/src/components/recentNFT.svelte";
</script>
<div class="col-12">
    <h3>Wallet Watcher</h3>
</div>
<div class="col-3 border-radius border-blue">
    <div class="border-bottom">
    <img src="https://pbs.twimg.com/profile_images/1537585776216653825/JbCLCgyZ_400x400.jpg" alt="joe" class="image">
    <a class="flex-right icon" href="https://twitter.com/Rent_Free_Joe">Twitter</a>
    <br>
    <h4>{whaleName}</h4>
    </div>
    <Nfts/>
    <div>

    </div>
</div>