const TickerThree = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div style={{
            width: "100%",
            height: "220px",
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            boxSizing: "border-box",
            border: "1px solid #56667F",
            borderRadius: "4px",
            textAlign: "right",
            lineHeight: "14px",
            blockSize: "220px",
            fontSize: "12px",
            fontFeatureSettings: "normal",
            textSizeAdjust: "100%",
            boxShadow: "inset 0 -20px 0 0 #56667F",
            padding: "1px",
            margin: "0px"}}>
            <div style={{
                height: "200px",
                padding: "0px",
                margin: "0px",
                width: "100%"}}>
              <iframe
                src="https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505"
                width="250"
                height="196px"
                frameBorder="0"
                border="0"
                style={{border:0,margin:0,padding:0,lineHeight:"14px"}}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TickerThree;
