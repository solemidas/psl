/**
 * Provides a function for assets caching
 */
import { ImageType } from 'constants/assets';
import { Asset, Font } from 'expo';
import { Image } from 'react-native';

export const cacheImages = (images: ImageType[]) =>
    images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image)
          .downloadAsync();
      }
    });

export const cacheFonts = (fonts: Font.FontMap[]) =>
    fonts.map((font) => Font.loadAsync(font));
