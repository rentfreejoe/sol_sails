<script>
import { listen } from "svelte/internal";
import { onMount } from "svelte";
  const solscan = "https://public-api.solscan.io";
  const userAddress = "CH4A344MfGXepT5XBzMMR5HC2VMab6S4hG8TzdWoT44r";
  let tokens = [];
	
	const getTokensURL = `${solscan}/account/tokens?account=${address}`

	const doThings = async () => {
		const response = await fetch(getTokensURL);
    const data = await response.json();
		
		tokens = data;
	}

	onMount(doThings);
</script>

{#each tokens as token}
  <div clas="token">
	   <img src="{token.tokenIcon}" alt="nft" class="icon"/>	 
     <div>
       <h3>
				 {token.tokenName}
			 </h3>
			 <p>
				 {token.tokenAddress}
			 </p>
		</div>
  </div>
{/each}