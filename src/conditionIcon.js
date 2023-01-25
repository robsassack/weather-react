export default function conditionIcon(condition, time) {
  const owmString = `wi-owm-${time}-${condition}`;
  switch (owmString) {
    case 'wi-owm-day-200': return 'wi-day-thunderstorm';
    case 'wi-owm-day-201': return 'wi-day-thunderstorm';
    case 'wi-owm-day-202': return 'wi-day-thunderstorm';
    case 'wi-owm-day-210': return 'wi-day-lightning';
    case 'wi-owm-day-211': return 'wi-day-lightning';
    case 'wi-owm-day-212': return 'wi-day-lightning';
    case 'wi-owm-day-221': return 'wi-day-lightning';
    case 'wi-owm-day-230': return 'wi-day-thunderstorm';
    case 'wi-owm-day-231': return 'wi-day-thunderstorm';
    case 'wi-owm-day-232': return 'wi-day-thunderstorm';
    case 'wi-owm-day-300': return 'wi-day-sprinkle';
    case 'wi-owm-day-301': return 'wi-day-sprinkle';
    case 'wi-owm-day-302': return 'wi-day-rain';
    case 'wi-owm-day-310': return 'wi-day-rain';
    case 'wi-owm-day-311': return 'wi-day-rain';
    case 'wi-owm-day-312': return 'wi-day-rain';
    case 'wi-owm-day-313': return 'wi-day-rain';
    case 'wi-owm-day-314': return 'wi-day-rain';
    case 'wi-owm-day-321': return 'wi-day-sprinkle';
    case 'wi-owm-day-500': return 'wi-day-sprinkle';
    case 'wi-owm-day-501': return 'wi-day-rain';
    case 'wi-owm-day-502': return 'wi-day-rain';
    case 'wi-owm-day-503': return 'wi-day-rain';
    case 'wi-owm-day-504': return 'wi-day-rain';
    case 'wi-owm-day-511': return 'wi-day-rain-mix';
    case 'wi-owm-day-520': return 'wi-day-showers';
    case 'wi-owm-day-521': return 'wi-day-showers';
    case 'wi-owm-day-522': return 'wi-day-showers';
    case 'wi-owm-day-531': return 'wi-day-storm-showers';
    case 'wi-owm-day-600': return 'wi-day-snow';
    case 'wi-owm-day-601': return 'wi-day-sleet';
    case 'wi-owm-day-602': return 'wi-day-snow';
    case 'wi-owm-day-611': return 'wi-day-rain-mix';
    case 'wi-owm-day-612': return 'wi-day-rain-mix';
    case 'wi-owm-day-615': return 'wi-day-rain-mix';
    case 'wi-owm-day-616': return 'wi-day-rain-mix';
    case 'wi-owm-day-620': return 'wi-day-rain-mix';
    case 'wi-owm-day-621': return 'wi-day-snow';
    case 'wi-owm-day-622': return 'wi-day-snow';
    case 'wi-owm-day-701': return 'wi-day-showers';
    case 'wi-owm-day-711': return 'wi-smoke';
    case 'wi-owm-day-721': return 'wi-day-haze';
    case 'wi-owm-day-731': return 'wi-dust';
    case 'wi-owm-day-741': return 'wi-day-fog';
    case 'wi-owm-day-761': return 'wi-dust';
    case 'wi-owm-day-762': return 'wi-dust';
    case 'wi-owm-day-781': return 'wi-tornado';
    case 'wi-owm-day-800': return 'wi-day-sunny';
    case 'wi-owm-day-801': return 'wi-day-cloudy-gusts';
    case 'wi-owm-day-802': return 'wi-day-cloudy-gusts';
    case 'wi-owm-day-803': return 'wi-day-cloudy-gusts';
    case 'wi-owm-day-804': return 'wi-day-sunny-overcast';
    case 'wi-owm-day-900': return 'wi-tornado';
    case 'wi-owm-day-902': return 'wi-hurricane';
    case 'wi-owm-day-903': return 'wi-snowflake-cold';
    case 'wi-owm-day-904': return 'wi-hot';
    case 'wi-owm-day-906': return 'wi-day-hail';
    case 'wi-owm-day-957': return 'wi-strong-wind';
    case 'wi-owm-night-200': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-201': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-202': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-210': return 'wi-night-alt-lightning';
    case 'wi-owm-night-211': return 'wi-night-alt-lightning';
    case 'wi-owm-night-212': return 'wi-night-alt-lightning';
    case 'wi-owm-night-221': return 'wi-night-alt-lightning';
    case 'wi-owm-night-230': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-231': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-232': return 'wi-night-alt-thunderstorm';
    case 'wi-owm-night-300': return 'wi-night-alt-sprinkle';
    case 'wi-owm-night-301': return 'wi-night-alt-sprinkle';
    case 'wi-owm-night-302': return 'wi-night-alt-rain';
    case 'wi-owm-night-310': return 'wi-night-alt-rain';
    case 'wi-owm-night-311': return 'wi-night-alt-rain';
    case 'wi-owm-night-312': return 'wi-night-alt-rain';
    case 'wi-owm-night-313': return 'wi-night-alt-rain';
    case 'wi-owm-night-314': return 'wi-night-alt-rain';
    case 'wi-owm-night-321': return 'wi-night-alt-sprinkle';
    case 'wi-owm-night-500': return 'wi-night-alt-sprinkle';
    case 'wi-owm-night-501': return 'wi-night-alt-rain';
    case 'wi-owm-night-502': return 'wi-night-alt-rain';
    case 'wi-owm-night-503': return 'wi-night-alt-rain';
    case 'wi-owm-night-504': return 'wi-night-alt-rain';
    case 'wi-owm-night-511': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-520': return 'wi-night-alt-showers';
    case 'wi-owm-night-521': return 'wi-night-alt-showers';
    case 'wi-owm-night-522': return 'wi-night-alt-showers';
    case 'wi-owm-night-531': return 'wi-night-alt-storm-showers';
    case 'wi-owm-night-600': return 'wi-night-alt-snow';
    case 'wi-owm-night-601': return 'wi-night-alt-sleet';
    case 'wi-owm-night-602': return 'wi-night-alt-snow';
    case 'wi-owm-night-611': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-612': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-615': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-616': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-620': return 'wi-night-alt-rain-mix';
    case 'wi-owm-night-621': return 'wi-night-alt-snow';
    case 'wi-owm-night-622': return 'wi-night-alt-snow';
    case 'wi-owm-night-701': return 'wi-night-alt-showers';
    case 'wi-owm-night-711': return 'wi-smoke';
    case 'wi-owm-night-721': return 'wi-day-haze';
    case 'wi-owm-night-731': return 'wi-dust';
    case 'wi-owm-night-741': return 'wi-night-fog';
    case 'wi-owm-night-761': return 'wi-dust';
    case 'wi-owm-night-762': return 'wi-dust';
    case 'wi-owm-night-781': return 'wi-tornado';
    case 'wi-owm-night-800': return 'wi-night-clear';
    case 'wi-owm-night-801': return 'wi-night-alt-cloudy-gusts';
    case 'wi-owm-night-802': return 'wi-night-alt-cloudy-gusts';
    case 'wi-owm-night-803': return 'wi-night-alt-cloudy-gusts';
    case 'wi-owm-night-804': return 'wi-night-alt-cloudy';
    case 'wi-owm-night-900': return 'wi-tornado';
    case 'wi-owm-night-902': return 'wi-hurricane';
    case 'wi-owm-night-903': return 'wi-snowflake-cold';
    case 'wi-owm-night-904': return 'wi-hot';
    case 'wi-owm-night-906': return 'wi-night-alt-hail';
    case 'wi-owm-night-957': return 'wi-strong-wind';
    default:
      if (time === 'day') {
        return 'wi-day-sunny';
      }
      return 'wi-night-clear';
  }
}
