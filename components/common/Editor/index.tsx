import React, { useState, useEffect, useRef } from 'react';
import { View, Platform, Keyboard, StyleSheet, TouchableOpacity, Text } from 'react-native'; // Added TouchableOpacity and Text
import { WebView } from 'react-native-webview';
import Loading from './loading';
import theme from '~/utils/theme';
import { useColorScheme } from 'nativewind';

const QuillEditor = ({ data, onChange }: any) => {
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const webViewRef = useRef<WebView>(null);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    if (Platform.OS === 'android' && webViewLoaded) {
      if (webViewRef.current) {
        webViewRef.current.reload();
      }
    }
  }, [webViewLoaded, data, Platform.OS]);

  const handleLoadEnd = () => {
    setWebViewLoaded(true);
  };

  const handleError = () => {
    setWebViewLoaded(false);
  };

  const quillHTML = `
         <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">
        <title>Quill Editor</title>

        <!-- Include stylesheet -->
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <style>
            body {
                margin: 0;
                padding: 0;
                color:${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};
                font-family: 'Poppins', sans-serif;
                overflow: hidden; /* Prevent body scrollbar */
                height: 99vh;  /* Make sure the body takes the full viewport height */
                border:1px solid ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};
                border-radius: 5px;
            }

            #container {
                display: flex;
                flex-direction: column;
                height: 100%;
                border-radius: 5px;

            }

            .ql-toolbar.ql-snow {
                border-bottom: 1px solid ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};
                position: sticky;  /* Fix the toolbar to the top */
                top: 0;
                border-radius: 5px;
                color: ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.white};
                z-index: 1000; /* Ensure toolbar stays on top */
                background-color: ${colorScheme === 'dark' ? theme.colors.dashboard_card : 'white'}  /* Match background color to prevent transparency issues */
            }

            .ql-toolbar.ql-snow .ql-picker-label,
            .ql-toolbar.ql-snow .ql-picker-item {
                color: ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};
            }

            .ql-container.ql-snow {
                border: none;
                flex-grow: 1;  /* Allow editor to take remaining space */
                overflow-y: auto !important;  /* Scroll editor content, important! */
                -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
            }

            .ql-snow .ql-stroke {
                stroke: ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};
            }

            .ql-snow .ql-fill {
                fill: ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.trade_table_header};

            }

            .ql-snow .ql-picker.ql-expanded .ql-picker-options {
                background-color: ${colorScheme === 'dark' ? theme.colors.dashboard_card : theme.colors.dashboard_card_text};
                border: none;
            }

            .ql-snow .ql-picker-options .ql-picker-item.ql-selected,
            .ql-snow .ql-picker-options .ql-picker-item:hover {
                background-color: ${colorScheme === 'dark' ? theme.colors.dashboard_card_text : 'transparent'};
            }
     .ql-editor.ql-blank::before {
                color: ${colorScheme === 'dark' ? theme.colors.white : theme.colors.trade_table_header};
                font-family: 'Poppins', sans-serif;
                font-style: italic;
            }

            /* Add padding to the bottom of the editor to avoid content being hidden */
            #editor {
                padding-bottom: 20px; /* Adjust the value as needed */
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div id="container">
            <div id="editor">
                ${data}
            </div>
        </div>

        <!-- Include the Quill library -->
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

        <!-- Initialize Quill editor -->
        <script>
            var quill = new Quill('#editor', {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', ],
                        // ['blockquote', 'code-block'],

                        // [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        // [{ 'script': 'sub'}, { 'script': 'super' }],
                        // [{ 'indent': '-1'}, { 'indent': '+1' }],
                        // [{ 'direction': 'rtl' }],

                        // [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                        // [{ 'color': [] }, { 'background': [] }],
                        // [{ 'font': [] }],
                        // [{ 'align': [] }],

                        // ['clean']
                    ]
                },
                placeholder: 'Enter your text here...',
                theme: 'snow'
            });

            function isReactNativeWebView() {
                return typeof window.ReactNativeWebView !== 'undefined';
            }

            if (isReactNativeWebView()) {
                window.ReactNativeWebView.postMessage('editor-ready');
            }

            quill.on('text-change', function(delta, oldDelta, source) {
                if (source === 'user') {
                    const htmlContent = quill.root.innerHTML;
                    if (isReactNativeWebView()) {
                        window.ReactNativeWebView.postMessage(htmlContent);
                    } else {
                        console.log("Running in a non-React Native environment.  HTML Content:", htmlContent);
                    }
                }
            });

            // Listen for custom blur message from React Native
            window.addEventListener('message', function(event) {
                if (event.data === 'blur-editor') {   // Changed message
                    document.activeElement && document.activeElement.blur();  // Blur the active element
                }
            });
        </script>
    </body>
    </html>
        `;

  const handleMessage = (event: any) => {
    if (event.nativeEvent.data === 'editor-ready') {
    } else {
      // Handle other messages, like HTML content
      const htmlContent = event.nativeEvent.data;
      onChange(htmlContent);
    }
  };

  return (
    <View style={[styles.container]}>
      {!webViewLoaded && <Loading />}

      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: quillHTML }}
        javaScriptEnabled
        style={{
          height: !webViewLoaded ? 0 : '100%',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          opacity: !webViewLoaded ? 0 : 1,
          zIndex: 1000,
        }}
        domStorageEnabled
        onMessage={handleMessage}
        scalesPageToFit={Platform.OS === 'ios' ? false : true}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        cacheEnabled
        scrollEnabled={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default QuillEditor;
