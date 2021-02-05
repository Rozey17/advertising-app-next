import { AdModel } from './Ad';
import { AdCategoryModel } from './AdCategory';

export interface AdSubCategoryModel {
  id: string;
  name: string;
  adCategoryID: string;
  adCategory?: AdCategoryModel;
  ads: [AdModel];
  createdAt: string;
  updatedAt: string;
}
