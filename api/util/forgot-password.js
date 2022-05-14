const MailForgotPassword = function (confirmLink) {
  return `
  <html lang="en-US">
  <head>
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
    <style type="text/css">
        body {
          font-family: 'Roboto', sans-serif;
        }
    </style>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <style type="text/css">
      a:hover {
        text-decoration: underline !important;
      }
    </style>
  </head>

  <body
    marginheight="0"
    topmargin="0"
    marginwidth="0"
    style="margin: 0px; background-color: #f2f3f8"
    leftmargin="0"
  >
    <table
      cellspacing="0"
      border="0"
      cellpadding="0"
      width="100%"
      bgcolor="#f2f3f8"
    >
      <tbody>
        <tr>
          <td>
            <table
              style="
                background-color: #f2f3f8;
                max-width: 670px;
                margin: 0 auto;
              "
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td style="height: 80px">&nbsp;</td>
                </tr>
                <tr></tr>
                <tr>
                  <td style="height: 20px">&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    <table
                      width="95%"
                      border="0"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        max-width: 670px;
                        background: #fff;
                        border-radius: 3px;
                        text-align: center;
                        -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      "
                    >
                      <tbody>
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="padding: 0 35px">
                            <h1
                              style="
                                color: #1e1e2d;
                                font-weight: 500;
                                margin: 0;
                                font-size: 32px;
                              "
                            >
                            Bạn đã yêu cầu đặt lại mật khẩu của mình
                            </h1>
                            <span
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                margin: 29px 0 26px;
                                border-bottom: 1px solid #cecece;
                                width: 100px;
                              "
                            ></span>
                            <p
                              style="
                                color: #455056;
                                font-size: 15px;
                                line-height: 24px;
                                margin: 0;
                              "
                            >
                            Chúng tôi không thể chỉ gửi cho bạn mật khẩu cũ của bạn. Một liên kết duy nhất để đặt lại mật khẩu của bạn đã được tạo cho bạn. Để đặt lại mật khẩu của bạn, hãy nhấp vào liên kết sau và làm theo hướng dẫn.
                            </p>
                            <a
                              href="${confirmLink}"
                              style="
                                background: #20e277;
                                text-decoration: none !important;
                                font-weight: 500;
                                margin-top: 35px;
                                color: #fff;
                                text-transform: uppercase;
                                font-size: 14px;
                                padding: 10px 24px;
                                display: inline-block;
                                border-radius: 50px;
                              "
                              >Đặt lại mật khẩu</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="height: 20px">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align: center"></td>
                </tr>
                <tr>
                  <td style="height: 80px">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
};

module.exports = MailForgotPassword;