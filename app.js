const express = require('express');
const app = express();
const targetUrl = 'https://join.slack.com/t/kubera-community/shared_invite/zt-fpabc5tw-S2s~Uq8_F_lsR_6D2QoKyQ';


//call back function
function handleRedirect(req, res) {
    res.redirect(targetUrl);
}

app.get("/", handleRedirect);
app.get('*', (req, res) => res.send('Not Found!'));


//change the value here if you're using a different port num
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));