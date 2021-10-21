import { Input, Output, ItemWithResolvedData } from './main.d';
import ITEM_WITH_RESOLVED_DATA_FIELDS from "./constants/itemWithResolvedDataFields";
import ITEM_FIELDS from "./constants/itemFields";


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



