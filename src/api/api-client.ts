import { APIRequestContext } from 'playwright';
import { endpoints } from '../../data/endpoints';
import * as process from 'node:process';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createUser(data: object): Promise<{
    statusCreate: number;
    id: number;
    name: string;
    gender: string;
    email: string;
    status: string;
  }> {
    const response = await this.request.post(endpoints.users, {
      data,
      headers: {
        Authorization: `Bearer ${process.env?.['TOKEN']}`,
      },
    });
    const resp = await response.json();
    return {
      statusCreate: response.status(),
      id: resp.id,
      name: resp.name,
      email: resp.email,
      gender: resp.gender,
      status: resp.status,
    };
  }

  async deleteUser(id: number): Promise<number> {
    const response = await this.request.delete(`${endpoints.users}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env?.['TOKEN']}`,
      },
    });
    return response.status();
  }
}
