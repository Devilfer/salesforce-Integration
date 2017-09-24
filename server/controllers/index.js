

/**
 * Get Login Page
 */
module.exports.DisplayHome = (req, res) => {
   res.render('content/index', { title: 'Salesforce Login' });
}
