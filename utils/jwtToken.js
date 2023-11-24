//Creating token and saving in cookie


const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //Options for cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE  * 30 * 60 * 60),
    httpOnly: true,
    sameSite: "none",
    secure:true,
  };
  res.status(statusCode)
  .cookie("token",token,options)
  .json({
    success:true,
    user,
    token
  })
};

module.exports =sendToken;