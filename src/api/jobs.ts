import axios from 'axios';
import {snakeToCamel, camelToSnake} from 'utils/index';

interface BasicJobResponse {
  id: string;
  type: string;
  url: string;
  company: string;
  location: string;
  title: string;
  description: string;
  
};

interface JobResponse extends BasicJobResponse {
  created_at: string;
  company_url: string;
  how_to_apply: string;
  company_logo: string;
}

export interface FormattedJobResponse extends BasicJobResponse {
  createdAt: string;
  companyUrl: string;
  howToApply: string;
  companyLogo: string;
  [key: string]: string;
}

export interface Params {
  description: string;
  location: string;
  lat: string;
  long: string;
  fullTime: string;
  [key: string]: string;
}
export const fetchJobsApi = async (params: Params | undefined): Promise<FormattedJobResponse> => {
  let url = '/positions.json';
  if(params) {
    const queryParams = Object.keys(params)
  .reduce((acc: string[], current: string) => {
    acc.concat(`${camelToSnake(current)}=${params[current]}`)
    return acc;
  }, [])
  .join('&');
  url = url.concat(`?${queryParams}`);
  }
  const response = await axios.get(url);

  const formattedJobsData = response.data.map((element: JobResponse) => {
    const formattedData = {} as FormattedJobResponse;
    for (const [key, value] of  Object.entries(element)) {
      formattedData[snakeToCamel(key)] = value;
    }
  
    return formattedData;
  });

  return formattedJobsData;
}