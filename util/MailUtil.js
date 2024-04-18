const mailer = require('nodemailer');

const mailSend = async (to) => {
    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,

        subject: "Welcome to E-Hospital System",

        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Security-Policy" content="script-src &#39;none&#39;; connect-src &#39;none&#39;; object-src &#39;none&#39;; form-action &#39;none&#39;;"><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title></head><body class="body"><div dir="ltr" class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr><td class="esd-structure es-p15t es-p15b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-text es-infoblock" align="center" esd-links-underline="none"><p><a target="_blank" href="https://viewstripo.email" style="text-decoration: none;">View email in your browser</a></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-header" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-p5b" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/24041626422755246.png" alt="Logo" style="display: block;" height="50" title="Logo"></a></td></tr><tr><td class="esd-block-menu" esd-tmp-menu-font-weight="normal"><table cellpadding="0" cellspacing="0" width="100%" class="es-menu"><tbody><tr><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-0"><a target="_blank" href="https://viewstripo.email" style="color: #666666; font-weight: normal;">Home</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-1"><a target="_blank" href="https://viewstripo.email" style="color: #666666; font-weight: normal;">Category</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-2"><a target="_blank" href="https://viewstripo.email" style="font-weight: normal;">Brand</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr><td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="es-m-p0r esd-container-frame" width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="esd-block-image es-p40r es-p40l" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img" src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/84051626422668108.png" alt="" style="display: block;" width="480"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-header" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="esd-block-menu" esd-tmp-menu-font-weight="bold" esd-tmp-menu-size="width|25" esd-tmp-menu-font-size="14px"><table cellpadding="0" cellspacing="0" width="100%" class="es-menu"><tbody><tr><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-0"><a target="_blank" href="https://viewstripo.email" style="color: #666666; font-weight: bold; font-size: 14px;"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/13401626423618121.png" alt="FREE SHIPPING" title="FREE SHIPPING" align="absmiddle" class="es-p10r" width="25">FREE SHIPPING</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-1"><a target="_blank" href="https://viewstripo.email" style="color: #666666; font-weight: bold; font-size: 14px;"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/43361626423618272.png" alt="OFFICIAL DISCOUNTS" title="OFFICIAL DISCOUNTS" align="absmiddle" class="es-p10r" width="25">OFFICIAL DISCOUNTS</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-2"><a target="_blank" href="https://viewstripo.email" style="font-weight: bold; color: #666666; font-size: 14px;"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/33381626423618336.png" alt="24/7 HELPLINE" title="24/7 HELPLINE" align="absmiddle" class="es-p10r" width="25">24/7 HELPLINE</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p30t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text"><h2><b>New arrivals</b></h2></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="194" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody><tr><td width="174" class="es-m-p0r es-m-p20b esd-container-frame" align="center"><table cellpadding="0" cellspacing="0" width="100%" style="border-left:1px solid #E1E1E1;border-right:1px solid #E1E1E1;border-top:1px solid #E1E1E1;border-bottom:1px solid #E1E1E1;border-radius: 5px; border-collapse: separate; background-color: #e7f2f0;" bgcolor="#E7F2F0"><tbody><tr><td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img p_image" src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/4201626424082624.png" alt="" style="display: block;" width="172"></a></td></tr><tr><td align="center" class="esd-block-text es-p10"><p class="p_name">Medical suit for men</p></td></tr><tr><td align="center" class="esd-block-text es-p10r es-p10l"><h3 style="font-size: 22px;" class="p_price">$132</h3></td></tr><tr><td align="center" class="esd-block-image es-p10" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/71611626424264446.png" alt="" style="display: block;" height="12"></a></td></tr></tbody></table></td><td class="es-hidden" width="20"></td></tr></tbody></table><!--[if mso]></td><td width="173" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody><tr><td width="173" class="es-m-p0r es-m-p20b esd-container-frame" align="center"><table cellpadding="0" cellspacing="0" width="100%" style="border-left:1px solid #E1E1E1;border-right:1px solid #E1E1E1;border-top:1px solid #E1E1E1;border-bottom:1px solid #E1E1E1;border-radius: 5px; border-collapse: separate; background-color: #e7f2f0;" bgcolor="#E7F2F0"><tbody><tr><td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img p_image" src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/90851626424082989.png" alt="" style="display: block;" width="171"></a></td></tr><tr><td align="center" class="esd-block-text es-p10"><p class="p_name">Medical suit for women</p></td></tr><tr><td align="center" class="esd-block-text es-p10r es-p10l"><h3 style="font-size: 22px;" class="p_price">$155</h3></td></tr><tr><td align="center" class="esd-block-image es-p10" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/71611626424264446.png" alt="" style="display: block;" height="12"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="173" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="173" class="es-m-p0r esd-container-frame" align="center"><table cellpadding="0" cellspacing="0" width="100%" style="border-left:1px solid #E1E1E1;border-right:1px solid #E1E1E1;border-top:1px solid #E1E1E1;border-bottom:1px solid #E1E1E1;border-radius: 5px; border-collapse: separate; background-color: #e7f2f0;" bgcolor="#E7F2F0"><tbody><tr><td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img p_image" src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/52251626424083029.png" alt="" style="display: block;" width="171"></a></td></tr><tr><td align="center" class="esd-block-text es-p10"><p class="p_name">Medical suit for women</p></td></tr><tr><td align="center" class="esd-block-text es-p10r es-p10l"><h3 style="font-size: 22px;" class="p_price">$115</h3></td></tr><tr><td align="center" class="esd-block-image es-p10" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/71611626424264446.png" alt="" style="display: block;" height="12"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr><td class="esd-structure es-p30b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-button"><span class="es-button-border"><a href="https://viewstripo.email" class="es-button" target="_blank">SHOP MORE</a></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p30t es-p20r es-p20l" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" align="left" class="es-left"><tbody><tr><td width="270" class="esd-container-frame es-m-p20b" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-text es-p20b"><h2><b>See why customers love our products</b></h2></td></tr><tr><td align="left" class="esd-amp-accordion"><amp-accordion animate="" expand-single-section=""><section expanded=""><h3 class="section-title" style="background-color: #e7f2f0; color: #666666; font-size: 16px; border-color: #e1e1e1; border-radius: 5px">Innovative design</h3><div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="accordion"><tr><td align="left" class="esd-block-text es-p10"><p>Diam donec adipiscing tristique risus nec feugiat in. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Consectetur a erat nam at lectus urna duis. Velit dignissim sodales ut eu sem integer vitae justo.</p></td></tr></tbody></table></div></section><section><h3 class="section-title" style="border-color: #e1e1e1; background-color: #e7f2f0; color: #666666; font-size: 16px; border-radius: 5px">Certified products</h3><div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="accordion"><tr><td align="left" class="esd-block-text es-p10"><p>Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tellus elementum sagittis vitae et leo duis. Nisl purus in mollis nunc sed id semper.&nbsp;Placerat vestibulum lectus mauris ultricesultricies.</p></td></tr></tbody></table></div></section><section><h3 class="section-title" style="border-color: #e1e1e1; background-color: #e7f2f0; color: #666666; font-size: 16px; border-radius: 5px">Advanced technology</h3><div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="accordion"><tr><td align="left" class="esd-block-text es-p10"><p>Diam donec adipiscing tristique risus nec feugiat in. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Consectetur a erat nam at lectus urna duis. Velit dignissim sodales ut eu sem integer vitae justo.</p></td></tr></tbody></table></div></section></amp-accordion></td></tr></tbody></table></td></tr><tr><td width="270" class="esd-container-frame es-m-p20b" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" style="border-left:1px solid #E1E1E1;border-right:1px solid #E1E1E1;border-top:1px solid #E1E1E1;border-bottom:1px solid #E1E1E1;border-radius: 5px; border-collapse: separate; background-color: #e7f2f0;" bgcolor="#E7F2F0"><tbody><tr><td align="left" class="esd-block-text es-p10"><h4 style="color: #666666;"><b>Innovative design</b></h4></td></tr></tbody></table></td></tr><tr><td width="270" class="esd-container-frame es-m-p20b" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-text es-p5t es-p10b es-p10r es-p10l"><p style="line-height: 150%;">Diam donec adipiscing tristique risus nec feugiat in. Ligula ullamcorper malesuada proin libero nunc consequat interdum.&nbsp;</p></td></tr></tbody></table></td></tr><tr><td width="270" class="esd-container-frame es-m-p20b" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" style="border-left:1px solid #E1E1E1;border-right:1px solid #E1E1E1;border-top:1px solid #E1E1E1;border-bottom:1px solid #E1E1E1;border-radius: 5px; border-collapse: separate; background-color: #e7f2f0;" bgcolor="#E7F2F0"><tbody><tr><td align="left" class="esd-block-text es-p10"><h4 style="color: #666666;"><b>Certified products</b></h4></td></tr></tbody></table></td></tr><tr><td width="270" class="esd-container-frame es-m-p20b" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-text es-p5t es-p10b es-p10r es-p10l"><p style="line-height: 150%;">Diam donec adipiscing tristique risus nec feugiat in. Ligula ullamcorper malesuada proin libero nunc consequat interdum.&nbsp;</p></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="270" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img" src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/73201626424840213.jpeg" alt="" style="display: block;" width="270"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #333333;" bgcolor="#333333"><tbody><tr><td class="esd-structure es-p20t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-p10t es-p20b" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_7538e36b182dde616fb8daf637e71288/images/66991626426339749.png" alt="Logo" style="display: block;" height="50" title="Logo"></a></td></tr></tbody></table></td></tr><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="esd-block-menu" esd-tmp-menu-font-weight="normal" esd-tmp-menu-font-family="&#39;trebuchet ms&#39;,&#39;lucida grande&#39;,&#39;lucida sans unicode&#39;,&#39;lucida sans&#39;,tahoma,sans-serif" esd-tmp-divider="0|solid|#ffffff" esd-tmp-menu-padding="5|5" esd-tmp-menu-color="#ffffff"><table cellpadding="0" cellspacing="0" width="100%" class="es-menu"><tbody><tr><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-0"><a target="_blank" href="https://viewstripo.email">Account</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-1"><a target="_blank" href="https://viewstripo.email">Terms of use</a></td><td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-2"><a target="_blank" href="https://viewstripo.email">Privacy police </a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20" align="left"><!--[if mso]><table width="560" cellpadding="0" 
                            cellspacing="0"><tr><td width="357" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody><tr><td width="357" class="es-m-p20b esd-container-frame" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-text es-m-txt-c" esd-links-color="#ffffff"><p>No longer want to review this email?&nbsp;<a target="_blank" href="https://viewstripo.email/">Unsubscribe</a></p><p><a target="_blank" href="https://viewstripo.email/">View in your browser</a></p></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="183" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="183" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="right" class="esd-block-social es-m-txt-c es-p5t es-p5b" style="font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"><tbody><tr><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="Facebook" src="https://ffpirtn.stripocdn.email/content/assets/img/social-icons/rounded-white/facebook-rounded-white.png" alt="Fb" height="32"></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="X.com" src="https://ffpirtn.stripocdn.email/content/assets/img/social-icons/rounded-white/x-rounded-white.png" alt="X" height="32"></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="Instagram" src="https://ffpirtn.stripocdn.email/content/assets/img/social-icons/rounded-white/instagram-rounded-white.png" alt="Inst" height="32"></a></td><td align="center" valign="top"><a target="_blank" href="https://viewstripo.email"><img title="Youtube" src="https://ffpirtn.stripocdn.email/content/assets/img/social-icons/rounded-white/youtube-rounded-white.png" alt="Yt" height="32"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=medicine_2&utm_content=medical_suit"><img src="https://ffpirtn.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display: block;"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>`
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}

const mailSend2 = async (to, dname) => {
    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,
        subject: "Online cunsultency metting",
        html: `
            <h3>Doctor Name: ${dname}</h3>
            <h3>Meeting ID: 8935865 0012</h3>
            <h3>Passcoad: mq1bb4</h3>
            <h3>Numeric Passcoad: 544321</h3>

            <h4>Invile Lint: https://us05web.zoom.us/j/84228374697?pwd=AKIzveaztCWbls9rnsuXYUB9sf3d9f.1</h4>
        `
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}

const mailSend3 = async (to, text) => {

    let patientId = text?.patientId;
    let doctorId = text?.docId;
    let patientName = text?.patientName;
    let doctorName = text?.docName;
    let m1 = text?.m1;
    let m2 = text?.m2;
    let m3 = text?.m3;
    let m4 = text?.m4;
    let m5 = text?.m5;
    let reports = text?.reports;
    let advice = text?.advice;
    let date = text?.date;
    let email = text?.email;

    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,
        subject: "Your Prescription",
        html: `
        <h3>Patient id: ${patientId}</h3>
        <h3>Patient name: ${patientName}</h3>
        <h3>Doctor name: ${doctorName}</h3>
        <hr>
        <h2>Prescription: </h2>
        <table>
            <tr>
                <td>Sr no.</td>
                </td>Drug</td>
                </td>Frequency</td>
                </td>Instruction</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${m1[0]}</td>
                <td>${m1[1]}</td>
                <td>${m1[2]}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${m2[0]}</td>
                <td>${m2[1]}</td>
                <td>${m2[2]}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${m3[0]}</td>
                <td>${m3[1]}</td>
                <td>${m3[2]}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${m4[0]}</td>
                <td>${m4[1]}</td>
                <td>${m4[2]}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${m5[0]}</td>
                <td>${m5[1]}</td>
                <td>${m5[2]}</td>
            </tr>
        </table>
        <br>
        <h3>Reports: ${reports}</h3>
        <h3>Advice: ${advice}</h3>
        <h3>Date: ${date}</h3>
        <h3>Email: ${email}</h3>
        `
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}

const mailSend4 = async (to, otp) => {
    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,
        subject: "OTP for Reset Password",
        html: `
            <h2>Your OTP: ${otp}</h2>
        `
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}

const mailSend5 = async (to, obj) => {

    let patient_id = obj.patient_id;
    let patient_name = obj.patient_name;
    let doctor_name = obj.doctor_name;
    let appointment_date = obj.appointment_date;
    let status = obj.status;
    let payment_status = 'success';

    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,
        subject: "Appointment Booked",
        html: `
            <h3>Patient ID: ${patient_id}</h3>
            <h3>Patient name: ${patient_name}</h3>
            <h3>Doctor name: ${doctor_name}</h3>
            <h3>Appointment date: ${appointment_date}</h3>
            <h3>Status: ${status}</h3>
            <h3>Payment status: ${payment_status}</h3>
        `
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}

const mailSend6 = async (to, otp) => {
    const mailOption = {
        from: 'vaghasiyajaykumar251@gmail.com',
        to: to,
        subject: "OTP for Payment",
        html: `
            <h2>Your OTP: ${otp}</h2>
        `
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vaghasiyajaykumar251@gmail.com',
            pass: 'mxasudnvasgycwks'
        }
    })

    const res = await transporter.sendMail(mailOption);
}


module.exports = {
    mailSend,
    mailSend2,
    mailSend3,
    mailSend4,
    mailSend5,
    mailSend6
}