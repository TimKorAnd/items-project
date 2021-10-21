import { main, getOutput, getInputsWithResolvedData } from "../main";
import { Item, Input, Output, ItemWithResolvedData } from '../main.d';

import ITEM_WITH_RESOLVED_DATA_FIELDS from "../constants/itemWithResolvedDataFields";
import ITEM_FIELDS from "../constants/itemFields";


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
describe('lets test main', () => {
  test('main return Promise', () => {
    return main(input).then(data => {
      expect(data).toStrictEqual(output);
    })
  });
})

