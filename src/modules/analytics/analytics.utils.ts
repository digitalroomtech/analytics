import { ANIMAL_POLITICO_CATEGORIES, VANGUARDIA_CATEGORIES } from '../../utils/constants';

export const getSections = (
  url: string,
  categories: { section: string; subsections: string[] }[],
): {
  section: string;
  subsection: string;
} => {
  const sectionObject = categories.find(
    (category) => url.includes(`/${category.section}/`) || url.includes(`/${category.section}`),
  );

  if (sectionObject) {
    const subsection = sectionObject.subsections.find(
      (s) => url.includes(`/${s}/`) || url.includes(`/${s}`),
    );

    return {
      section: sectionObject.section,
      subsection: subsection || '',
    };
  }

  return {
    section: 'home',
    subsection: '',
  };
};

export const getUrlParams = (url: string) => {
  const data = new URL(url);
  const hashParams: { [key: string]: string }[] = [];
  const queryParams: { [key: string]: string }[] = [];
  if (data.hash) {
    const searchParams = new URLSearchParams(data.hash.replace('#', ''));

    for (const param of searchParams) {
      const [key, value] = param;
      hashParams.push({ key, value });
    }
  }

  if (data.searchParams) {
    for (const param of data.searchParams) {
      const [key, value] = param;
      queryParams.push({ key, value });
    }
  }

  return {
    hashParams: hashParams,
    queryParams: queryParams,
  };
};

export const getOriginalUrl = (url: string) => {
  const data = new URL(url);
  return `${data.origin}${data.pathname && data.pathname !== '/' ? data.pathname : ''}`;
};

export const getCategoriesByTenant = (tenantId: string) => {
  console.log({ tenantId });
  if (tenantId === '65b39e5af17e852e77abc149') {
    return VANGUARDIA_CATEGORIES;
  } else if (tenantId === '65f47446af45c4f2fa1d5a5c') {
    return ANIMAL_POLITICO_CATEGORIES;
  }
  return [];
};
