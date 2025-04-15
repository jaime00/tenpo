import axios from 'axios';
import { USERS_API_URL } from '@/base/constants/enviroment';
import type { User } from '@/base/types/user';

const getUsers = async (page: number): Promise<User[]> => {
  try {
    const {
      data: { results },
    } = await axios.get(`${USERS_API_URL}?page=${page}`);
    return results.map((user: User) => ({
      id: user.id,
      name: user.name,
      image: user.image,
      status: user.status,
      gender: user.gender,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default getUsers;
