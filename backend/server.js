import express from 'express';
//above import module snytax   unsychonorous

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });
 
app.use(express.static('dist'))

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
   //array 
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fouth joke',
            content: 'This is a fouth joke'
        },
        {
        id: 5,
        title: 'A fifth joke',
        content: 'This is a fifth fouth joke'
        },

    ];
    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);    
}
);

