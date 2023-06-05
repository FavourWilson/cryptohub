const val = {"symbols": [{
      "description": "Bitcoin",
      "proName": "COINBASE:BTCUSD"
    },
    {
      "description": "Ethereum",
      "proName": "COINBASE:ETHUSD"
    },
    {
      "description": "Litecoin",
      "proName": "COINBASE:LTCUSD"
    },
    {
      "description": "Ripple",
      "proName": "BITSTAMP:XRPUSD"
    },
    {
      "description": "Bitcoin Cash",
      "proName": "PEPPERSTONE:BCHUSD"
    },
    {
      "description": "Polygon",
      "proName": "COINBASE:MATICUSD"
    },
    {
      "description": "Stacks",
      "proName": "COINBASE:STXUSD"
    }],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"};

  
const el = $('#ticker')
el.append(`
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets today</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  ${val}
  </script>
</div>
`);

console.log(el)
