import { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

const Trade = ({theme, size, className='', coin='BTC', id}) => {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById(`tradingview_52b91${id}`) && 'TradingView' in window) {
          new window.TradingView.widget({
            width: size.w,
            height: size.h,
            symbol: `COINBASE:${coin}USD`,
            interval: "1",
            timezone: "Etc/UTC",
            theme,
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: true,
            allow_symbol_change: true,
            save_image: false,
            container_id: `tradingview_52b91${id}`,
          });
        }
      }
    },
    []
  );

  return (
    <div className={`tradingview-widget-container h-full ${className}`}>
      <div id={`tradingview_52b91${id}`} />
    </div>
  );
}

export default Trade