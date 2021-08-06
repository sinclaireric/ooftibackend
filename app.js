const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./midleware/auth');
const path = require('path');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');


/* mongoose.connect('mongodb://127.0.0.1/sempos',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie locale !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
 */
mongoose.connect('mongodb+srv://monsieur:Manchester@monci.3dshg.mongodb.net/monci?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })   
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/product',productRoutes);
app.use('/api/user',userRoutes);

module.exports = app; 





