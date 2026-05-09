export class EventColor {
  primary: string;
  secondary: string;
  hover: string;
  tertiary: string;
  barred: boolean;

  public static readonly RED = {
    primary: '#F20D5E',
    secondary: '#FDD6E4',
    hover: '#F3C0D4',
    tertiary: '#A1093F',
    barred: false
  }

  public static readonly GREEN = {
    primary: '#57A87F',
    secondary: '#cee6dc',
    hover: '#b2d8c7',
    tertiary: '#2b5440',
    barred: false
  }

  public static readonly YELLOW = {
    primary: '#ddab40',
    secondary: '#f4e7c7',
    hover: '#eddaa6',
    tertiary: '#6f561f',
    barred: false
  }

  public static readonly BLUE = {
    primary: '#3f82c2',
    secondary: '#c8dded',
    hover: '#a7c7e2',
    tertiary: '#1e4161',
    barred: false
  }

  public static readonly PURPLE = {
    primary: '#66417e',
    secondary: '#d6cddc',
    hover: '#beaec7',
    tertiary: '#33213f',
    barred: false
  }

  public static readonly GREY = {
    primary: '#716e6e',
    secondary: '#dddddd',
    hover: '#bdbdbd',
    tertiary: '#474747',
    barred: false
  }

  public static readonly EMPTY_RED = {
    primary: '#F20D5E',
    secondary: '#FFFFFF',
    hover: '#F3C0D4',
    tertiary: '#A1093F',
    barred: false
  }

  public static readonly EMPTY_GREEN = {
    primary: '#57A87F',
    secondary: '#FFFFFF',
    hover: '#b2d8c7',
    tertiary: '#2b5440',
    barred: false
  }

  public static readonly EMPTY_YELLOW = {
    primary: '#ddab40',
    secondary: '#FFFFFF',
    hover: '#eddaa6',
    tertiary: '#6f561f',
    barred: false
  }

  public static readonly EMPTY_BLUE = {
    primary: '#3f82c2',
    secondary: '#FFFFFF',
    hover: '#a7c7e2',
    tertiary: '#1e4161',
    barred: false
  }

  public static readonly EMPTY_PURPLE = {
    primary: '#66417e',
    secondary: '#FFFFFF',
    hover: '#beaec7',
    tertiary: '#33213f',
    barred: false
  }

  public static readonly BARRED_BLUE = {
    primary: '#3f82c2',
    secondary: '#FFFFFF',
    hover: '#a7c7e2',
    tertiary: '#1e4161',
    barred: true
  }

  public static readonly BARRED_GREY = {
    primary: '#716e6e',
    secondary: '#dddddd',
    hover: '#bdbdbd',
    tertiary: '#474747',
    barred: true
  }

  public static readonly BARRED_YELLOW = {
    primary: '#ddab40',
    secondary: '#f4e7c7',
    hover: '#eddaa6',
    tertiary: '#6f561f',
    barred: true
  }
}
