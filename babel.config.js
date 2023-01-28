module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
=======
>>>>>>> c46f67035cc02321cbc6044ddb219fa64dbdae31
  };
};