import { CATEGORIES } from '../../utils/constants';

export const getSections = (url: string): { section: string; subsection: string } => {
  const sectionObject = CATEGORIES.find(
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
    section: '',
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
  return `${data.origin}${data.pathname ? data.pathname : ''}`;
};
