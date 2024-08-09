import CardDetails from '../components/modules/CardDetails';
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
  setManufacturer: (manufacturer: string) => void;
  manufacturer: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}


export interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps
}