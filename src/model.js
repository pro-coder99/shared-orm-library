const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const SettingSchema = new mongoose.Schema({
  isNotificationEnabled: { type: Boolean, default: false },
  isNewDashboardEnabled: { type: Boolean, default: false },
  timezone: { type: String, default: 'UTC' },
});

const User = mongoose.model('User', UserSchema);
const Setting = mongoose.model('Setting', SettingSchema);

module.exports = { User, Setting };
