declare module "react-window";
declare module "react-select";

  interface ICountry {
    name: string
    flag: string
    nativeName: string;
    population: string;
    latlng: object;
  }

  interface IGrpahData {
    year: number
    value:number
  }

  interface ISelectedCountry {
    latlng: any
    name: string
  }

  interface AppState {
    countries: ICountry[]
    graphData: IGrpahData[]
    selectedCountry: any
    showGraphDialog: boolean,
    searchResults: ICountry[],
  }
  
  // type AppState = {
  //   app: IApp[]
  // }
  
  type AppAction = {
    type: string
    payload: IApp
  }
  
  type DispatchType = (args: AppAction) => AppAction
  