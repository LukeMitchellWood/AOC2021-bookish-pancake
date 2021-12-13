module.exports = (data) => {
  const frag = data.split(' ');
  const move =frag[0];
  const value = parseInt(frag[1], 10);
  console.log({move, value});
  return {
    move,
    value,
  };
};
