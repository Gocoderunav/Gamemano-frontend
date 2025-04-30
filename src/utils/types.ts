// src/utils/types.ts

export type FilterProps = {
    id: string;
    text: string;
  };
  
  export type RatingFilterProps = {
    id: string;
    img: any; // ya StaticImageData bhi kar sakte ho agar strictly typing karni ho
    rating: number;
  };
  