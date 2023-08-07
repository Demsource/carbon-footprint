// Mock data imports
import {
  getAllCategoryCF,
  getHousingCF,
  getNutritionCF,
  getPurchasesCF,
  getTravelCF,
} from "../../data/carbon-footprint/getMockAllCF";
// End of mock data imports
import { getMonthFullName } from "../../utils/changeMonthName";

export const populatePieChartData = (
  chartData,
  { loading, error, gqlData }
) => {
  if (error) console.log(error);

  if (!loading && !error && gqlData) {
    const getGQLCategoryCF_Year = (categoryLabel) =>
      gqlData[categoryLabel].reduce(
        (sum, monthData) => sum + monthData.co2e,
        0
      );
    const getGQLAllCategoryCF_Year = chartData
      .map((category) => category.id)
      .reduce(
        (categorySum, categoryLabel) =>
          categorySum + getGQLCategoryCF_Year(categoryLabel),
        0
      );

    chartData.forEach((category) => {
      category.co2e = getGQLCategoryCF_Year(category.id);
      category.value = Math.round(
        (category.co2e * 100) / getGQLAllCategoryCF_Year
      );
    });

    return { totalCF: getGQLAllCategoryCF_Year };
  } else {
    // functions for populating mock data
    // should populate gql data
    // with already fetched data from data sources and recalculated CF
    // ultimately removing this else block from here
    chartData.forEach((category) => {
      category.co2e = getTempMockCategoryCF(category.id, undefined, "year");
      category.value = Math.round(
        (category.co2e * 100) / getAllCategoryCF(undefined, "year")
      );
    });
    return { totalCF: getAllCategoryCF(undefined, "year") };
  }
};

export const populateLineChartData = (
  chartData,
  { loading, error, gqlData }
) => {
  if (error) console.log(error);

  if (!loading && !error && gqlData) {
    chartData.forEach((category) => {
      category.data.forEach((monthData) => {
        monthData.y = gqlData[category.id].find(
          (monthGQLData) => monthGQLData.month === getMonthFullName(monthData.x)
        ).co2e;
      });
    });
  } else {
    // functions for populating mock data
    // should populate gql data
    // with already fetched data from data sources and recalculated CF
    // ultimately removing this else block from here
    chartData.forEach((category) => {
      category.data.forEach((monthData) => {
        monthData.y = getTempMockCategoryCF(category.id, monthData.x);
      });
    });
  }
};

export const populateBarChartData = (
  chartData,
  { loading, error, gqlData }
) => {
  if (error) console.log(error);

  if (!loading && !error && gqlData) {
    chartData.forEach((monthData) => {
      monthData.AllCategory = gqlData[getMonthFullName(monthData.Month)].reduce(
        (sum, categoryCFData) => sum + categoryCFData.co2e,
        0
      );
    });
  } else {
    // functions for populating mock data
    // should populate gql data
    // with already fetched data from data sources and recalculated CF
    // ultimately removing this else block from here
    chartData.forEach((monthData) => {
      monthData.AllCategory = getAllCategoryCF(monthData.Month);
    });
  }
};

// Mock data functions ( for else blocks )
function getTempMockCategoryCF(categoryLabel, month, year) {
  switch (categoryLabel) {
    case "Housing":
      return getHousingCF(month, year);
    case "Nutrition":
      return getNutritionCF(month, year);
    case "Purchases":
      return getPurchasesCF(month, year);
    case "Travel":
      return getTravelCF(month, year);

    default:
      break;
  }
}
// End of mock data functions

export const populatePieChartData_OffsetCF = (
  chartData,
  { loadings, errors, gqlData }
) => {
  const currentErrors = errors.filter((error) => error);
  const haveErrors = currentErrors.length;
  if (haveErrors) console.log({ currentErrors });

  const currentLoadings = loadings.filter((loading) => loading);
  const haveLoadings = currentLoadings.length;

  const havingMonthData =
    gqlData.month.prevMonth && gqlData.month.beforePrevMonth;
  const havingYearData = gqlData.year.prevYear && gqlData.year.beforePrevYear;

  if (!haveLoadings && !haveErrors && (havingMonthData || havingYearData)) {
    chartData.forEach((category) => {
      const gqlDataArg = havingMonthData ? gqlData.month : gqlData.year;
      const timing = havingMonthData ? "Month" : "Year";

      const co2e = calculateOffset_CategoryCF(
        category,
        gqlDataArg,
        timing
      ).co2e;
      const value = calculateOffset_CategoryCF(
        category,
        gqlDataArg,
        timing
      ).value;

      category.co2e = -co2e;
      category.value = value > 0 ? value : 0;
    });
  }
};

export const populateProgressFillBarData = ({ month, year }) => {
  if (month || year) {
    const timing = month ? "Month" : "Year";
    const timingData = month ? month : year;

    const categories = ["Housing", "Nutrition", "Purchases", "Travel"];
    const goals = { total: 0 };
    let offsets = { total: 0 };
    categories.forEach((category) => {
      goals[category] =
        timingData?.["prev" + timing]?.user?.userGoals?.[0]?.[
          `offsetGoal${category}CF`
        ];
      const offset = calculateOffset_CategoryCF(
        { label: category },
        timingData,
        timing
      ).value;
      offsets[category] =
        offset < 0 ? 0 : offset > goals[category] ? goals[category] : offset;
      goals.total += goals[category];
      offsets.total += offsets[category];
    });
    return Math.round((offsets.total * 100) / goals.total);
  }
};

function calculateOffset_CategoryCF(categoryLabel, gqlData, timing) {
  const categoryOffsetData = {
    co2e: 0,
    value: 0,
  };

  if (timing === "Month") {
    const categoryPrevMonthData =
      gqlData.prevMonth?.user?.oneYearData?.[0]?.singleMonthData?.filter(
        (categoryPrevMonthData) => {
          return categoryPrevMonthData.category === categoryLabel.label;
        }
      )?.[0];

    const categoryBeforePrevMonthData =
      gqlData.beforePrevMonth?.user?.oneYearData?.[0]?.singleMonthData?.filter(
        (categoryBeforePrevMonthData) => {
          return categoryBeforePrevMonthData.category === categoryLabel.label;
        }
      )?.[0];

    categoryOffsetData.co2e =
      categoryBeforePrevMonthData?.co2e - categoryPrevMonthData?.co2e;

    categoryOffsetData.value = Math.round(
      (categoryOffsetData?.co2e * 100) / categoryBeforePrevMonthData?.co2e
    );
  } else {
    const categoryPrevYearDataCO2Sum =
      gqlData.prevYear?.user?.oneYearData?.[0]?.[categoryLabel.label]?.reduce(
        (totalCF, monthData) => totalCF + monthData.co2e,
        0
      );

    const categoryBeforePrevYearDataCO2Sum =
      gqlData.beforePrevYear?.user?.oneYearData?.[0]?.[
        categoryLabel.label
      ]?.reduce((totalCF, monthData) => totalCF + monthData.co2e, 0);

    categoryOffsetData.co2e =
      categoryBeforePrevYearDataCO2Sum - categoryPrevYearDataCO2Sum;

    categoryOffsetData.value = Math.round(
      (categoryOffsetData?.co2e * 100) / categoryBeforePrevYearDataCO2Sum
    );
  }

  return categoryOffsetData;
}
