// fetchApi.ts

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  data: User[];
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    data.data.forEach((user: User) => {
      console.log(`${user.first_name} ${user.last_name} - ${user.email}`);
    });

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();
