import { AdCategoryModel } from './AdCategory';
import { AdSubCategoryModel } from './AdSubCategory';

export interface AdModel {
  id: string;
  title: string;
  description: string;
  image: string;
  adCategoryID: string;
  adCategory: AdCategoryModel;
  adSubCategoryID: string;
  adSubCategory: AdSubCategoryModel;
  createdAt: string;
  updatedAt: string;
}
