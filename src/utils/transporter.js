import { createTransport } from "nodemailer";

// let transporter = createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   }
// });

let transporter = createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'unahproyecto6@gmail.com',
    pass: 'Un4hPr0y3ct0',
    clientId: '837646527031-l6c0936jdnjgq37jroski1ts1ct6s7gh.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04hlCp5OPpfh5CgYIARAAGAQSNwF-L9IrqnQ7J_tpDzVpjBcj9VbJ0ljMShBRfMJ2ai8a-L5ne87oSSxYzVEOA_rY9w0pOFWrTjg'
  }
});

export default transporter