export const credentials = {
  standard_user: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked_out_user: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  admin: {
    username: process.env.ADMIN_USER || '',
    password: process.env.ADMIN_PASS || '',
  }
};
