const setToken = (user, res, statusCode) => {
    const token = user.signJwtToken()

    res.cookie('token', token, {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    })

    res.status(statusCode).json({
      success: true,
      token,
      user,
    })
  }
  
  module.exports = setToken