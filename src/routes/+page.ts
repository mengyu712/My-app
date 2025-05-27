import { fetchItem, getUniquePropertyLabels } from '@digitalculture/ochre-sdk';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async () => {
  const uuid = '240e6e06-9d05-4210-aa83-f4190639886d';

  const {item, error} = await fetchItem(uuid, 'set', 'spatialUnit');
  if (error !== null) {
    throw new Error(error);
  }
  const items = item.items; 
  const propertyLabels = getUniquePropertyLabels(items[0].properties);
  console.log(propertyLabels);
  return { items, propertyLabels };


};