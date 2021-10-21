import * as main from "../main";
import { Item, Input, Output, ItemWithResolvedData } from '../main.d';
import ITEM_WITH_RESOLVED_DATA_FIELDS from "../constants/itemWithResolvedDataFields";
import ITEM_FIELDS from "../constants/itemFields";

const item1: Item = {
  category: "cat_2",
  data: () => new Promise((resolve) => {
    setTimeout(() => resolve("This item number 2 from category 2"), 1000)
  }),
};

const input: Input = [item1, ];

main.main(input);
