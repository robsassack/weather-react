export function fahrenheitToCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5 / 9).toFixed(0);
}
export function mphToKmHr(mph: number) {
  return (mph * 1.609).toFixed(0);
}
export function dayOrNight(time: number, sunrise: number, sunset: number) {
  const currentTime = time / 1000;
  if (currentTime >= sunrise && currentTime <= sunset) {
    return 'day';
  }
  return 'night';
}
export function windDirection(degrees: number) {
  if (degrees >= 337.5 || degrees <= 22.5) {
    return 'N';
  } if (degrees > 22.5 && degrees <= 67.5) {
    return 'NE';
  } if (degrees > 67.5 && degrees <= 112.5) {
    return 'E';
  } if (degrees > 112.5 && degrees <= 157.5) {
    return 'SE';
  } if (degrees > 157.5 && degrees <= 202.5) {
    return 'S';
  } if (degrees > 202.5 && degrees <= 247.5) {
    return 'SW';
  } if (degrees > 247.5 && degrees <= 292.5) {
    return 'W';
  } if (degrees > 292.5 && degrees <= 337.5) {
    return 'NW';
  }
  return '';
}
