const welcomeEmail = (name, link) => {
    const template = 
    `
    <!DOCTYPE html>
    <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <style>
                #outlook a {
                    padding: 0;
                }
    
                .ExternalClass {
                    width: 100%;
                }
    
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                    line-height: 100%;
                }
    
                .es-button {
                    mso-style-priority: 100 !important;
                    text-decoration: none !important;
                }
    
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
    
                .es-desk-hidden {
                    display: none;
                    float: left;
                    overflow: hidden;
                    width: 0;
                    max-height: 0;
                    line-height: 0;
                    mso-hide: all;
                }
    
                /*
                END OF IMPORTANT
                */
                s {
                    text-decoration: line-through;
                }
    
                body {
                    width: 100%;
                    margin-top: 10%;
                    font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif';
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
    
                table {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                }
    
                table td,
                html,
                body,
                .es-wrapper {
                    padding: 0;
                    Margin: 0;
                }
    
                .es-content,
                .es-header,
                .es-footer {
                    table-layout: fixed !important;
                    width: 100%;
                }
    
                img {
                    display: block;
                    border: 0;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
    
                table tr {
                    border-collapse: collapse;
                }
    
                p,
                hr {
                    Margin: 0;
                }
    
                h1,
                h2,
                h3,
                h4,
                h5 {
                    Margin: 0;
                    line-height: 120%;
                    mso-line-height-rule: exactly;
                    font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif';
                }
    
                p,
                ul li,
                ol li,
                a {
                    -webkit-text-size-adjust: none;
                    -ms-text-size-adjust: none;
                    mso-line-height-rule: exactly;
                }
    
                .es-left {
                    float: left;
                }
    
                .es-right {
                    float: right;
                }
    
                .es-p5 {
                    padding: 5px;
                }
    
                .es-p5t {
                    padding-top: 5px;
                }
    
                .es-p5b {
                    padding-bottom: 5px;
                }
    
                .es-p5l {
                    padding-left: 5px;
                }
    
                .es-p5r {
                    padding-right: 5px;
                }
    
                .es-p10 {
                    padding: 10px;
                }
    
                .es-p10t {
                    padding-top: 10px;
                }
    
                .es-p10b {
                    padding-bottom: 10px;
                }
    
                .es-p10l {
                    padding-left: 10px;
                }
    
                .es-p10r {
                    padding-right: 10px;
                }
    
                .es-p15 {
                    padding: 15px;
                }
    
                .es-p15t {
                    padding-top: 15px;
                }
    
                .es-p15b {
                    padding-bottom: 15px;
                }
    
                .es-p15l {
                    padding-left: 15px;
                }
    
                .es-p15r {
                    padding-right: 15px;
                }
    
                .es-p20 {
                    padding: 20px;
                }
    
                .es-p20t {
                    padding-top: 20px;
                }
    
                .es-p20b {
                    padding-bottom: 20px;
                }
    
                .es-p20l {
                    padding-left: 20px;
                }
    
                .es-p20r {
                    padding-right: 20px;
                }
    
                .es-p25 {
                    padding: 25px;
                }
    
                .es-p25t {
                    padding-top: 25px;
                }
    
                .es-p25b {
                    padding-bottom: 25px;
                }
    
                .es-p25l {
                    padding-left: 25px;
                }
    
                .es-p25r {
                    padding-right: 25px;
                }
    
                .es-p30 {
                    padding: 30px;
                }
    
                .es-p30t {
                    padding-top: 30px;
                }
    
                .es-p30b {
                    padding-bottom: 30px;
                }
    
                .es-p30l {
                    padding-left: 30px;
                }
    
                .es-p30r {
                    padding-right: 30px;
                }
    
                .es-p35 {
                    padding: 35px;
                }
    
                .es-p35t {
                    padding-top: 35px;
                }
    
                .es-p35b {
                    padding-bottom: 35px;
                }
    
                .es-p35l {
                    padding-left: 35px;
                }
    
                .es-p35r {
                    padding-right: 35px;
                }
    
                .es-p40 {
                    padding: 40px;
                }
    
                .es-p40t {
                    padding-top: 40px;
                }
    
                .es-p40b {
                    padding-bottom: 40px;
                }
    
                .es-p40l {
                    padding-left: 40px;
                }
    
                .es-p40r {
                    padding-right: 40px;
                }
    
                .es-menu td {
                    border: 0;
                }
    
                .es-menu td a {
                    text-decoration: none;
                    display: block;
                    font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif';
                }
    
                .es-menu td a img {
                    display: inline-block !important;
                }
    
                /* END CONFIG STYLES */
                a {
                    text-decoration: underline;
                }
    
                p,
                ul li,
                ol li {
                    font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif';
                    line-height: 150%;
                }
    
                ul li,
                ol li {
                    Margin-bottom: 15px;
                    margin-left: 0;
                }
    
                .es-wrapper {
                    width: 100%;
                    height: 100%;
                    background-repeat: repeat;
                    background-position: center top;
                }
    
                .es-wrapper-color,
                .es-wrapper {
                    background-color: #efefef;
                }
    
                .es-header {
                    background-color: transparent;
                    background-repeat: repeat;
                    background-position: center top;
                }
    
                .es-header-body {
                    background-color: #ffffff;
                }
    
                .es-header-body p,
                .es-header-body ul li,
                .es-header-body ol li {
                    color: #333333;
                    font-size: 14px;
                }
    
                .es-header-body a {
                    color: #000000;
                    font-size: 14px;
                }
    
                .es-content-body {
                    background-color: #ffffff;
                }
    
                .es-content-body p,
                .es-content-body ul li,
                .es-content-body ol li {
                    color: #333333;
                    font-size: 14px;
                }
    
                .es-content-body a {
                    color: #9a7baa;
                    font-size: 14px;
                }
    
                .es-footer {
                    background-color: transparent;
                    background-repeat: repeat;
                    background-position: center top;
                }
    
                .es-footer-body {
                    background-color: transparent;
                }
    
                .es-footer-body p,
                .es-footer-body ul li,
                .es-footer-body ol li {
                    color: #333333;
                    font-size: 12px;
                }
    
                .es-footer-body a {
                    color: #000000;
                    font-size: 12px;
                }
    
                .es-infoblock,
                .es-infoblock p,
                .es-infoblock ul li,
                .es-infoblock ol li {
                    line-height: 120%;
                    font-size: 12px;
                    color: #333333;
                }
    
                .es-infoblock a {
                    font-size: 12px;
                    color: #000000;
                }
    
                h1 {
                    font-size: 34px;
                    font-style: normal;
                    font-weight: bold;
                    color: #333333;
                }
    
                h2 {
                    font-size: 26px;
                    font-style: normal;
                    font-weight: bold;
                    color: #333333;
                }
    
                h3 {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: normal;
                    color: #333333;
                }
    
                a.es-button,
                button.es-button {
                    display: inline-block;
                    background: #9a7baa;
                    border-radius: 0px;
                    font-size: 18px;
                    font-family: 'arial', 'helvetica neue', 'helvetica', 'sans-serif';
                    font-weight: bold;
                    font-style: normal;
                    line-height: 120%;
                    color: #ffffff;
                    text-decoration: none;
                    width: auto;
                    text-align: center;
                    padding: 10px 20px 10px 20px;
                    mso-padding-alt: 0;
                    mso-border-alt: 10px solid #9a7baa;
                }
    
                .es-button-border {
                    border-style: solid solid solid solid;
                    border-color: #9a7baa #9a7baa #9a7baa #9a7baa;
                    background: #9a7baa;
                    border-width: 0px 0px 0px 0px;
                    display: inline-block;
                    border-radius: 0px;
                    width: auto;
                }
    
                .es-button,
                .esd-block-button {
                    transition: all 0.5s;
                } 
    
                .esd-block-button:hover {
                    background-color: #ffffff;
                }
    
                .es-button:hover {
                    background-color: #7a51a7 !important;
                } 
    
                /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
                @media only screen and (max-width: 600px) {
    
                    p,
                    ul li,
                    ol li,
                    a {
                        line-height: 150% !important;
                    }
    
                    h1,
                    h2,
                    h3,
                    h1 a,
                    h2 a,
                    h3 a {
                        line-height: 120% !important;
                    }
    
                    h1 {
                        font-size: 30px !important;
                        text-align: center;
                    }
    
                    h2 {
                        font-size: 26px !important;
                        text-align: center;
                    }
    
                    h3 {
                        font-size: 20px !important;
                        text-align: center;
                    }
    
                    .es-header-body h1 a,
                    .es-content-body h1 a,
                    .es-footer-body h1 a {
                        font-size: 30px !important;
                    }
    
                    .es-header-body h2 a,
                    .es-content-body h2 a,
                    .es-footer-body h2 a {
                        font-size: 26px !important;
                    }
    
                    .es-header-body h3 a,
                    .es-content-body h3 a,
                    .es-footer-body h3 a {
                        font-size: 20px !important;
                    }
    
                    .es-header-body p,
                    .es-header-body ul li,
                    .es-header-body ol li,
                    .es-header-body a {
                        font-size: 16px !important;
                    }
    
                    .es-content-body p,
                    .es-content-body ul li,
                    .es-content-body ol li,
                    .es-content-body a {
                        font-size: 16px !important;
                    }
    
                    .es-footer-body p,
                    .es-footer-body ul li,
                    .es-footer-body ol li,
                    .es-footer-body a {
                        font-size: 16px !important;
                    }
    
                    .es-infoblock p,
                    .es-infoblock ul li,
                    .es-infoblock ol li,
                    .es-infoblock a {
                        font-size: 12px !important;
                    }
    
                    *[class="gmail-fix"] {
                        display: none !important;
                    }
    
                    .es-m-txt-c,
                    .es-m-txt-c h1,
                    .es-m-txt-c h2,
                    .es-m-txt-c h3 {
                        text-align: center !important;
                    }
    
                    .es-m-txt-r,
                    .es-m-txt-r h1,
                    .es-m-txt-r h2,
                    .es-m-txt-r h3 {
                        text-align: right !important;
                    }
    
                    .es-m-txt-l,
                    .es-m-txt-l h1,
                    .es-m-txt-l h2,
                    .es-m-txt-l h3 {
                        text-align: left !important;
                    }
    
                    .es-m-txt-r img,
                    .es-m-txt-c img,
                    .es-m-txt-l img {
                        display: inline !important;
                    }
    
                    .es-button-border {
                        display: block !important;
                    }
    
                    a.es-button,
                    button.es-button {
                        font-size: 20px !important;
                        display: block !important;
                        padding: 10px 0px 10px 0px !important;
                    }
    
                    .es-btn-fw {
                        border-width: 10px 0px !important;
                        text-align: center !important;
                    }
    
                    .es-adaptive table,
                    .es-btn-fw,
                    .es-btn-fw-brdr,
                    .es-left,
                    .es-right {
                        width: 100% !important;
                    }
    
                    .es-content table,
                    .es-header table,
                    .es-footer table,
                    .es-content,
                    .es-footer,
                    .es-header {
                        width: 100% !important;
                        max-width: 600px !important;
                    }
    
                    .es-adapt-td {
                        display: block !important;
                        width: 100% !important;
                    }
    
                    .adapt-img {
                        width: 100% !important;
                        height: auto !important;
                    }
    
                    .es-m-p0 {
                        padding: 0px !important;
                    }
    
                    .es-m-p0r {
                        padding-right: 0px !important;
                    }
    
                    .es-m-p0l {
                        padding-left: 0px !important;
                    }
    
                    .es-m-p0t {
                        padding-top: 0px !important;
                    }
    
                    .es-m-p0b {
                        padding-bottom: 0 !important;
                    }
    
                    .es-m-p20b {
                        padding-bottom: 20px !important;
                    }
    
                    .es-mobile-hidden,
                    .es-hidden {
                        display: none !important;
                    }
    
                    tr.es-desk-hidden,
                    td.es-desk-hidden,
                    table.es-desk-hidden {
                        width: auto !important;
                        overflow: visible !important;
                        float: none !important;
                        max-height: inherit !important;
                        line-height: inherit !important;
                    }
    
                    tr.es-desk-hidden {
                        display: table-row !important;
                    }
    
                    table.es-desk-hidden {
                        display: table !important;
                    }
    
                    td.es-desk-menu-hidden {
                        display: table-cell !important;
                    }
    
                    .es-menu td {
                        width: 1% !important;
                    }
    
                    table.es-table-not-adapt,
                    .esd-block-html table {
                        width: auto !important;
                    }
    
                    table.es-social {
                        display: inline-block !important;
                    }
    
                    table.es-social td {
                        display: inline-block !important;
                    }
    
                    .es-menu td a {
                        font-size: 14px !important;
                    }
    
                    .es-desk-hidden {
                        display: table-row !important;
                        width: auto !important;
                        overflow: visible !important;
                        max-height: inherit !important;
                    }
                }
    
                /* END RESPONSIVE STYLES */
            </style>
        </head>
        <body>
            <div dir="ltr" class="es-wrapper-color">
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings" valign="top">
                                <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center" esd-custom-block-id="89315">
                                                <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                                                <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="es-m-p20b esd-container-frame" width="270" align="left">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="270" align="left">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </table>
                                <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="margin-top: 100px !important;">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20" esd-general-paddings-checked="false" style="background-position: left top;" align="left">
                                                                <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="es-m-p20b esd-container-frame" width="270" align="left">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-image" align="center"><a target="_blank" href="http://mySite.com"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_e68c7d7750e454d4c8741683ab86e3ad/images/35771502361057721.jpg" alt width="270"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="245" align="left">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-image es-p10t es-p20b" align="left"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_e68c7d7750e454d4c8741683ab86e3ad/images/59971502362007821.png" alt="Welcome!" title="Welcome!" width="200"></a></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p10t es-p10b" align="left">
                                                                                                <p style="line-height: 150%; font-size: 15px; color: #333333; margin-top: 10px;">
                                                                                                    Dear ${name}, <br> here is a special coupon for you
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-image es-p20t es-p30b" align="left">
                                                                                                <a target="_blank">
                                                                                                    <img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_e68c7d7750e454d4c8741683ab86e3ad/images/71261502361949333.png" alt="10% off" title="10% off" width="200">
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text" align="left">
                                                                                                <p style="line-height: 150%; font-size: 15px; color: #333333; margin-top: 10px;">your next purchase in our shop 😊</p>
                                                                                                <p style="line-height: 150%; font-size: 15px; color: #333333;">Use code: <strong>RTSU345</strong></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p10t es-p20b" align="left">
                                                                                                <p style="color: #999999; line-height: 150%;"><span style="font-size: 12px; line-height: 150%;">Coupon code expires on September 12, 2017</span></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-button es-p5t es-p5b es-p5r es-p5l" bgcolor="#9a7baa" align="center" width="230">
                                                                                                <span class="es-button-border" style="display: block;">
                                                                                                    <a href="${link}" class="es-button" target="_blank" style="padding: 10px 0px; color: #ffffff; text-decoration: none; display: block;">
                                                                                                        Activate Account
                                                                                                    </a>
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0" style="margin: 30px 0 15px !important;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-text es-p10t es-p10r es-p10l" align="center">
                                                                                                <p style="color: #333333; line-height: 150%;"><span style="font-size: 16px; line-height: 150%;">Now that you're in, you'll be the first to hear about</span></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p30b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                                <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="es-m-p0r es-m-p20b esd-container-frame" width="174" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-image es-p10b" align="center"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_d199b22997a29bd9a4f82d8a687a4865/images/38141502363307793.png" alt width="116"></a></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text" align="center">
                                                                                                <h4 style="color: #333333;">NEW ARRIVALS</h4>
                                                                                                <p>(on already great prices!)</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                            <td class="es-hidden" width="20"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="es-m-p20b esd-container-frame" width="173" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0" style="margin-left: 20px !important;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-image es-p10b" align="center"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_d199b22997a29bd9a4f82d8a687a4865/images/46691502363315645.png" alt width="116"></a></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text" align="center">
                                                                                                <h4 style="color: #333333;">SPECIAL OFFERS</h4>
                                                                                                <p>(up to 50% off)</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="173" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-image es-p10b" align="center"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_d199b22997a29bd9a4f82d8a687a4865/images/14251502363197230.png" alt width="116"></a></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-text" align="center">
                                                                                                <h4 style="color: #333333;">EXCLUSIVE SALES</h4>
                                                                                                <p>(insiders only)</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center" esd-custom-block-id="89320">
                                                <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p10t es-p20r es-p20l" esd-general-paddings-checked="false" align="left" >
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-spacer es-p20t es-p20b" align="center">
                                                                                                <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px !important;">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-social es-p10t es-p10b" align="center">
                                                                                                <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td class="es-p20r" valign="top" align="center"><a href><img title="Twitter" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/twitter-square-colored.png" alt="Tw" width="32"></a></td>
                                                                                                            <td class="es-p20r" valign="top" align="center"><a href><img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/facebook-square-colored.png" alt="Fb" width="32"></a></td>
                                                                                                            <td class="es-p20r" valign="top" align="center"><a href><img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/youtube-square-colored.png" alt="Yt" width="32"></a></td>
                                                                                                            <td class="es-p20r" valign="top" align="center"><a href><img title="Linkedin" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/linkedin-square-colored.png" alt="In" width="32"></a></td>
                                                                                                            <td valign="top" align="center"><a href><img title="Pinterest" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/pinterest-square-colored.png" alt="P" width="32"></a></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text es-p10t es-p10b">
                                                                                                <p style="line-height: 150%;">You are receiving this email because you have registered to our site or joined our newsletter. <br> If you would not like to receive these emails <strong><a href="#" target="_blank" class="unsubscribe" style="line-height: 150%; text-decoration: none;">unsubscribe</a></strong></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </html>
    
    `
    return template
}

module.exports = welcomeEmail