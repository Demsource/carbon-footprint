import { calculateHousingCF } from "./getMockHousingCF";
import { calculateNutritionCF } from "./getMockNutritionCF";
import { calculatePurchasesCF } from "./getMockPurchasesCF";
import { calculateTravelCF } from "./getMockTravelCF";

export function getHousingCF(month, year) {
  const data = calculateHousingCF(month, year);
  return data;
}

export function getNutritionCF(month, year) {
  const data = calculateNutritionCF(month, year);
  return data;
}

export function getPurchasesCF(month, year) {
  const data = calculatePurchasesCF(month, year);
  return data;
}

export function getTravelCF(month, year) {
  const data = calculateTravelCF(month, year);
  return data;
}

export function getAllCategoryCF(month, year) {
  if (month) {
    return (
      getHousingCF(month) +
      getNutritionCF(month) +
      getPurchasesCF(month) +
      getTravelCF(month)
    );
  } else if (year === "year") {
    return (
      getHousingCF(undefined, "year") +
      getNutritionCF(undefined, "year") +
      getPurchasesCF(undefined, "year") +
      getTravelCF(undefined, "year")
    );
  }
}
