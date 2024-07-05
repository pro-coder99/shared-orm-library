// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const SettingSchema = new mongoose.Schema({
//   isNotificationEnabled: { type: Boolean, default: false },
//   isNewDashboardEnabled: { type: Boolean, default: false },
//   timezone: { type: String, default: 'UTC' },
// });

// const User = mongoose.model('User', UserSchema);
// const Setting = mongoose.model('Setting', SettingSchema);

// module.exports = { User, Setting };


const { EntitySchema } = require('typeorm');

const UserSchema = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    firstName: {
      type: 'varchar',
    },
    lastName: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
  },
});

const SettingSchema = new EntitySchema({
  name: 'Setting',
  tableName: 'settings',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    isNotificationEnabled: {
      type: 'boolean',
    },
    isNewDashboardEnabled: {
      type: 'boolean',
    },
    timezone: {
      type: 'varchar',
    },
  },
});

module.exports = { UserSchema, SettingSchema };