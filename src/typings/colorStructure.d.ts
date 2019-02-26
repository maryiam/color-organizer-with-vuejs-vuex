interface ColorStructure {
  id: string;
  title: string;
  color: string;
  rating: number;
  timestamp: string;
}


interface ColorsModuleState {
  list: ColorStructure[];
  orderBy: string;
}