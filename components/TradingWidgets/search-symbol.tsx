import React, { useCallback, useState } from 'react';
import { StyleSheet, Dimensions, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useColorScheme } from 'nativewind';
import { useFocusEffect } from 'expo-router';
import Loader from './Loader';
import SearchSymbolLoading from './search-symbol-loading';

const TradingViewComponent = ({ symbol }: any) => {
  const { colorScheme } = useColorScheme();
  const { width, height } = Dimensions.get('screen'); // Get screen dimensions
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
    // For iOS, onLoadEnd works as expected.
    setLoading(false);
    setWebViewLoaded(true);
  };
  const handleError = () => {
    setLoading(false);
    setWebViewLoaded(false);
  };
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TradingView Chart</title>
      <style>
        body {
          margin: 0;
          height: ${height * 0.7}px; /* Set height to screen height */
          width: ${width}px;   /* Set width to screen width */,
          overflow: scroll; 
        }
        .tradingview-widget-container {
          height: 100%;
          width: 100%;
          margin: 0;  /* Add margin reset */
          padding: 0;   /* Add padding reset */

        }
        .tradingview-widget-container__widget {
          height: calc(100% - 32px);
          width: 100%;
          margin: 0; /* Add margin reset */
          padding: 0;  /* Add padding reset */
        }
        .tradingview-widget-copyright {
          display: none; /* Hide the copyright text */
        }

        .blue-text {
          color: #2962ff;  /* TradingView blue color */
          text-decoration: none; /* remove underline if any */
        }


      </style>
    </head>
    <body>
      <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
        {
          "autosize": true,
          "symbol": "${symbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "${colorScheme === 'dark' ? 'dark' : 'light'}",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }
        </script>
      </div>
    </body>
    </html>
  `;

  return (
    <>
      {loading && !webViewLoaded ? <SearchSymbolLoading /> : <></>}
      <WebView
        style={[
          styles.webview,
          {
            width,
            height: loading && !webViewLoaded ? 0 : height,
            backgroundColor: 'transparent',
            opacity: loading && !webViewLoaded ? 0 : 1,
          },
        ]} // Set WebView dimensions
        originWhitelist={['*']}
        source={{ html }}
        javaScriptEnabled
        domStorageEnabled
        scalesPageToFit={false} // Prevent scaling to ensure dimensions are respected
        scrollEnabled={false} // Disable scrolling    javaScriptEnabled
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        cacheEnabled={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    backgroundColor: 'transparent',
    // position: 'absolute', // Ensure it covers the whole screen
    // top: 0,
    // left: 0,
  },
});

export default TradingViewComponent;
