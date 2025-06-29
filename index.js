// Collection Functions

function myEach(collection, callback) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let startIdx = 0;
  if (acc === undefined) {
    acc = values[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) return values[i];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) result.push(values[i]);
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(array.length - n);
}

// Object Functions

function myKeys(object) {
  let keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) keys.push(key);
  }
  return keys;
}

function myValues(object) {
  let values = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) values.push(object[key]);
  }
  return values;
}

// Export for Node.js testing (if needed)
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};
