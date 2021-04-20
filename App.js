import React, {
  useState,
  useEffect
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { WebView } from 'react-native-webview';

const App = (props) => {
  const [play, setPlay] = useState(props.useThumbnail);

  return (
      <View
      style={[{
        height: props.height,
      }, props.style]}>
        {
          play ? 
          <TouchableOpacity
            onPress={() => setPlay(false)}
            style={{ flex: 1 }}>
            <Image
              style={{ flex: 1 }}
              resizeMode={props.thumbnailResize}
              source={{
                uri: `http://img.youtube.com/vi/${props.videoId}/0.jpg`,
              }}
            />
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              ]}>
              <Image
                source={require('./assets/youtube_icon.png')}
                style={{ width: 70, height: 70 }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          :
          <WebView
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${props.videoId}?rel=0" frameborder="0"></iframe>`,
              baseUrl: 'http://localhost',
            }}
          />
        }
      </View>
  );
};

App.defaultProps = {
  videoId: null,
  useThumbnail: true,
  thumbnailResize: "cover",
  height: "100%",
  styles: null
}

export default App;
