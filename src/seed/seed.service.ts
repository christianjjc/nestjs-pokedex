import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokRepsonse } from './interfaces/pokemon-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  public async executeSeed() {
    const { data } = await this.axios.get<PokRepsonse>('https://pokeapi.co/api/v2/pokemon?limit=5');
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = Number(segments[segments.length - 2]);
      console.log({ name, no });
    });
    return data.results;
  }
}
