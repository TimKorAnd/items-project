import { Item, Input, Output, ItemWithResolvedData } from './main.d';
import ITEM_WITH_RESOLVED_DATA_FIELDS from "./constants/itemWithResolvedDataFields";
import ITEM_FIELDS from "./constants/itemFields";


const item1: Item = {
  category: "cat_1",
  data: () => new Promise((resolve) => {
    setTimeout(() => resolve("This item number 1 from category 1"), 1000)
  }),
};

const item2: Item = {
  category: "cat_1",
  data: () => new Promise((resolve) => {
    setTimeout(() => resolve("This item number 2 from category 1"), 1000)
  }),
};

const item3: Item = {
  category: "cat_2",
  data: () => new Promise((resolve) => {
    setTimeout(() => resolve("This item number 1 from category 2"), 1000)
  }),
};

const item4: Item = {
  category: "cat_2",
  data: () => new Promise((resolve) => {
    setTimeout(() => resolve("This item number 2 from category 2"), 1000)
  }),
};

const input: Input = [item1, item2, item3, item4];

const output: Output = {
  cat_1: ["This item number 1 from category 1", "This item number 2 from category 1"],
  cat_2: ["This item number 1 from category 2", "This item number 2 from category 2"],
}

export const getInputsWithResolvedData = async (input: Input): Promise<ItemWithResolvedData[]> => {
  return await Promise.all(input.map(async (item) => ({
    [ITEM_WITH_RESOLVED_DATA_FIELDS.CATEGORY]: item[ITEM_FIELDS.CATEGORY],
    [ITEM_WITH_RESOLVED_DATA_FIELDS.RESOLVED_DATA]: await item[ITEM_FIELDS.DATA]()
  })));
}

export const getOutput = (inputsWithResolvedData: ItemWithResolvedData[]): Output => {
  const output: Output = {};
  return inputsWithResolvedData.reduce((output, item) => {
    if (!output[item[ITEM_WITH_RESOLVED_DATA_FIELDS.CATEGORY]]) output[item[ITEM_WITH_RESOLVED_DATA_FIELDS.CATEGORY]] = [];
    output[item[ITEM_WITH_RESOLVED_DATA_FIELDS.CATEGORY]].push(item[ITEM_WITH_RESOLVED_DATA_FIELDS.RESOLVED_DATA]);
    return output;
  }, output);
}

export const main = async (input: Input): Promise<Output> => {
  const inputsWithResolvedData: ItemWithResolvedData[] = await getInputsWithResolvedData(input);
  return getOutput(inputsWithResolvedData);
}


console.table(output);
main(input).then(output => console.table(output));


