const sendToken = (user, res, statusCode) => {
    const token = user.getJwtToken()
  
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    }
    console.log('********************************************')
    res.status(statusCode).cookie('token', token, options).json({
      success: true,
      token,
      user,
    })
  }
  
  module.exports = sendToken