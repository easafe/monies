import { MMKV } from 'react-native-mmkv';
import { BSON } from 'bson';

let database = new MMKV();

//b(s)on only accepts objects as top level

export function set(key, value) {
    database.set(key, BSON.serialize({[key]: value}));
}

export function get(key) {
    return BSON.deserialize(database.getBuffer(key))[key];
}

export function check(key) {
    return database.contains(key);
}
