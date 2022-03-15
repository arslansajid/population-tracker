declare module "react-window";
declare module "react-select";

interface ICountryName {
  common: string;
}
interface ICountryFlag {
  svg: string;
  png: string;
}
interface ICountry {
  name: ICountryName;
  flags: ICountryFlag;
  nativeName: string;
  population: string;
  latlng: object;
}

interface IGrpahData {
  year: number;
  value: number;
}

interface ISelectedCountry {
  latlng: any;
  name: ICountryName;
}

interface AppState {
  countries: ICountry[];
  graphData: IGrpahData[];
  selectedCountry: any;
  showGraphDialog: boolean;
  searchResults: ICountry[];
}

type AppAction = {
  type: string;
  payload: IApp;
};

type DispatchType = (args: AppAction) => AppAction;
