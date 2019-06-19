const express = require('express');
const app = express();
const targetUrl = 'https://openebs-community.slack.com/join/shared_invite/enQtNjcyMDI4NTc4MzQyLTA5MWYyZDQ3ZmE0MWU0YjU0ZDM5ZjlmNjNiNzhjMDNjMjk4MmQ0MDM3OGRmODczZDVhYjlmMzYzZWI2ZWYxNGQ';


//call back function
function handleRedirect(req, res) {
    res.redirect(targetUrl);
}

app.get("/", handleRedirect);
app.get('*', (req, res) => res.send('Not Found!'));


//change the value here if you're using a different port num
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));