const UserService = require('../src/userService');
const UserRepository = require('../src/userRepository');
const EmailService = require('../src/emailService');

jest.mock('../src/userRepository');
jest.mock('../src/emailService');

describe('UserService Integration Tests (UserService + Repository + Email)', () => {
  let userService;
  let repo;
  let email;

  beforeEach(() => {
    repo = new UserRepository();
    email = new EmailService();
    userService = new UserService(repo, email);
  });

  test('registerUser berhasil: simpan user lalu kirim email', async () => {
    const mockUser = { id: 1, name: 'John', email: 'john@test.com' };
    repo.save.mockResolvedValue(mockUser);
    email.sendWelcomeEmail.mockResolvedValue(true);

    const result = await userService.registerUser('John', 'john@test.com');

    expect(result).toEqual(mockUser);
    expect(repo.save).toHaveBeenCalledWith({ name: 'John', email: 'john@test.com' });
    expect(email.sendWelcomeEmail).toHaveBeenCalledWith('john@test.com');
  });

  test('registerUser gagal jika name kosong', async () => {
    await expect(userService.registerUser('', 'a@b.com')).rejects.toThrow('Name cannot be empty');
    expect(repo.save).not.toHaveBeenCalled();
    expect(email.sendWelcomeEmail).not.toHaveBeenCalled();
  });

  test('registerUser gagal jika email invalid', async () => {
    await expect(userService.registerUser('John', 'invalid')).rejects.toThrow('Invalid email');
    expect(repo.save).not.toHaveBeenCalled();
  });

  test('email tidak dikirim jika penyimpanan gagal', async () => {
    repo.save.mockRejectedValue(new Error('DB down'));
    await expect(userService.registerUser('John', 'john@test.com')).rejects.toThrow('DB down');
    expect(email.sendWelcomeEmail).not.toHaveBeenCalled();
  });

  test('getUserById mengembalikan user', async () => {
    repo.findById.mockResolvedValue({ id: 1, name: 'John' });
    await expect(userService.getUserById(1)).resolves.toEqual({ id: 1, name: 'John' });
  });

  test('getUserById melempar error jika tidak ditemukan', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(userService.getUserById(99)).rejects.toThrow('User not found');
  });
});
