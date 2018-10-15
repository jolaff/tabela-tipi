module.exports = app => {
  app.get('/secao', (req, res) => {
    res.render('secao');
  });
};
