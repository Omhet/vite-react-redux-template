import axios from 'axios';
import { config } from '../config';

axios.defaults.baseURL = config.VITE_API_DOMAIN;
