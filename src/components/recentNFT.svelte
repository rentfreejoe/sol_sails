<script>
import { listen } from "svelte/internal";
import { onMount } from "svelte";
const web3 = ("@solana/web3.js");

(async () =>{
const solana = new web3.Connection("https://bold-proud-meadow.solana-mainnet.quiknode.pro/10329bdaa8ea0af50ba3a95323e160f484e774f4/");
  console.log(await solana.getLargestAccounts());
})();

</script>

<p> 
recent nft
</p>