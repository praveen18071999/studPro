'use server'
import Routes from '../../../routes';
// Note: This is a mock implementation. In a real-world scenario, you would integrate with your authentication service.

export async function login(email: string, password: string) {
  // Simulate API call
  try {
    const response = await fetch(Routes.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || 'Invalid email or password' };
    }

    const data = await response.json();

    if (data.access_token) {
      return { success: true, accessToken: data.access_token };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'An error occurred during login' };
  }
}

export async function signup(email: string, password: string, name: string) {
  // Simulate API call
  console.log(name);
  try {
    const response = await fetch(Routes.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || 'Invalid email or password' };
    }

    const data = await response.json();

    if (data.length) {
      return { success: true };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  }
  catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'An error occurred during login' };
  }

}

export async function googleLogin() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // In a real implementation, you would handle the Google OAuth flow
  return { success: true }
}

