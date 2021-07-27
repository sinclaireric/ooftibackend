const nodemailer = require("nodemailer");


/* const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sinclaireric60@gmail.com",
    pass: "Manchester1&&"
  },
}); */


const transport = nodemailer.createTransport({
    host: "usvip6.noc401.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "hello@monsieurtravaux.ci", // generated ethereal user
      pass: "monsieurtravaux.ci", // generated ethereal password
    },
  });

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: "hello@monsieurtravaux.ci",
    to: email,
    subject: "Confirmez votre compte",
    html:  `  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Raleway',sans-serif;" >
        <head style="font-family:'Raleway',sans-serif;" >
        <style>
        @import url(https://fonts.googleapis.com/css?family=Raleway:400,300,600,700);
        </style>
		    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:'Raleway',sans-serif;" />
		    <!--[if !mso]><!-->
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="font-family:'Raleway',sans-serif;" />
		    <!--<![endif]-->
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" style="font-family:'Raleway',sans-serif;" >
		    <title></title>
		</head>
		<body style="font-family:'Raleway',sans-serif;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f5f5f5;" >
		    <div class="container-background" style="font-family:'Raleway',sans-serif;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		    <center class="wrapper" style="font-family:'Raleway',sans-serif;width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" >
		        <div class="webkit" style="font-family:'Raleway',sans-serif;max-width:600px; margin:0 auto" >
		            <table class="outer" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
		                <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="inner contents" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:30%;text-align:left;" >
		                                            <a href="https://www.monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0; width: 90%;" /></a>
		                                        </td>
		                                        <td class="inner contents" width="20%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:40%;text-align:left;float:right;" >
                                                    <table>
                                                        <tr><td><p style="font-size:12px;font-weight:600;text-align:right;margin:0">Le partenaire de vos travaux</p></td></tr>
                                                    </table>
		                                        </td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >

		                                        </table>
		                                        </td>
		                                        <tr>
		                    </td>
		                </tr>
		                <tr style="font-family:'Raleway',sans-serif;" >
		                    <table width="100%" class="big-content" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#FFF;background-attachment:scroll;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:95%;margin-top:10px;margin-bottom:0;margin-right:auto;margin-left:auto;box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <tr style="font-family:'Raleway',sans-serif;" >
		                                    <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
		                                            <tr style="font-family:'Raleway',sans-serif;" >
		                                                <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:30px;padding-bottom:30px;padding-right:0px;padding-left:0;width:100%;text-align:center;" >
		                                                    <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/validation_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
		                                                </td>
		                                            </tr>
		                                            <tr style="font-family:'Raleway',sans-serif;" >
		                                                <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:left;" >
															<h1 style="font-family:'Raleway',sans-serif;font-size:30px;font-weight:bold;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;text-align:center" >Salut ${name} !</h1>
		                                                </td>
                                                    </tr>
                                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                                <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:40px;padding-left:40px;width:100%;text-align:center;" >
                                                        <p class="p" style="font-family:'Raleway',sans-serif;font-size:14px;;margin-top:0;margin-bottom:3px;margin-right:0;margin-left:0;" >L'équipe Monsieurtravaux.ci vous remercie pour votre inscription.</p>
                                                        <p class="p" style="font-family:'Raleway',sans-serif;font-size:14px;;margin-top:0;margin-bottom:3px;margin-right:0;margin-left:0;" >Pour activer votre compte, nous devons vérifier si vous avez bien reçu cet e-mail. Veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous.</p>
														</td>
                                                    </tr>
		                                            <tr style="font-family:'Raleway',sans-serif;" >
                                                        <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                                                            <tr style="font-family:'Raleway',sans-serif;" >
                                                                <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                                                                    <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
                                                                        <tr style="font-family:'Raleway',sans-serif;" ><td height="10px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" ></td></tr>
                                                                        <tr style="font-family:'Raleway',sans-serif;" >
                                                                            <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:center;" >
                                                                                <a href=https://www.monsieurtravaux.ci/confirm/${confirmationCode} class="button-click" style="font-family:'Raleway',sans-serif;width:auto;min-width:130px;background-color:#fa7e22;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;text-align:center;color:#FFF;display:inline-block;line-height:35px;text-decoration:none;font-weight:500;font-size:15px;border-radius:25px;padding: 2px 15px;text-transform:uppercase" >Valider mon compte </a>

                                                                                </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </td>
                                                    </tr>
		                                        </table>
		                                    </td>
		                                </tr>
		                            </td>
		                        </tr>


		                    </table>
                        </tr>
                        <br>
		                <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
		                                    <tr style="font-family:'Raleway',sans-serif;" >
                                                <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%;" >
                                                <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
                                                    <tr>
		                                                <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_telf.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
                                                    </tr>
                                                    <tr>
		                                                <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:10px;margin-bottom:5px;margin-right:0;margin-left:0;">Besoin d'assistance? Appelez nous au</p>
                                                    </tr>
                                                    <tr>
		                                                <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600" >07 98 71 44 40</p>
                                                    </tr>
                                                </table>
                                                </td>
		                                        <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:25px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%" >
		                                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
                                                    <tr>
		                                                <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
                                                    </tr>
                                                    <tr>
		                                                <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;">Vous avez une question? Contactez nous sur</p>
                                                    </tr>
                                                    <tr>
		                                                <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;font-weight:600" >hello@monsieurtravaux.ci</p>
                                                    </tr>
                                                </table>
		                                        </td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                    </td>
		                </tr>
		                <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#fa7e22" >
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="inner line" width="80%" style="font-family:'Raleway',sans-serif;padding-top:5px;padding-right:10px;padding-left:30px;display:block;" >
                                                    <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600">C'est quoi Monsieurtravaux.ci ?</p>
                                                </td>
                                            </tr>
                                            <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;" >
                                                    <p class="p" style="font-family:'Raleway',sans-serif;font-size:12px;;margin-bottom:5px;margin-right:0;margin-left:0;text-align:justify">
                                                    Monsieurtravaux.ci est un service en ligne spécialisé dans la mise en relation entre les particuliers / sociétés qui ont des travaux chez eux et les professionnels du bâtiment dont ils auront besoin pour l'étude ou l'exécution de tout type de travaux.
                                                </p>
                                                </td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                    </td>
                        </tr>
                        <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                                            <tr style="font-family:'Raleway',sans-serif;" >
                                                <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
                                                    <a href="https://www.facebook.com/monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_fb.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
                                                    <a href="https://instagram.com/monsieurtravauxci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_instagram.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
                                                </td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                    </td>
                        </tr>
                        <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                                            <tr style="font-family:'Raleway',sans-serif;" >
                                                <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
                                                <hr style="background-color:#fa7e22;width:50%;height:1px;border:1px solid #fa7e22;">
                                                </td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                    </td>
		                </tr>
		                <tr style="font-family:'Raleway',sans-serif;" >
		                    <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                        <tr style="font-family:'Raleway',sans-serif;" >
		                            <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
		                                <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:center;" >
		                                            <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
		                                        </td>
		                                    </tr>
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:center;" >
		                                            <p style="text-align: center; margin:0">BP 552 Abidjan 31 Yopougon Academie des Mers Immeuble Bamba,</p>
		                                        </td>
		                                    </tr>
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:lefcenterct;" >
		                                            <p style="text-align: center; margin:0"><strong>Tel :</strong> 07 98 71 44 40  -  
		                                        </td>
		                                    </tr>
		                                    <tr style="font-family:'Raleway',sans-serif;" >
		                                        <td class="contents center-text small-text gris-text" height="30px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:left;" ></td>
		                                    </tr>
		                                </table>
		                            </td>
		                        </tr>
		                    </td>
		                </tr>

		            </table>
		            <!--[if (gte mso 9)|(IE)]>
		            </td>
		            </tr>
		            </table>
		            <![endif]-->
		        </div>
		    </center>
		    </div>
		</body>
		</html>`,
			





















  }).catch(err => console.log(err));
};





module.exports.sendNewDevisNotif = (name, email, entreprise,iddevis) => {




	
	transport.sendMail({
	  from: "hello@monsieurtravaux.ci",
	  to: email,
	  subject: "Nouveau Devis reçu",
	  html:  `  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		  <html xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Raleway',sans-serif;" >
		  <head style="font-family:'Raleway',sans-serif;" >
		  <style>
		  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300,600,700);
		  </style>
			  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:'Raleway',sans-serif;" />
			  <!--[if !mso]><!-->
			  <meta http-equiv="X-UA-Compatible" content="IE=edge" style="font-family:'Raleway',sans-serif;" />
			  <!--<![endif]-->
			  <meta name="viewport" content="width=device-width, initial-scale=1.0" style="font-family:'Raleway',sans-serif;" >
			  <title></title>
		  </head>
		  <body style="font-family:'Raleway',sans-serif;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f5f5f5;" >
			  <div class="container-background" style="font-family:'Raleway',sans-serif;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
			  <center class="wrapper" style="font-family:'Raleway',sans-serif;width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" >
				  <div class="webkit" style="font-family:'Raleway',sans-serif;max-width:600px; margin:0 auto" >
					  <table class="outer" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner contents" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:30%;text-align:left;" >
													  <a href="https://www.monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0; width: 90%;" /></a>
												  </td>
												  <td class="inner contents" width="20%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:40%;text-align:left;float:right;" >
													  <table>
														  <tr><td><p style="font-size:12px;font-weight:600;text-align:right;margin:0">Le partenaire de vos travaux</p></td></tr>
													  </table>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
  
												  </table>
												  </td>
												  <tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <table width="100%" class="big-content" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#FFF;background-attachment:scroll;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:95%;margin-top:10px;margin-bottom:0;margin-right:auto;margin-left:auto;box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <tr style="font-family:'Raleway',sans-serif;" >
											  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:30px;padding-bottom:30px;padding-right:0px;padding-left:0;width:100%;text-align:center;" >
															  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/validation_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:left;" >
															  <h1 style="font-family:'Raleway',sans-serif;font-size:30px;font-weight:bold;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;text-align:center" >Salut ${name}, nouveau Devis reçu  !</h1>
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:40px;padding-left:40px;width:100%;text-align:center;" >
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:14px;;margin-top:0;margin-bottom:3px;margin-right:0;margin-left:0;" >Vous avez recu un nouveau devis de l'entreprise ${entreprise} </p>
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
															  <tr style="font-family:'Raleway',sans-serif;" >
																  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
																	  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
																		  <tr style="font-family:'Raleway',sans-serif;" ><td height="10px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" ></td></tr>
																		  <tr style="font-family:'Raleway',sans-serif;" >
																			  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:center;" >
																				  <a href=https://www.monsieurtravaux.ci/myspace class="button-click" style="font-family:'Raleway',sans-serif;width:auto;min-width:130px;background-color:#fa7e22;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;text-align:center;color:#FFF;display:inline-block;line-height:35px;text-decoration:none;font-weight:500;font-size:15px;border-radius:25px;padding: 2px 15px;text-transform:uppercase" >Consulter le devis </a>
  
																				  </td>
																		  </tr>
																	  </table>
																  </td>
															  </tr>
														  </td>
													  </tr>
												  </table>
											  </td>
										  </tr>
									  </td>
								  </tr>
  
  
							  </table>
						  </tr>
						  <br>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%;" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr>
														  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_telf.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:10px;margin-bottom:5px;margin-right:0;margin-left:0;">Besoin d'assistance? Appelez nous au</p>
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600" >07 98 71 44 40</p>
													  </tr>
												  </table>
												  </td>
												  <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:25px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr>
														  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;">Vous avez une question? Contactez nous sur</p>
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;font-weight:600" >hello@monsieurtravaux.ci</p>
													  </tr>
												  </table>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#fa7e22" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="80%" style="font-family:'Raleway',sans-serif;padding-top:5px;padding-right:10px;padding-left:30px;display:block;" >
													  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600">C'est quoi Monsieurtravaux.ci ?</p>
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;" >
													  <p class="p" style="font-family:'Raleway',sans-serif;font-size:12px;;margin-bottom:5px;margin-right:0;margin-left:0;text-align:justify">
													  Monsieurtravaux.ci est un service en ligne spécialisé dans la mise en relation entre les particuliers / sociétés qui ont des travaux chez eux et les professionnels du bâtiment dont ils auront besoin pour l'étude ou l'exécution de tout type de travaux.
												  </p>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
													  <a href="https://www.facebook.com/monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_fb.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
													  <a href="https://instagram.com/monsieurtravauxci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_instagram.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
												  <hr style="background-color:#fa7e22;width:50%;height:1px;border:1px solid #fa7e22;">
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:center;" >
													  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:center;" >
													  <p style="text-align: center; margin:0">BP 552 Abidjan 31 Yopougon Academie des Mers Immeuble Bamba,</p>
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:lefcenterct;" >
													  <p style="text-align: center; margin:0"><strong>Tel :</strong> 07 98 71 44 40  -  
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" height="30px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:left;" ></td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
  
					  </table>
					  <!--[if (gte mso 9)|(IE)]>
					  </td>
					  </tr>
					  </table>
					  <![endif]-->
				  </div>
			  </center>
			  </div>
		  </body>
		  </html>`,
			  
  
  
  
  
  
	}).catch(err => console.log(err));
  };














module.exports.sendNewDemandeNotif = (name, email,id) => {




	
	transport.sendMail({
	  from: "hello@monsieurtravaux.ci",
	  to: email,
	  subject: "Nouveau Devis reçu",
	  html:  `  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		  <html xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Raleway',sans-serif;" >
		  <head style="font-family:'Raleway',sans-serif;" >
		  <style>
		  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300,600,700);
		  </style>
			  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:'Raleway',sans-serif;" />
			  <!--[if !mso]><!-->
			  <meta http-equiv="X-UA-Compatible" content="IE=edge" style="font-family:'Raleway',sans-serif;" />
			  <!--<![endif]-->
			  <meta name="viewport" content="width=device-width, initial-scale=1.0" style="font-family:'Raleway',sans-serif;" >
			  <title></title>
		  </head>
		  <body style="font-family:'Raleway',sans-serif;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f5f5f5;" >
			  <div class="container-background" style="font-family:'Raleway',sans-serif;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
			  <center class="wrapper" style="font-family:'Raleway',sans-serif;width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" >
				  <div class="webkit" style="font-family:'Raleway',sans-serif;max-width:600px; margin:0 auto" >
					  <table class="outer" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner contents" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:30%;text-align:left;" >
													  <a href="https://www.monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0; width: 90%;" /></a>
												  </td>
												  <td class="inner contents" width="20%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:40%;text-align:left;float:right;" >
													  <table>
														  <tr><td><p style="font-size:12px;font-weight:600;text-align:right;margin:0">Le partenaire de vos travaux</p></td></tr>
													  </table>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"><table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
  
												  </table>
												  </td>
												  <tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <table width="100%" class="big-content" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#FFF;background-attachment:scroll;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:95%;margin-top:10px;margin-bottom:0;margin-right:auto;margin-left:auto;box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <tr style="font-family:'Raleway',sans-serif;" >
											  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:30px;padding-bottom:30px;padding-right:0px;padding-left:0;width:100%;text-align:center;" >
															  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/validation_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:left;" >
															  <h1 style="font-family:'Raleway',sans-serif;font-size:30px;font-weight:bold;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;text-align:center" >Salut ${name}, nouvelle Demande reçu  !</h1>
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:40px;padding-left:40px;width:100%;text-align:center;" >
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:14px;;margin-top:0;margin-bottom:3px;margin-right:0;margin-left:0;" >Vous avez recu une nouvelle demande </p>
														  </td>
													  </tr>
													  <tr style="font-family:'Raleway',sans-serif;" >
														  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
															  <tr style="font-family:'Raleway',sans-serif;" >
																  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
																	  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
																		  <tr style="font-family:'Raleway',sans-serif;" ><td height="10px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" ></td></tr>
																		  <tr style="font-family:'Raleway',sans-serif;" >
																			  <td class="contents" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;text-align:center;" >
																				  <a href=https://www.monsieurtravaux.ci/detailsdevis/${id} class="button-click" style="font-family:'Raleway',sans-serif;width:auto;min-width:130px;background-color:#fa7e22;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;text-align:center;color:#FFF;display:inline-block;line-height:35px;text-decoration:none;font-weight:500;font-size:15px;border-radius:25px;padding: 2px 15px;text-transform:uppercase" > Consulter la demande </a>
  
																				  </td>
																		  </tr>
																	  </table>
																  </td>
															  </tr>
														  </td>
													  </tr>
												  </table>
											  </td>
										  </tr>
									  </td>
								  </tr>
  
  
							  </table>
						  </tr>
						  <br>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%;" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr>
														  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_telf.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:10px;margin-bottom:5px;margin-right:0;margin-left:0;">Besoin d'assistance? Appelez nous au</p>
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600" >07 98 71 44 40</p>
													  </tr>
												  </table>
												  </td>
												  <td class="inner logo" style="font-family:'Raleway',sans-serif;padding-top:25px;padding-bottom:10px;padding-right:10px;padding-left:10px;vertical-align:top;text-align:center; width:50%" >
												  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
													  <tr>
														  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_mail.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:11px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;">Vous avez une question? Contactez nous sur</p>
													  </tr>
													  <tr>
														  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:0;margin-bottom:12px;margin-right:0;margin-left:0;font-weight:600" >hello@monsieurtravaux.ci</p>
													  </tr>
												  </table>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;background-color:#fa7e22" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="80%" style="font-family:'Raleway',sans-serif;padding-top:5px;padding-right:10px;padding-left:30px;display:block;" >
													  <p class="p" style="font-family:'Raleway',sans-serif;font-size:13px;;margin-top:19px;margin-bottom:5px;margin-right:0;margin-left:0;font-weight:600">C'est quoi Monsieurtravaux.ci ?</p>
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;" >
													  <p class="p" style="font-family:'Raleway',sans-serif;font-size:12px;;margin-bottom:5px;margin-right:0;margin-left:0;text-align:justify">
													  Monsieurtravaux.ci est un service en ligne spécialisé dans la mise en relation entre les particuliers / sociétés qui ont des travaux chez eux et les professionnels du bâtiment dont ils auront besoin pour l'étude ou l'exécution de tout type de travaux.
												  </p>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:20px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
													  <a href="https://www.facebook.com/monsieurtravaux.ci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_fb.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
													  <a href="https://instagram.com/monsieurtravauxci" style="font-family:'Raleway',sans-serif;color:#ee6a56;text-decoration:underline;margin-right:20px" ><img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/icone_instagram.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" /></a>
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="inner line" width="90%" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:30px;display:block;text-align:center" >
												  <hr style="background-color:#fa7e22;width:50%;height:1px;border:1px solid #fa7e22;">
												  </td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
						  <tr style="font-family:'Raleway',sans-serif;" >
							  <td style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
								  <tr style="font-family:'Raleway',sans-serif;" >
									  <td class="one-column" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
										  <table width="95%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:center;" >
													  <img src="https://s3.eu-central-1.amazonaws.com/www.monsieurtravaux.ci/logo.png" alt="" style="font-family:'Raleway',sans-serif;border-width:0;" />
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:10px;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:center;" >
													  <p style="text-align: center; margin:0">BP 552 Abidjan 31 Yopougon Academie des Mers Immeuble Bamba,</p>
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#000;font-size:11px;width:100%;text-align:lefcenterct;" >
													  <p style="text-align: center; margin:0"><strong>Tel :</strong> 07 98 71 44 40  -  
												  </td>
											  </tr>
											  <tr style="font-family:'Raleway',sans-serif;" >
												  <td class="contents center-text small-text gris-text" height="30px" style="font-family:'Raleway',sans-serif;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#999999;font-size:11px;width:100%;text-align:left;" ></td>
											  </tr>
										  </table>
									  </td>
								  </tr>
							  </td>
						  </tr>
  
					  </table>
					  <!--[if (gte mso 9)|(IE)]>
					  </td>
					  </tr>
					  </table>
					  <![endif]-->
				  </div>
			  </center>
			  </div>
		  </body>
		  </html>`,
			  
  
  
  
  
  
	}).catch(err => console.log(err));
  };




  






  