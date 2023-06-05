
const TickerTwo = () => {
    // const $class = document.querySelector("setHere")
    // const script = document.createElement("script")
    
    // script.setAttribute("src", "https://widgets.coingecko.com/coingecko-coin-list-widget.js")
    return (
      <>
        {/* <div className="setHere">
          <coingecko-coin-list-widget
            coin-ids="bitcoin,eos,ethereum,litecoin,ripple,solana,tether,lunar-2,dogecoin,cardano"
            currency="usd"
            locale="en"
          ></coingecko-coin-list-widget  `>
        </div> */}
                  <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div style={{
          height:"787px",
          backgroundColor: "#FFFFFF",
          overflow:"hidden",
          boxSizing: "border-box",
          border: "1px solid #56667F",
          borderRadius: "4px",
          textAlign: "right",
          lineHeight: "14px",
          fontSize: "12px",
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #56667F",
          padding: "0px",
          margin: "0px",
          width: "100%"}}>
          <div style={{
            height:"767px",
            padding:"0px",
            margin:"0px",
           width: "100%"}}>
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=12&pref_coin_id=1505&graph=yes"
              width="100%"
              height="763px"
              frameborder="0"
              border="0"
              style={{border:0,margin:0,padding:0}}
            ></iframe>
          </div>
        </div>
        </div>
        </section>
      </>
    );
}

export default TickerTwo
