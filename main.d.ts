import ITEM_FIELDS from './constants/itemFields';
import ITEM_WITH_RESOLVED_DATA_FIELDS from './constants/itemWithResolvedDataFields';

export type ItemNumber = number; // TODO should restricted?
export type CategoryNumber = number; // TODO should restricted?
export type Category = `cat_${CategoryNumber}`;
export type Data = () => Promise<ResolvedData>;

export type ResolvedData = `This item number ${ItemNumber} from category ${CategoryNumber}`
export type Item = { [ITEM_FIELDS.CATEGORY]: Category, [ITEM_FIELDS.DATA]: Data };

export type ItemWithResolvedData = {
  [ITEM_WITH_RESOLVED_DATA_FIELDS.CATEGORY]: Category,
  [ITEM_WITH_RESOLVED_DATA_FIELDS.RESOLVED_DATA]: ResolvedData
};

export type Input = Array<Item>;
export type Output = Record<Category, Array<ResolvedData>>;
