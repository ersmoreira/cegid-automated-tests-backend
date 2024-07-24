import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/api/api-client';
import { testData } from '../data/test-data';

test.describe('Create user API test', () => {
  test('Create user with success and delete', async ({ request }) => {
    const apiClient = new ApiClient(request);
    const { statusCreate, id, name, gender, email, status } = await apiClient.createUser(
      testData.createUser,
    );
    expect(statusCreate).toBe(201);
    expect(name).toBe(testData.createUser.name);
    expect(gender).toBe(testData.createUser.gender);
    expect(email).toBe(testData.createUser.email);
    expect(status).toBe(testData.createUser.status);
    const statusDelete = await apiClient.deleteUser(id);
    expect(statusDelete).toBe(204);
  });
});
