// Handler for catching Errors.

// With async/await, you need some way to catch errors. In each controller, we
// wrap the function in catchErrors() and pass it along with next().
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// 404 Not Found Error passed along with next().
exports.notFound = (req, res, next) => {
  const err = new Error("The page you are looking for can not be found! 😞");
  err.status = 404;
  next(err);
};

// Development Errors
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";

  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      "<mark>$&</mark>"
    )
  };

  res.status(err.status || 500);
  res.format({
    "text/html": () => {
      res.render("Error", errorDetails);
    },
    "application/json": () => {
      res.json(errorDetails);
    }
  });
};

// Production Errors (w/o stacktraces)
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render("Error", {
    message: err.message,
    error: {}
  });
};
