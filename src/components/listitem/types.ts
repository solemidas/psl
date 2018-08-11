/**
 * Provides type for the list item component
 */

export type DirectionType = 'row' | 'column';

export interface IListItemProps {
  backgroundColor?: string;
  direction?: DirectionType;
}

export interface IItemProps {
  padding?: number;
  size?: number;
}
