import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
