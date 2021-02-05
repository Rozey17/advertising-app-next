import { AdModel } from './Ad';
import { AdSubCategoryModel } from './AdSubCategory';

export interface AdCategoryModel {
  id: string;
  name: string;
  ads?: [AdModel];
  subCategories?: [AdSubCategoryModel];
  createdAt: string;
  updatedAt: string;
}
