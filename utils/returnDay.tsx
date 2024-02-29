export const DayOfWeek = (dayInt: number) => {
  switch (dayInt) {
    case 0:
      return 'Sun'
      break;
    case 1:
      return 'Mon'
      break;
    case 2:
      return 'Tue'
      break;
    case 3:
      return 'Wen'
      break;
    case 4:
      return 'Thu'
      break;
    case 5:
      return 'Fri'
      break;
    case 6:
      return 'Sat'
      break;
  }
}