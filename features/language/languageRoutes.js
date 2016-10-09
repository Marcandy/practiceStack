const languageCtrl = require( "./languageCtrl" );

module.exports = app => {
	app.route( "/api/languages" )
		.post( languageCtrl.postLanguage )
		.get( languageCtrl.getLanguages );

	// app.route( "/api/languages/:id" )
	app.route( "/api/languages/:name" )
		.get( languageCtrl.getLanguage );
};
