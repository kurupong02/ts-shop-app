export type ProductProps = {
  _id: string;
  name: string;
  image: string[];
  price: number;
  description: string;
  tag: string[];
  specifications: string[];
};

export type TagProps = {
  label: string;
  value: string;
};
