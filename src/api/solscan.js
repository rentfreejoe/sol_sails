(async () => {
    const response = await fetch("https://public-api.solscan.io/account/tokens?account=CH4A344MfGXepT5XBzMMR5HC2VMab6S4hG8TzdWoT44r");
    
    const data = await response.json();
    
    
    const filtered = data.map((token) => {
       return {
          icon : token.tokenIcon
       }
    })
    
    console.log({filtered})
    
    })()