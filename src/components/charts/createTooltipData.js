import { getMonthFullName } from "../../utils/changeMonthName";

const createTooltipData = (category, color, monthLabel, co2e) => {
  let month;
  if (monthLabel) {
    month = monthLabel !== "none" ? getMonthFullName(monthLabel) : monthLabel;
  }

  return {
    category,
    color,
    month,
    co2e,
  };
};

export default createTooltipData;
