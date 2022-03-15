
import { COUNTRIES_API_END_POINT } from '../config';
import axios from "axios";

export const getAllCountries = async () => {
  try {
    const res = await axios.get(COUNTRIES_API_END_POINT);
    return res.data;
  } catch (err) {
    throw err;
  }
};
