# Twitch bonus autoclick

![Bonus point example](./img/chat1.png)
![Bonus point example 2](./img/chat2.png)

Just add the bookmarlet to your bookmarks and click to activate.

Add new link and replace the link with the pasted text below:

```
javascript:(function()%7Bfunction%20randomIntFromInterval(t%2Ce)%7Breturn%20Math.floor(Math.random()*(e-t%2B1)%2Bt)%7Dfunction%20setupJquery()%7Bif(void%200!%3D%3Dwindow.jQuery)return!0%3Bvar%20t%3Breturn%20t%3Ddocument.createElement(%22script%22)%2Ct.setAttribute(%22src%22%2C%22%2F%2Fcode.jquery.com%2Fjquery-latest.min.js%22)%2Cdocument.body.appendChild(t)%2Ct.onload%3Dt.onreadystatechange%3Dfunction()%7Breturn!0%7D%2C%22Error%22%7Dfunction%20loop()%7BsetTimeout(function()%7Bvar%20t%3DjQuery(%22.tw-button.tw-interactive%22)%3Bt.length%26%26(t.click()%2Cconsole.info(%22%25c%5BTwitch%20bonus%20autoclick%5D%20Clicked!%22%2C%22color%3A%20%236441a5%22))%2Ctime%3DrandomIntFromInterval(12e3%2C22e3)%2Cloop()%7D%2Ctime)%7Dvar%20styles%3D%5B%22background%3A%20%236441a5%22%2C%22color%3A%20white%22%2C%22display%3A%20block%22%2C%22text-shadow%3A%200%201px%200%20rgba(0%2C%200%2C%200%2C%200.3)%22%2C%22box-shadow%3A%200%201px%200%20rgba(255%2C%20255%2C%20255%2C%200.4)%20inset%2C%200%205px%203px%20-5px%20rgba(0%2C%200%2C%200%2C%200.5)%2C%200%20-13px%205px%20-10px%20rgba(255%2C%20255%2C%20255%2C%200.4)%20inset%22%2C%22line-height%3A%2040px%22%2C%22text-align%3A%20center%22%2C%22font-weight%3A%20bold%22%2C%22padding%3A%2012px%22%5D.join(%22%3B%22)%3Bconsole.info(%22%25cCreated%20by%20Valentin%20DEVILLE%20(https%3A%2F%2Ftwitter.com%2FMyTheValentinus)%22%2Cstyles)%2Cconsole.info(%22%25c%5BTwitch%20bonus%20autoclick%5D%20Initialized!%22%2Cstyles)%2Calert(%22%5BTwitch%20bonus%20autoclick%5D%20Enabled!%20you%20need%20to%20refresh%20the%20page%20to%20disable%20it!%22)%2CsetupJquery()%3Bvar%20time%3D1200%3BsetTimeout(loop%2Ctime)%3B%7D)()
```

![Bookmark example](./img/bookmark1.png)
![Bookmark example 2](./img/bookmark2.png)