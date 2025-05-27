import { fetchItem } from '@digitalculture/ochre-sdk';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params }: { params: { uuid: string } }) => {
  const { uuid } = params;
  const { item, error } = await fetchItem(uuid, 'spatialUnit');
  if (error !== null) {
    throw new Error(error);
  }
  console.log(item);
  return { item };
};