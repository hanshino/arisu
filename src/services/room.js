const redis = require("../util/redis");
const pick = require("lodash/pick");

const REDIS_ROOM_PREFIX = "flipper_room_";
const REDIS_EXPIRE_AFTER = 5 * 60; // expire after 5 mins

exports.genRoomKey = key => `${REDIS_ROOM_PREFIX}${key}`;

/**
 * @typedef {Object}  Room
 * @property  {String}  number
 * @property  {String}  boss
 * @property  {Number}  level
 * @property  {String}  note
 * @property  {String}  creator
 * @property  {Number}  created_at
 */

/**
 * @param {Room} attributes
 * @returns {Promise<Room>}
 */
exports.create = async attributes => {
  let room = this.make(attributes);
  await this.save(room);
  return room;
};

/**
 * Find room information by room number
 * @param {String} number
 * @returns {Promise<Room|null>}
 */
exports.find = async number => {
  let cache = await redis.get(this.genRoomKey(number));
  return cache && JSON.parse(cache);
};

/**
 * @param {Object} attributes
 * @returns {Room}
 */
exports.make = attributes =>
  pick(attributes, ["number", "boss", "creator", "level", "created_at", "note"]);

/**
 * @param {Room} room
 * @returns {Promise}
 */
exports.save = room => {
  return redis.set(this.genRoomKey(room.number), JSON.stringify(room), "EX", REDIS_EXPIRE_AFTER);
};
