import axios from 'axios';
import { USERS_API_URL } from '@/base/constants/enviroment';
import type { User } from '@/base/types/user';
import type { Response } from '@/base/types/response';

const getUsers = async (page: number): Promise<Response> => {
  try {
    const {
      data: { results, info },
    } = await axios.get(`${USERS_API_URL}?page=${page}`);
    const users = results.map((user: User) => ({
      id: user.id,
      name: user.name,
      image: user.image,
      status: user.status,
      gender: user.gender,
    }));
    return { info, users };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default getUsers;
