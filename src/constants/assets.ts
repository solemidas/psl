/**
 * Provides our image assets
 */

// tslint:disable no-require-imports
// tslint:disable object-literal-sort-keys
import { ImageRequireSource, ImageURISource } from 'react-native';

export type TImageList = 'logo' | 'player1' | 'player2' | 'player3' | 'player4' |
                        'player5' | 'player6' | 'player7' | 'player8' | 'player9' |
                        'player10' | 'player11' | 'player12' | 'player13' | 'player14' |
                        'player15' | 'player16' | 'player17' | 'player18' | 'player19' |
                        'player20' | 'player21' | 'player22' | 'player23' | 'player24' |
                        'player25' | 'player26' | 'player27' | 'player28' | 'player29' |
                        'player30' | 'player31' | 'player32' | 'player33' | 'news1' |
                        'news2' | 'news3' | 'news4' | 'news5' | 'news6';

export type TImages = {[key in TImageList]: ImageRequireSource; };
export type ImageType = ImageRequireSource & ImageURISource;

export const Images: TImages = {
    logo: require('assets/images/logo.png'),
    player1: require('assets/images/players/1.jpg'),
    player2: require('assets/images/players/2.jpg'),
    player3: require('assets/images/players/4.jpg'),
    player4: require('assets/images/players/5.jpg'),
    player5: require('assets/images/players/6.jpg'),
    player6: require('assets/images/players/9.jpg'),
    player7: require('assets/images/players/10.jpg'),
    player8: require('assets/images/players/11.jpg'),
    player9: require('assets/images/players/12.jpg'),
    player10: require('assets/images/players/13.jpg'),
    player11: require('assets/images/players/14.jpg'),
    player12: require('assets/images/players/15.jpg'),
    player13: require('assets/images/players/16.jpg'),
    player14: require('assets/images/players/17.jpg'),
    player15: require('assets/images/players/18.jpg'),
    player16: require('assets/images/players/19.jpg'),
    player17: require('assets/images/players/20.jpg'),
    player18: require('assets/images/players/23.jpg'),
    player19: require('assets/images/players/24.jpg'),
    player20: require('assets/images/players/25.jpg'),
    player21: require('assets/images/players/26.jpg'),
    player22: require('assets/images/players/27.jpg'),
    player23: require('assets/images/players/29.jpg'),
    player24: require('assets/images/players/30.jpg'),
    player25: require('assets/images/players/32.jpg'),
    player26: require('assets/images/players/45.jpg'),
    player27: require('assets/images/players/AC.jpg'),
    player28: require('assets/images/players/GK.jpg'),
    player29: require('assets/images/players/HC.jpg'),
    player30: require('assets/images/players/KM.jpg'),
    player31: require('assets/images/players/PH.jpg'),
    player32: require('assets/images/players/SS.jpg'),
    player33: require('assets/images/players/TM.jpg'),
    news1: require('assets/images/news/1.jpg'),
    news2: require('assets/images/news/2.jpg'),
    news3: require('assets/images/news/3.jpg'),
    news4: require('assets/images/news/4.jpg'),
    news5: require('assets/images/news/5.jpg'),
    news6: require('assets/images/news/6.jpg'),
};

export const forImageCache: ImageType[] = [
  Images.logo,
  Images.player1,
  Images.player2,
  Images.player3,
  Images.player4,
  Images.player5,
  Images.player6,
  Images.player7,
  Images.player8,
  Images.player9,
  Images.player10,
  Images.player11,
  Images.player12,
  Images.player13,
  Images.player14,
  Images.player15,
  Images.player16,
  Images.player17,
  Images.player18,
  Images.player19,
  Images.player20,
  Images.player21,
  Images.player22,
  Images.player23,
  Images.player24,
  Images.player25,
  Images.player26,
  Images.player27,
  Images.player28,
  Images.player29,
  Images.player30,
  Images.player31,
  Images.player32,
  Images.player33,
  Images.news1,
  Images.news2,
  Images.news3,
  Images.news4,
  Images.news5,
  Images.news6,
];
