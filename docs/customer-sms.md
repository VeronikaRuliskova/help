---
title: Customer SMS
---

## How can I activate or adjust [Customer SMS](https://www.bulkgate.com/en/sms-module/#customer-sms-notification) message template?
To activate and adjust Customer SMS message template:
1.	Go to Customer SMS
2.	Select which template you want to activate and click on it
3.	Adjust the message template. Use variables from the Personalize message menu. You can instantly see how the message template will look like in action and what the length of the message is
4.	Choose appropriate [sender type](sender-type.md#what-is-a-sender-type-and-how-can-i-use-it)
5.	Activate [Unicode](unicode.md#what-is-unicode) and [Flash SMS](flash-sms.md#what-is-flash-sms) if you want
6.	Activate the template in the right-upper corner
7.	Click Save

`Please note that if you lack any data for the selected variables, the customer will receive the customer SMS without the selected variable. In other words, if your New order message template for Customer SMS has a text “<shop_name>: Thank you for your order, <customer_firstname>. Your order…“, and you lack the customer’s first name, the variable <customer_firstname> will be empty. Your customer will therefore receive message “YourGuitars: Thank you for your order, . Your order...“`

**`Watch video on` [how to adjust Customer SMS templates](https://www.youtube.com/watch?v=B3vdkNm64rE&list=PL3m8jKRwlM0u6EMb_bYunQuCpiQ_GkI7L&index=2)**

<iframe width="854" height="480" src="https://www.youtube.com/embed/B3vdkNm64rE?list=PL3m8jKRwlM0u6EMb_bYunQuCpiQ_GkI7L" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## How can I adjust multilingual SMS templates?
If your website is multilingual, you can activate and adjust SMS templates for those languages. Your customers can therefore receive SMS notifications in their native language, or the language of the visited website.

To adjust multilingual SMS templates:
1. Go to **Settings** 
2. Click Lokalization
3. Check "Enable language mutations for Customer SMS"
4. Go to Customer SMS
5. In the left-upper corner, select other multilingual website for which you want to adjust and activate SMS template
6. [Activate and adjust Customer SMS message template](customer-sms.md#how-can-i-activate-or-adjust-customer-sms-message-template) you want. 

`There is a need to activate the specific message template for every single mutation, otherwise, some of your customers would not receive the notification. In other words, let's say you have UK and french mutations. If you, for example, activate Customer SMS template "Status - Completed" for the UK mutation, but not for the french mutation, those customers that ordered your product through the french mutation won't receive SMS notification.`
