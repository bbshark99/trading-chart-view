import type { NextPage } from "next";
import { useEffect, useCallback, useRef } from "react";

const Home: NextPage = () => {
  const marketOverviewWidgetRef = useRef(null);
  const techAnalyticsWidgetRef = useRef(null);
  const tickerWidgetRef = useRef(null);

  const loadScript = useCallback(async (url: string, bodyScript?: string) => {
    return new Promise((resolve, reject) => {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script") as any;
      script.type = "text/javascript";
      script.src = url;
      script.onreadystatechange = resolve;
      script.onload = resolve;

      if (bodyScript) {
        script.innerHTML = bodyScript;
      }
      head.appendChild(script);
    });
  }, []);

  const loadChart = useCallback(async (symbol: string) => {
    new (window as any).TradingView.widget({
      autosize: true,
      symbol: `COINBASE:${symbol}`, // COINBASE:BTCUSD
      interval: "5",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_top_toolbar: false,
      withdateranges: false,
      hide_side_toolbar: false,
      save_image: false,
      hide_legend: true,
      container_id: "app-chart",
    });
  }, []);

  const addMarketOverviewWidget = useCallback((ref: any) => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = false;
    script.innerHTML = JSON.stringify({
      container_id: "tv-medium-widget",
      title: "Cryptocurrencies",
      title_raw: "Cryptocurrencies",
      tabs: [
        {
          title: "Overview",
          title_raw: "Overview",
          symbols: [
            {
              s: "CRYPTOCAP:TOTAL",
            },
            {
              s: "BITSTAMP:BTCUSD",
            },
            {
              s: "BITSTAMP:ETHUSD",
            },
            {
              s: "FTX:SOLUSD",
            },
            {
              s: "BINANCE:AVAXUSD",
            },
            {
              s: "COINBASE:UNIUSD",
            },
          ],
          quick_link: {
            title: "More cryptocurrencies",
            href: "/markets/cryptocurrencies/prices-all/",
          },
        },
        {
          title: "Bitcoin",
          title_raw: "Bitcoin",
          symbols: [
            {
              s: "BITSTAMP:BTCUSD",
            },
            {
              s: "COINBASE:BTCEUR",
            },
            {
              s: "COINBASE:BTCGBP",
            },
            {
              s: "BITFLYER:BTCJPY",
            },
            {
              s: "CEXIO:BTCRUB",
            },
            {
              s: "CME:BTC1!",
            },
          ],
          quick_link: {
            title: "More Bitcoin pairs",
            href: "/symbols/BTCUSD/markets/",
          },
        },
        {
          title: "Ethereum",
          title_raw: "Ethereum",
          symbols: [
            {
              s: "BITSTAMP:ETHUSD",
            },
            {
              s: "KRAKEN:ETHEUR",
            },
            {
              s: "COINBASE:ETHGBP",
            },
            {
              s: "BITFLYER:ETHJPY",
            },
            {
              s: "BINANCE:ETHBTC",
            },
            {
              s: "BINANCE:ETHUSDT",
            },
          ],
          quick_link: {
            title: "More Ethereum pairs",
            href: "/symbols/ETHUSD/markets/",
          },
        },
        {
          title: "Solana",
          title_raw: "Solana",
          symbols: [
            {
              s: "FTX:SOLUSD",
            },
            {
              s: "BINANCE:SOLEUR",
            },
            {
              s: "COINBASE:SOLGBP",
            },
            {
              s: "BINANCE:SOLBTC",
            },
            {
              s: "HUOBI:SOLETH",
            },
            {
              s: "BINANCE:SOLUSDT",
            },
          ],
          quick_link: {
            title: "More Solana pairs",
            href: "/symbols/SOLUSD/markets/",
          },
        },
        {
          title: "Uniswap",
          title_raw: "Uniswap",
          symbols: [
            {
              s: "COINBASE:UNIUSD",
            },
            {
              s: "KRAKEN:UNIEUR",
            },
            {
              s: "COINBASE:UNIGBP",
            },
            {
              s: "BINANCE:UNIBTC",
            },
            {
              s: "KRAKEN:UNIETH",
            },
            {
              s: "BINANCE:UNIUSDT",
            },
          ],
          quick_link: {
            title: "More Uniswap pairs",
            href: "/symbols/UNIUSD/markets/",
          },
        },
      ],
      title_link: "/markets/cryptocurrencies/prices-all/",
      width: 400,
      height: 660,
      showChart: true,
      showFloatingTooltip: false,
      locale: "en",
      plotLineColorGrowing: "#2962FF",
      plotLineColorFalling: "#2962FF",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(120, 123, 134, 1)",
      showSymbolLogo: true,
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      colorTheme: "dark",
    });
    ref.current.appendChild(script);
  }, []);

  const addTechAnalyticsWiedget = useCallback((ref: any) => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = false;
    script.innerHTML = JSON.stringify({
      interval: "1m",
      width: 425,
      isTransparent: false,
      height: 450,
      symbol: "COINBASE:BTCUSD",
      showIntervalTabs: true,
      locale: "en",
      colorTheme: "dark",
    });
    ref.current.appendChild(script);
  }, []);

  const addTicketWidget = useCallback((ref: any) => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = false;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "COINBASE:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "COINBASE:ETHUSD",
          title: "Ethereum",
        },
        {
          description: "Solana",
          proName: "COINBASE:SOLUSDT",
        },
        {
          description: "Doge",
          proName: "COINBASE:DOGEUSDT",
        },
      ],
      colorTheme: "dark",
      isTransparent: false,
      showSymbolLogo: true,
      locale: "en",
    });
    ref.current.appendChild(script);
  }, []);

  const initialize = useCallback(async () => {
    if (!(window as any)?.TradingView) {
      await loadScript("https://s3.tradingview.com/tv.js");
    }
    await loadChart("BTCUSD");
  }, []);

  useEffect(() => {
    initialize();

    if (!!!(marketOverviewWidgetRef?.current as any).innerHTML) {
      addMarketOverviewWidget(marketOverviewWidgetRef);
    }
    if (!!!(techAnalyticsWidgetRef?.current as any).innerHTML) {
      addTechAnalyticsWiedget(techAnalyticsWidgetRef);
    }
    if (!!!(tickerWidgetRef?.current as any).innerHTML) {
      addTicketWidget(tickerWidgetRef);
    }
  }, []);

  return (
    <div className="app-container">
      <p className="app-container__header">BTCUSD Trading Chart View</p>
      <div className="app-container__body">
        <div className="app-chart">
          <div ref={tickerWidgetRef} />
          <div id="app-chart" />
        </div>
        <div className="app-widget-chart">
          <div ref={marketOverviewWidgetRef} />
          <div ref={techAnalyticsWidgetRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
