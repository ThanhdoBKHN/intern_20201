const isProduction = process.env.NODE_ENV === 'production';

// server error handler
const handleError = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = !isProduction ? err : '';

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

module.exports = [handleError];
