import { useFocusEffect } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, useColorScheme, Platform } from 'react-native';
import WebView from 'react-native-webview';

import Loader from './Loader';

const TickerTape = ({ className }: any) => {
  const webviewRef = useRef(null);
  const theme: any = useColorScheme();
  const [loading, setLoading] = useState(false);
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (!webViewLoaded) {
        setLoading(true);
      }

      return () => {
        // Optional cleanup
      };
    }, [webViewLoaded])
  );

  const handleLoadEnd = () => {
    setLoading(false);
    setWebViewLoaded(true);
  };
  const handleError = () => {
    setLoading(false);
    setWebViewLoaded(false);
  };

  const htmlContent = useMemo(
    () => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>TradingView Ticker Tape</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, maximum-scale=0.8, user-scalable=no">
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            overflow: hidden !important;
            background-color: transparent !important; /* Override background */
          }
          .tradingview-widget-container,
          .tradingview-widget-container__widget,
          .tradingview-widget-container__widget > div,
          iframe {
           background-color:${theme === 'dark' ? '#131B24 !important' : '#fff'} ;
            height: auto !important;
            min-height: 46px !important;
            overflow: hidden !important;
            pointer-events: none;
            transform: scale(1); /* Add this to reset scaling if necessary */
          }
        </style>
      </head>
      <body>
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
          <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
            {
              "symbols": [
                {
                  "proName": "FOREXCOM:SPXUSD",
                  "title": "S&P 500 Index"
                },
                {
                  "proName": "FOREXCOM:NSXUSD",
                  "title": "US 100 Cash CFD"
                },
                {
                  "proName": "FX_IDC:EURUSD",
                  "title": "EUR to USD"
                },
                {
                  "proName": "BITSTAMP:BTCUSD",
                  "title": "Bitcoin"
                },
                {
                  "proName": "BITSTAMP:ETHUSD",
                  "title": "Ethereum"
                }
              ],
              "showSymbolLogo": true,
              "isTransparent": true,
              "displayMode": "compact",
              "colorTheme": "${theme}",
              "locale": "en",
              "height": 46,
              "width": "100%"
            }
          </script>
        </div>
      </body>
    </html>
  `,
    [theme]
  );

  return (
    <View style={[styles.container, className, { backgroundColor: 'transparent' }]}>
      {loading && !webViewLoaded && <Loader />}
      <WebView
        ref={webviewRef}
        style={{
          height: loading && !webViewLoaded ? 0 : 63,
          backgroundColor: 'transparent',
          overflow: 'hidden',
          opacity: loading && !webViewLoaded ? 0 : 1,
        }}
        source={{ html: htmlContent }}
        originWhitelist={['*']}
        javaScriptEnabled
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        cacheEnabled={true}
        scalesPageToFit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
});

export default TickerTape;
