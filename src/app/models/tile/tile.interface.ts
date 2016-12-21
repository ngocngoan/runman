export interface ITile{

  /** Coordinates on the grid */
  index: Index;
  /** Tile styles */
  styles: TileStyle;
  /** Determine if a tile is a wall */
  walkable: boolean;
  /** A* stuff */
  search: Search;
  /** sprite src */
  sprite: string;
}

export interface Index {
  x: number;
  y: number;
}

export interface Search {
  cost: number;
  heuristic: number;
  total: number;
}

export interface TileStyle {
  width?;
  height?;
  left?;
  top?;
  backgroundColor?;
  backgroundImage?;
  backgroundPosition?;
  backgroundSize?;
  margin?;
}
