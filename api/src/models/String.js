const Str = (sequelize, S) => {

    const Strs = sequelize.define(
      "strings",
      {
          str: {
            type: S.STRING,
            allowNull: false,
          },
          palindrome: {
            type: S.BOOLEAN,
          },
      },
      {
        timestamps: true,
      }
    );
  
    return Strs;
  }
  module.exports = Str;
  