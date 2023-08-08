import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_GOAL, UPDATE_USER_GOAL } from "../utils/gqlQueries";
import { Accordion, Heading } from "@chakra-ui/react";
import CategoryAccordionItem from "./CategoryAccordionItem";
import { useCategoryNames } from "../AppContext";

const ChooseCFOffset = ({ timing, waitList }) => {
  const categoryNames = useCategoryNames();

  const fakeGoalDate = {
    Month: "2023-08-31",
    Year: "2023-12-31",
  };

  const {
    loading: loadingUserGoal,
    error: errorUserGoal,
    data: userGoal,
  } = useQuery(GET_USER_GOAL, {
    variables: {
      user: {
        id: "clkk8ue3kdzx10ataqxn5zidx",
      },
      date: fakeGoalDate[timing],
      timing,
    },
  });
  if (errorUserGoal) console.log(errorUserGoal);

  const [
    updateUserGoals,
    {
      loading: loadingUpdateUserGoal,
      error: errorUpdateUserGoal,
      data: updateUserGoal_res,
    },
  ] = useMutation(UPDATE_USER_GOAL);
  if (errorUpdateUserGoal) console.log(errorUpdateUserGoal);
  if (!loadingUpdateUserGoal && updateUserGoal_res)
    console.log("%cSaved", "color:green");

  return (
    <>
      <Heading as="h3" fontFamily="inter" fontSize="24px" mt="36px" ml="10px">
        Carbon footprint to reduce
      </Heading>
      <Accordion
        allowToggle
        defaultIndex={[0]}
        fontSize="20px"
        mt="30px"
        mr="10px"
      >
        {categoryNames?.map((categoryName, i) => {
          return (
            <CategoryAccordionItem
              key={i}
              timing={timing}
              categoryName={categoryName}
              categoryCFReduceValue={
                (!loadingUserGoal &&
                  waitList.loadings.filter((waitItem) => waitItem).length ===
                    0 &&
                  waitList.errors.filter((waitItem) => !!waitItem).length ===
                    0 &&
                  userGoal?.userGoals?.[0]?.[`offsetGoal${categoryName}CF`]) ||
                0
              }
              saveCategoryCFReduceValue={updateUserGoals}
              timingDate={
                timing === "Month" ? fakeGoalDate.Month : fakeGoalDate.Year
              }
              mb="20px"
            />
          );
        })}
      </Accordion>
    </>
  );
};

export default ChooseCFOffset;
