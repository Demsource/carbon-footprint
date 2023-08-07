export const processTipsBarGQLData = (data) => {
  return data
    ? data
        ?.map((tipData) => tipData?.content)
        .filter((tip) => typeof tip === "string" && tip.length)
    : [];
};

export const processTipsPageGQLData = (data) => {
  const categorizedTips = {
    Housing: [],
    Nutrition: [],
    Purchases: [],
    Travel: [],
  };

  for (const category in data) {
    const categoryData = data[category];

    if (Array.isArray(categoryData) && categoryData.length) {
      categorizedTips[category] = categoryData
        .map((tipData) => tipData?.content)
        .filter((tip) => typeof tip === "string" && tip.length);
    }
  }

  return categorizedTips;
};
