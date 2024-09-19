const welcomeEmail = (name, link, coupon, expiry) => {
    const template = 
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .container {
                    width: 100%;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .main {
                    margin-top: 100px;
                    padding: 20px;
                    background-color: #f9f9f9;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .main .content {
                    width: 50%;
                }
                .main .image-container {
                    margin: -25px;
                    width: 50%;
                }
                .main h2 {
                    color: #5a5a5a;
                    font-size: 24px;
                }
                .main p {
                    font-size: 16px;
                    color: #777;
                }
                .main .discount {
                    font-size: 45px;
                    color: #6c3acc;
                    margin: 20px 0;
                }
                .main .coupon {
                    font-size: 20px;
                    color: #333;
                }
                .main .btn {
                    margin: 10px;
                    display: inline-block;
                    padding: 10px 30px;
                    background-color: #9164c3;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 18px;
                }
                .content h3 {
                    color: #333;
                }
                .content img {
                    width: 250px;
                    margin-top: 35px;
                }
                .footer {
                    padding: 20px;
                    background-color: #fff;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                }
                .footer img {
                    width: 32px;
                    margin: 0 10px;
                }
                .icons img {
                    width: 100px;
                    display: inline-block;
                }
                .icons a {
                    text-decoration: none;
                }

                @media screen and (max-width: 600px) {
                    .main {
                        flex-direction: column;
                    }
                    .main .content {
                        width: 100%;
                    }
                    .main .image-container {
                        width: 100%;
                    }
                    .container {
                        width: 100%;
                        padding: 0 10px;
                    }
                    .main .discount {
                        font-size: 36px;
                    }
                }
            </style>
        </head>
        <body>
            <table class="container">
                <tr>
                    <td>
                        <div class="main">
                            <div class="content">
                                <h3>Welcome ${name}!</h3>
                                <p>here is a special coupon for</p>
                                <div class="discount">
                                    10% OFF
                                </div>
                                <p>your next purchase in our shop :)</p>
                                <p class="coupon">
                                    use code: ${coupon}
                                </p>
                                <p>
                                    expires on 
                                    <strong class="expiry">
                                        ${expiry}
                                    </strong>
                                </p>
                                <a href="${link}" class="btn">
                                    Activate Account
                                </a>
                                <div>
                                    <img src="https://i.ibb.co/C03Sbnz/logo-text.png" alt="logo" />
                                </div>
                            </div>
                            <div class="image-container">
                                <img src="https://i.ibb.co/4TZG0Yk/promotion.png" />
                            </div>
                        </div>
                        <div class="footer">
                            <div class="icons">
                                <a href="https://www.instagram.com/livbogen_art" target="_blank">
                                    <img src="https://i.ibb.co/bbx3kTP/instagram.png" alt="Instagram">
                                </a>
                                <a href="https://www.facebook.com/olivia.bogen" target="_blank">
                                    <img src="https://i.ibb.co/tPzC4XC/facebook.png" alt="Facebook">
                                </a>
                                <a href="https://wa.me/447958244391" target="_blank">
                                    <img src="https://i.ibb.co/ggMFXy2/whatsapp.png" alt="WhatsApp">
                                </a>
                            </div>
                            <p>
                                You are receiving this email because you have registered to our site. 
                                <br> 
                                If you would not like to receive these emails 
                                <a href="#" style="color: #6c3acc;">
                                    unsubscribe
                                </a>
                            </p>
                        </div>
                    </td>
                </tr>
            </table>
        </body>
    </html>    
    `
    return template
}

module.exports = welcomeEmail