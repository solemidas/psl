// tslint:disable file-name-casing
// tslint:disable no-require-imports
/**
 * Provides an entry point for the app
 */
import { forImageCache } from 'constants/assets';
import { AppLoading } from 'expo';
import { RootNavigator } from 'navigation/navigator';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { Fill } from 'theme/layout';
import { cacheFonts, cacheImages } from 'utils/cacheAssetsAsync';

interface IProps {
  skipLoadingScreen: boolean;
}

interface IState {
  isLoadingComplete: boolean;
}

// tslint:disable-next-line:no-default-export
export default class App extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    this.loadAssetsAsync = this.loadAssetsAsync.bind(this);
  }

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return(
        <Fill>
          <RootNavigator />
          <StatusBar barStyle="light-content" />
        </Fill>
      );
    }
  }

  private _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  private _handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    // tslint:disable-next-line:no-console
    console.warn(error);
  }

  private async loadAssetsAsync() {
    const imageAssets = cacheImages(forImageCache);

    const fontAssets = cacheFonts([
      {'google-bold': require('assets/fonts/GoogleSans-Bold.ttf')},
      {'google-medium': require('assets/fonts/GoogleSans-Medium.ttf')},
      {'google-regular': require('assets/fonts/GoogleSans-Regular.ttf')},
      {icomoon: require('assets/fonts/icomoon.ttf')},
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }
}
