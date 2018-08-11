/**
 * Provides mock data for the prototype
 */
// tslint:disable no-require-imports
import { Images } from 'constants/assets';

export interface IPlayersProps {
  image: number;
  name: string;
  no: string;
  position: string;
}

export const players: IPlayersProps[] = [
    { no: '1', name: 'SHU-AIB WALTERS', position: 'GOALKEEPERS', image: Images.player1 },
    { no: '15', name: 'TATENDA MKURUVA', position: 'GOALKEEPERS', image: Images.player12 },
    { no: '32', name: 'SAGE STEPHENS', position: 'GOALKEEPERS', image: Images.player25 },
    { no: '2', name: 'THAMSANQA MKHIZE', position: 'DEFENDERS', image: Images.player2 },
    { no: '4', name: 'VINCENT KOBOLA', position: 'DEFENDERS', image: Images.player3 },
    { no: '5', name: 'EDMILSON DOVE', position: 'DEFENDERS', image: Images.player4 },
    { no: '6', name: 'EBRAHIM SEEDAT', position: 'DEFENDERS', image: Images.player5 },
    { no: '12', name: 'TAARIQ FIELIES', position: 'DEFENDERS', image: Images.player9},
    { no: '16', name: 'ROBYN JOHANNES', position: 'DEFENDERS', image: Images.player13 },
    { no: '18', name: 'JOAO MUSSICA', position: 'DEFENDERS', image: Images.player15 },
    { no: '27', name: 'TSHEPO GUMEDE', position: 'DEFENDERS', image: Images.player22 },
    { no: '30', name: 'CRAIG MARTIN', position: 'DEFENDERS', image: Images.player24 },
    { no: '10', name: 'AYANDA PATOSI', position: 'MIDFIELDERS', image: Images.player7 },
    { no: '11', name: 'AUBREY NGOMA', position: 'MIDFIELDERS', image: Images.player8 },
    { no: '13', name: 'TEKO MODISE', position: 'MIDFIELDERS', image: Images.player10 },
    { no: '19', name: 'ROLANDA PUTSCHE', position: 'MIDFIELDERS', image: Images.player16 },
    { no: '23', name: 'MPHO MATSI', position: 'MIDFIELDERS', image: Images.player18 },
    { no: '25', name: 'DUNCAN ADONIS', position: 'MIDFIELDERS', image: Images.player20 },
    { no: '26', name: 'THABO NODADA', position: 'MIDFIELDERS', image: Images.player21 },
    { no: '29', name: 'SHANE ROBERTS', position: 'MIDFIELDERS', image: Images.player23 },
    { no: '9', name: 'LETSIE KOAPENG', position: 'FORWARDS', image: Images.player6 },
    { no: '14', name: 'NANA AKOSAH-BEMPAH', position: 'FORWARDS', image: Images.player11 },
    { no: '17', name: 'VICTOR OBINNA', position: 'FORWARDS', image: Images.player14 },
    { no: '29', name: 'JUDAS MOSEAMEDI', position: 'FORWARDS', image: Images.player23 },
    { no: '24', name: 'SIBUSISO MASINA', position: 'FORWARDS', image: Images.player19 },
    { no: '45', name: 'LEHLOHONOLO MAJORO', position: 'FORWARDS', image: Images.player26 },
    { no: 'HC', name: 'BENNI MCCARTHY', position: 'COACHES', image: Images.player29 },
    { no: 'AC', name: 'IAN TAYLOR', position: 'COACHES', image: Images.player27 },
    { no: 'GK', name: 'CALVIN MARLIN', position: 'COACHES', image: Images.player28 },
    { no: 'SS', name: 'GUIDO SEERDEN', position: 'COACHES', image: Images.player32 },
    { no: 'PH', name: 'MARC CHRISTIAN', position: 'COACHES', image: Images.player31 },
    { no: 'KM', name: 'MONDI MAGADLA', position: 'COACHES', image: Images.player30 },
    { no: 'TM', name: 'MOENIER DAVIDS', position: 'COACHES', image: Images.player33 },
];

export interface ITeamProps {
  image: number;
  name: string;
  pos: number;
}

export const teams: ITeamProps[] = [
  {pos: 1, name: 'Bidvest Wits', image: require('assets/images/clubs/bw.png')},
  {pos: 2, name: 'Kaizer Chiefs', image: require('assets/images/clubs/kc.png')},
  {pos: 3, name: 'Mamelodi Sundowns', image: require('assets/images/clubs/ms.png')},
  {pos: 4, name: 'Orlando Pirates', image: require('assets/images/clubs/op.png')},
  {pos: 5, name: 'Supersports United', image: require('assets/images/clubs/su.png')},
  {pos: 6, name: 'Ajax Cape Town', image: require('assets/images/clubs/ac.png')},
  {pos: 7, name: 'Bloemfontein Celtic', image: require('assets/images/clubs/bc.png')},
  {pos: 8, name: 'Baroka FC', image: require('assets/images/clubs/bfc.png')},
  {pos: 9, name: 'Cape Town City', image: require('assets/images/clubs/cc.jpg')},
  {pos: 10, name: 'Chippa United', image: require('assets/images/clubs/cu.png')},
  {pos: 11, name: 'Free State Stars', image: require('assets/images/clubs/fs.png')},
  {pos: 12, name: 'Golden Arrows', image: require('assets/images/clubs/ga.png')},
  {pos: 13, name: 'Highlands Park', image: require('assets/images/clubs/hp.png')},
  {pos: 14, name: 'Platinum Stars', image: require('assets/images/clubs/ps.jpg')},
];

export interface IVideoDataProps {
  excerpt: string;
  image: number;
  title: string;
  url: string;
}

export const videos: IVideoDataProps[] = [
  {
    excerpt: 'Cape Town City aims to go one better...',
    image: require('assets/images/news/1.jpg'),
    title: 'Confident Coach',
    url: 'https://www.youtube.com/watch?v=9307BZv0oek',
  },
  {
      excerpt: 'Benni McCarthy unveiled as new Cape Town City coach..',
      image: require('assets/images/news/2.jpg'),
      title: 'Coach Benni',
      url: 'https://www.youtube.com/watch?v=PvUeY52kri0',
  },
  {
    excerpt: 'Cape Town City beat Wits 3-1 on aggregate in MTN 8 semi-final...',
    image: require('assets/images/news/5.jpg'),
    title: 'Victorious Cape',
    url: 'https://www.youtube.com/watch?v=Un6akDTBw60',
  },
];

export interface INewsDataProps {
  image: number;
  title: string;
}

export const news: INewsDataProps[] = [
  {
      image: Images.news1,
      title: 'Cape Town City FC down Wits to extend lead',
  },
  {
      image: Images.news2,
      title: 'Cape Town City dramatically grabbed a 3-2 win over Kaizer Chiefs',
  },
  {
      image: Images.news3,
      title: 'Newcomers Cape Town City make perfect start to life in the PSL',
  },
  {
      image: Images.news4,
      title: 'Cape Town City can still win the league, insists Ngoma',
  },
  {
      image: Images.news5,
      title: 'City host Wits in MTN8 semi-finals',
  },
  {
      image: Images.news6,
      title: 'Cape Town Crafted',
  },
];
