export function calculateNutritionCF(month, year) {
  // fake fetch
  // fake calculation

  if (month) {
    switch (month) {
      case "JAN":
        return 480;
      case "FEB":
        return 280;
      case "MAR":
        return 1960;
      case "APR":
        return 780;
      case "MAY":
        return 390;
      case "JUN":
        return 310;
      case "JUL":
        return 2260;
      case "AUG":
        return 690;
      case "SEP":
        return 390;
      case "OCT":
        return 420;
      case "NOV":
        return 1750;
      case "DEC":
        return 760;

      default:
        break;
    }
  } else if (year === "year") {
    return (
      480 + 280 + 1960 + 780 + 390 + 310 + 2260 + 690 + 390 + 420 + 1750 + 760
    );
  }
}
