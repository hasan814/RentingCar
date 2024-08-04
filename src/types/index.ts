export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  setManufacturer: (manufacturer: string) => void;
  manufacturer: string;
}
