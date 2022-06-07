export interface ListItem {
  accessibility: string;
  attractions: string[];
  author: string;
  bicycle: string;
  bicycle_desc: string;
  carmoving: string;
  cars4x4: string;
  cars4x4_desc: string;
  checkin: string[];
  coordinates: string;
  date: string;
  desc: string;
  difficulty: string;
  directions: string;
  dog: string;
  dog_desc: string;
  family: string;
  family_desc: string;
  gallery: {id: string; thumb: string; title: string}[];
  hours: string;
  id: string;
  menu_order: string;
  parent: string;
  parking: string;
  shaded: string;
  slug: string;
  status: string;
  title: {rendered: string};
  track_type: string;
  type: string;
  waze: string;
}

const baseUrl = 'http://travelfun.co.il';

export const getList = async (): Promise<ListItem[]> => {
  return (
    await fetch(`${baseUrl}/wp-json/wp/v2/track`, {
      headers: {'Content-Type': 'application/json'},
    })
  ).json();
};
