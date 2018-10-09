const express = require('express');
const app = express();
const targetUrl = 'https://openebs-community.slack.com/join/shared_invite/enQtMjQzMTg4NTcyNTY2LTJiMzVjYjA5ZDk3YmI4NjAxY2QyYmI3MTA1MmUxMTAzNTU0NTM5NTViOTIxMjA1NWQ4NzVmMTBiNjk0NDU1YzQ';


//call back function
function handleRedirect(req, res) {
    res.redirect(targetUrl);
}

app.get("/", handleRedirect);
app.get('*', (req, res) => {
    res.send('Not Found!')
})

//change the value here if you're using a different port num
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});
