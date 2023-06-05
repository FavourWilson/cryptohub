 export const reloadFQ95NG4Uq = () => {
    try {
  let sc = document.getElementById("scFQ95NG4Uq");
  // sc && sc.parentNode.removeChild(sc);
  sc = document.createElement("script");
  sc.type = "text/javascript";
  sc.charset = "UTF-8";
  sc.async = true;
  sc.id = "scFQ95NG4Uq";
  sc.src =
    "https://freecurrencyrates.com/en/widget-vertical?iso=USD-BTC-ETH-LTC-XRP&df=2&p=FQ95NG4Uq&v=fits&source=fcr&width=245&width_title=0&firstrowvalue=1&thm=dddddd,eeeeee,E78F08,F6A828,FFFFFF,cccccc,ffffff,1C94C4,000000&title=Currency%20Converter&tzo=240";
  let div = document.getElementById("gcw_mainFQ95NG4Uq");
  div.parentNode.insertBefore(sc, div);
    } catch(err) {
        
    }
};

const Converter = () => {
    setTimeout(() => {
        reloadFQ95NG4Uq();
    }, 3000)
  return (
    <>
      <div>
        <div id="gcw_mainFQ95NG4Uq" className="gcw_mainFQ95NG4Uq">
          
        </div>
      </div>
    </>
  );
};

export default Converter;
