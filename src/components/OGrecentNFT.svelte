<script>
import { listen } from "svelte/internal";
import { onMount } from "svelte";

const solscan = "https://public-api.solscan.io";
const userAddress = "CH4A344MfGXepT5XBzMMR5HC2VMab6S4hG8TzdWoT44r"; 
const getTokensURL = `${solscan}/account/tokens?account=${userAddress}`

let token;
let address;
let tokens = [];
let nftDetails;
		
// fetch initial token data
	const fetchTokens = async () => {
		const response = await fetch(getTokensURL);
    const data = await response.json();
		tokens = data;
	}
	$: console.log(tokens)

// fetch details from NFT address
  const fetchDetails = async () => {
    const response = await fetch('${solscan}/token/meta?tokenAddress=${address}');
    const data = await response.json();
    nftDetails = data;
  }
$: console.log(nftDetails)

// fetch image for each nft
const fetchImage = async () => {

}

	onMount(fetchTokens, fetchDetails, fetchImage);
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